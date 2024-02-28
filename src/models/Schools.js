import mongoose from 'mongoose';

const SchoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    city: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    },
    neighborhood: {
        type: String,
        required: true,
    },
    image: { type: String },
    phoneNumber: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    schoolFeedback: {
        type: Array,
    },
    educationType: {
        type: {
            kindergarten: {
                vacancies: { type: Number },
                shifts: { type: Array },
                schoolFee: { type: String }
            },
            primarySchool: {
                vacancies: { type: Number },
                shifts: { type: Array },
                schoolFee: { type: String }
            },
            secondarySchool: {
                vacancies: { type: Number },
                shifts: { type: Array },
                schoolFee: { type: String }
            },
            highSchool: {
                vacancies: { type: Number },
                shifts: { type: Array },
                schoolFee: { type: String }
            },
        },
    },
});

const School = mongoose.model("School", SchoolSchema);

export default School;