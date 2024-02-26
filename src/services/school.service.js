import Schools from "../models/Schools.js";

const createSchool = (body) => Schools.create(body);

const getAllSchools = (offset, limit) => Schools
    .find().sort({ _id: -1 }).skip(offset).limit(limit);

const getSchoolById = (id) => Schools.findById(id);

const countSchools = () => Schools.countDocuments();

export const addComment = (idSchool, comment) => {
    const idComment = Math.floor(1000 * Math.random()).toString(36);

    return Schools.findOneAndUpdate(
        { _id: idSchool },
        {
            $push: {
                schoolFeedback: { idComment, comment, createdAt: new Date() },
            },
        }
    );
};

export default {
    createSchool,
    getAllSchools,
    getSchoolById,
    countSchools,
    addComment,
}