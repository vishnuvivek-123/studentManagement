import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import sequelize from '../config/sequelize-config.js';
import { logger } from '../config/winston-config.js';

const basename = path.basename(fileURLToPath(import.meta.url));
const dirname = path.dirname(fileURLToPath(import.meta.url));

const files = fs
  .readdirSync(dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'));

(async () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    // eslint-disable-next-line no-await-in-loop
    await import(`file://${path.resolve(dirname, file)}`);
  }

  Object.values(sequelize.models).forEach((model) => {
    if (model.associate) {
      model.associate(sequelize.models);
    }
  });

  sequelize.sync({ force: false, alter: { drop: false } })
    .then(() => logger.info('db sync done!'))
    .catch((e) => logger.error({ message: `Something went wrong with db update! Error: ${e.message}`, stack: e.stack }));
})();
