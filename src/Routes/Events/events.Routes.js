const express = require('express')
const { celebrate } = require('celebrate')
const { eventsControllers } = require('../../Controllers')
const validation = require('../../Comman/validations')
const { verifyAccessToken } = require('../../Comman/auth-validators')

const router = express.Router()

router.post('/add', celebrate({
    body: {
        title: validation.event.title.required(),
        desciptions: validation.event.desciptions.required(),
        event_date: validation.event.event_date.required(),
        event_time: validation.event.event_time.required(),
        place: validation.event.place.required(),
        max_part: validation.event.max_part.required()
    }
}),verifyAccessToken, eventsControllers.createEvents)

router.get('/list', eventsControllers.getEvents)
router.post('/join',verifyAccessToken, eventsControllers.joinEvents)
router.post('/leave',verifyAccessToken, eventsControllers.leaveEvents)
router.post('/participants',verifyAccessToken, eventsControllers.getParticipantAnEvents)
router.post('/detail', celebrate({
    body: {
        userId: validation.user.objectId.required()
    }
}),verifyAccessToken, eventsControllers.getEventByUserId)

module.exports = router