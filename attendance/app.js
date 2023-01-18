import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import './config/index.js';
import apiRouter from './routes/routes.js';
import './models/index.js';
import errorHandler from './middleware/errorHandler.js';
import swaggerSpec from './config/swagger-config.js';

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


export default app;
