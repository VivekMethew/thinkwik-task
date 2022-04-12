const { signAccessToken } = require("../../Comman/auth-validators")
const { usersEnt } = require("../../Entity")

module.exports = {
    /**
     * @POST Request {} 
     * Signup Users 
     */
    async signUp(req, res, next) {
        try {
            let payload = req.body
            let result = await usersEnt.signUp(payload)
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
    async Login(req, res, next) {
        try {
            let payload = req.body
            let result = await usersEnt.login(payload)
            if (result.success) {
                const accessToken = await signAccessToken(result.data.id)
                console.log(accessToken)
                res.status(result.code)
                    .json({
                        success: true,
                        message: result.message,
                        data: { id: result.data.id, email: result.data.email },
                        accessToken: accessToken
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
    async viewProfile(req, res, next) {
        try {
            let payload = req.payload
            console.log(payload.aud)
            let result = await usersEnt.viewProfile(payload.aud)
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
    async updateProfile(req, res, next) {
        try {
            let userId = req.payload.aud;
            let payload = req.body;
            let result = await usersEnt.updateProfile(userId, payload)
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
    async deleteProfile(req, res, next) {
        try {
            let userId = req.payload.aud;
            let result = await usersEnt.deleteProfile(userId)
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
    }
}