import mongoose from "mongoose";
import schoolService from '../services/school.service.js'


const validationSchool = async (req, res, next) => {
    const schoolId = req.params.id;

    const getSchool = await schoolService.getSchoolById(schoolId);

    if (!getSchool) {
        return res.status(400).send({ message: 'School not found' })
    }

    req.id = schoolId;
    req.school = getSchool; 

    next();
}

export default validationSchool;