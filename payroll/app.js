import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import cron from 'node-cron';
import swaggerUi from 'swagger-ui-express';
import './config/index.js';
import apiRouter from './routes/routes.js';
import './models/index.js';
import errorHandler from './middleware/errorHandler.js';
import swaggerSpec from './config/swagger-config.js';
import payrollService from './api/payroll/service.js';

const app = express();

app.use(cors());
app.use(express.json({ limit: '300mb' }));
app.use(express.urlencoded({ limit: '300mb', extended: true }));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', apiRouter);

app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Welcome');
});

cron.schedule('0 0 0 * * *', async () => { // At 12:00 AM every day
  await Promise.all([
    payrollService.processSalary(),
  ]);
});

export default app;
