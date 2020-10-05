import express from 'express';
import PointContoller from './controllers/PointController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointContoller();
const itemsController = new ItemsController();


routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post('/points', pointsController.create);

export default routes;