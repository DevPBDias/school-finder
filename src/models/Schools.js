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
    neighborhood: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    schoolType: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    schoolFeedback: {
        type: Array,
        required: true,
    },
    educationType: {
        type: {
            kindergarten: {
                vacancies: { type: Number },
                shifts: { type: String },
                schoolFee: { type: Number }
            },
            primarySchool: {
                vacancies: { type: Number },
                shifts: { type: String },
                schoolFee: { type: Number }
            },
            secondarySchool: {
                vacancies: { type: Number },
                shifts: { type: String },
                schoolFee: { type: Number }
            },
            highSchool: {
                vacancies: { type: Number },
                shifts: { type: String },
                schoolFee: { type: Number }
            },
        },
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const School = mongoose.model("School", SchoolSchema);

export default School;