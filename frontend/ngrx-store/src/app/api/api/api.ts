export * from './productController.service';
import { ProductControllerService } from './productController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export const APIS = [ProductControllerService, UserControllerService];
