const UsersModal = require('../../Models/users.modal')
module.exports = {
    /**
     * 
     * @MODAL ENTITY
     */
    async signUp(payload) {
        let result = await UsersModal.create(payload)
        if (result) {
            return { success: true, code: 201, message: 'successfully created...', data: result }
        } else {
            return { success: false, code: 400, message: 'something went wrong...' }
        }
    },
    /**
     * 
     * @MODAL ENTITY
     */
    async login(payload) {
        let result = await UsersModal.findOne({ email: payload.email })
        if (result) {
            let isMatch = await result.isValidPassword(payload.password)
            if (!isMatch) {
                return { success: false, code: 400, message: 'Password does not matched...' }
            }  
            return { success: true, code: 200, message: 'successfully login', data: result }
        } else {
            return { success: false, code: 400, message: 'Record Not Found...' }
        }
    },
     /**
     * 
     * @MODAL ENTITY
     */
      async viewProfile(userId) {
        let result = await UsersModal.findOne({ _id: userId},{_v:0,password:0})
        if (result) {
            return { success: true, code: 200, message: 'success', data: result }
        } else {
            return { success: false, code: 404, message: 'Record Not Found...' }
        }
    },
    /**
     * 
     * @MODAL ENTITY
     */
     async updateProfile(userId,payload) {
        let result = await UsersModal.findByIdAndUpdate(userId,payload,{new:true})
        if (result) {
            return { success: true, code: 200, message: 'updated', data: result }
        } else {
            return { success: false, code: 404, message: 'Record Not Found...' }
        }
    },
    /**
     * 
     * @MODAL ENTITY
     */
     async deleteProfile(userId) {
        let result = await UsersModal.findByIdAndDelete(userId)
        if (result) {
            return { success: true, code: 200, message: 'Items deleted', data: result }
        } else {
            return { success: false, code: 404, message: 'Record Not Found...' }
        }
    }
}