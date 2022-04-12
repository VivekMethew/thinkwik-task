const express = require('express')
const { celebrate } = require('celebrate')
const { usersControllers } = require('../../Controllers')
const validation = require('../../Comman/validations')
const { verifyAccessToken } = require('../../Comman/auth-validators')


const router = express.Router()

// Register Users
router.post('/sighup', celebrate({
    body: {
        email: validation.user.email.required(),
        password: validation.user.password.required()
    }
}), usersControllers.signUp)

// Login Users
router.post('/login',celebrate({
    body: {
        email: validation.user.email.required(),
        password: validation.user.password.required()
    }
}), usersControllers.Login)

// View Profile
router.get('/view_profile',verifyAccessToken, usersControllers.viewProfile)

// Update Profile
router.patch('/update_profile',verifyAccessToken, usersControllers.updateProfile)

// Delete Profile
router.delete('/delete_profile',verifyAccessToken, usersControllers.deleteProfile)

module.exports = router