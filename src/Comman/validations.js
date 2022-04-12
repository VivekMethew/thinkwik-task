const { Joi } = require('celebrate')

module.exports = {
    user: {
        email: Joi.string().trim().email(),
        password: Joi.string().min(6).max(32),
        phone: Joi.string().trim(),
        objectId:Joi.string().trim()
    },
    event: {
        title: Joi.string().trim(),
        desciptions: Joi.string().trim(),
        event_date: Joi.string().trim(),
        event_time: Joi.string().trim(),
        place: Joi.string().trim(),
        max_part: Joi.number()
    }
}