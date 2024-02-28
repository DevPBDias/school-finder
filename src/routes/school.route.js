import { Router } from 'express';
import schoolController from '../controllers/school.controller.js'
import validationSchool from '../middlewares/validationId.js'

const schoolRoute = Router();

schoolRoute.get('/', schoolController.getAllSchools)
schoolRoute.get('/:id', validationSchool, schoolController.getSchoolById)
schoolRoute.post('/', schoolController.createSchool)
schoolRoute.patch('/:id', validationSchool, schoolController.addComment)
schoolRoute.patch('/image/:id', validationSchool, schoolController.addImageUrl)


export default schoolRoute;