import amqp from 'amqplib/callback_api.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

function getJsFilesRecursive(dir) {
  const files = fs.readdirSync(dir);
  const result = [];

  files.forEach((file) => {
    const filePath = path.resolve(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      result.push(...getJsFilesRecursive(filePath));
    } else if (stat.isFile() && file.slice(-3) === '.js') {
      result.push({ name: file, path: filePath });
    }
  });

  return result;
}

async function getAllEvents() {
  const basename = path.basename(fileURLToPath(import.meta.url));
  const dirname = path.dirname(fileURLToPath(import.meta.url));

  const files = getJsFilesRecursive(dirname).filter((file) => file.name !== basename);
  const events = await Promise.all(files.map(async (file) => import(`file://${file.path}`)));
  return events.filter((event) => event.default && event.default.event && event.default.handler).map((event) => event.default);
}

amqp.connect('amqp://localhost', (error0, connection) => {
  if (error0) {
    throw error0;
  }
  connection.createChannel((error1, channel) => {
    if (error1) {
      throw error1;
    }

    getAllEvents().then((events) => {
      events.forEach((event) => {
        channel.assertQueue(event.event, {
          durable: false,
        });

        channel.consume(event.event, (msg) => {
          event.handler(JSON.parse(msg.content.toString()));
        }, {
          noAck: true,
        });
      });
    });
  });
});
