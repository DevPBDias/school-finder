import schoolService from '../services/school.service.js'

const createSchool = async (req, res) => {
    try {
        const body = req.body;
        const { name, city, neighborhood, phoneNumber,
            adress, schoolType, about, schoolFeedback, educationType } = req.body;

        if (!body) res.status(400).send({ message: 'Submit all fields for registration' })

        const school = await schoolService.createSchool(req.body)

        if (!school) res.status(401).send({ message: 'School not created' })

        return res.status(201).send({
            message: 'Created',
            schoolCreated: {
                id: school.id,
                name,
                city,
                neighborhood,
                phoneNumber,
                adress,
                schoolType,
                about,
                schoolFeedback,
                educationType,
            }
        });
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getSchoolById = async (req, res) => {
    try {
        const schoolFound = req.school;

        return res.send(schoolFound);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const getAllSchools = async (req, res) => {
    try {
        const schools = await schoolService.getAllSchools();
        const numberOfSchools = await schoolService.countSchools();

        if (schools.length === 0) res.status(400).send({ message: 'Schools not found' })

        return res.status(200).send({ schoolsList: schools, countSchools: numberOfSchools });
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

const addComment = async (req, res) => {
    try {
        const { id } = req;
        const { grade, visitor, type, text } = req.body;
        const comment = { grade, visitor, type, text }

        if (!grade && !visitor && !type && !comment) res.status(400)
            .send({ message: 'Submit at least one field' })

        await schoolService.addComment(id, comment)

        res.status(201).send({ message: 'School comment updated' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export default {
    createSchool,
    getSchoolById,
    getAllSchools,
    addComment
}