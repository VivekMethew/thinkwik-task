const { eventsEnt } = require("../../Entity")

module.exports = {
    /**
     * @POST Request {} 
     * Signup Users 
     */
    async createEvents(req, res, next) {
        try {
            let payload = req.body
            payload.userId = req.payload.aud;
            let result = await eventsEnt.createEvents(payload)
            if (result.success) {
                res.status(result.code)
                    .json({
                        success: true,
                        message: result.message,
                        data: result.data
                    })
            } else {
                res.status(result.code)
                    .json({
                        success: true,
                        message: result.message
                    })
            }

        } catch (error) {
            next(error)
        }
    },
    async getEvents(req, res, next) {
        try {
            let result = await eventsEnt.getEvents()
            if (result.success) {
                console.log(result.data[0].participants.length)
                res.status(result.code)
                    .json({
                        success: true,
                        message: result.message,
                        data:  result.data
                    })
            } else {
                res.status(result.code)
                    .json({
                        success: true,
                        message: result.message
                    })
            }

        } catch (error) {
            next(error)
        }
    },
    async joinEvents(req, res, next) {
        try {
            let payload = req.body
            payload.userId = req.payload.aud
            let result = await eventsEnt.joinEvents(payload)
            if (result.success) {
                res.status(result.code)
                    .json({
                        success: true,
                        message: result.message,
                        data: result.data
                    })
            } else {
                res.status(result.code)
                    .json({
                        success: true,
                        message: result.message
                    })
            }
        } catch (error) {
            next(error)
        }
    },
    async leaveEvents(req, res, next) {
        try {
            let payload = req.body
            payload.userId = req.payload.aud
            let result = await eventsEnt.leaveEvents(payload)
            if (result.success) {
                res.status(result.code)
                    .json({
                        success: true,
                        message: result.message
                    })
            } else {
                res.status(result.code)
                    .json({
                        success: true,
                        message: result.message
                    })
            }
        } catch (error) {
            next(error)
        }
    },
    async getParticipantAnEvents(req, res, next) {
        try {
            let payload = req.body
            let result = await eventsEnt.getParticipantAnEvents(payload)
            if (result.success) {
                res.status(result.code)
                    .json({
                        success: true,
                        message: result.message,
                        data:result.data
                    })
            } else {
                res.status(result.code)
                    .json({
                        success: true,
                        message: result.message
                    })
            }
        } catch (error) {
            next(error)
        }
    },
    async getEventByUserId(req, res, next) {
        try {
            let userId = req.body.userId;
            let result = await eventsEnt.getEventByUserId(userId)
            if (result.success) {
                res.status(result.code)
                    .json({
                        success: true,
                        message: result.message,
                        data:result.data
                    })
            } else {
                res.status(result.code)
                    .json({
                        success: true,
                        message: result.message
                    })
            }
        } catch (error) {
            next(error)
        }
    }
}