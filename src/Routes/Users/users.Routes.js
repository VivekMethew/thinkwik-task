const express = require('express')
const { celebrate } = require('celebrate')
const { usersControllers } = require('../../Controllers')
const validation = require('../../Comman/validations')
const { verifyAccessToken } = require('../../Comman/auth-validators')


const router = express.Router()

router.post('/sighup', celebrate({
    body: {
        email: validation.user.email.required(),
        password: validation.user.password.required()
    }
}), usersControllers.signUp)
router.post('/login',celebrate({
    body: {
        email: validation.user.email.required(),
        password: validation.user.password.required()
    }
}), usersControllers.Login)
router.get('/view_profile',verifyAccessToken, usersControllers.viewProfile)
router.patch('/update_profile',verifyAccessToken, usersControllers.updateProfile)
router.delete('/delete_profile',verifyAccessToken, usersControllers.deleteProfile)

module.exports = router