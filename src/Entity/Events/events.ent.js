const EventsModal = require('../../Models/events.model')
module.exports = {
    /**
     * 
     * @MODAL ENTITY
     */
    async createEvents(payload) {
        let result = await EventsModal.create(payload)
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
    async getEvents() {
        let result = await EventsModal.find({}, { _V: 0 }).populate('userId')
        if (result) {
            return { success: true, code: 200, message: 'successfully login', data: result }
        } else {
            return { success: false, code: 400, message: 'Record Not Found...' }
        }
    },
    /**
    * 
    * @MODAL ENTITY
    */
    async joinEvents(payload) {
        let isEvent = await EventsModal.findOne({ _id: payload.eventId })
        console.log(isEvent.participants.length)
        console.log(isEvent.max_part)
        if (isEvent.participants.length <= isEvent.max_part) {
            let result = await EventsModal.update(
                { _id: payload.eventId },
                { $push: { participants: { members: payload.userId } } }
            );
            if (result) {
                return { success: true, code: 200, message: 'success', data: result }
            } else {
                return { success: false, code: 404, message: 'Record Not Found...' }
            }
        } else {
            return { success: false, code: 400, message: 'Participant List Full...' }
        }
    },
    /**
     * 
     * @MODAL ENTITY
     */
    async leaveEvents(payload) {
        let result = await EventsModal.update(
            { _id: payload.eventId },
            { $pull: { participants: { members: payload.userId } } }
        );
        if (result) {
            return { success: true, code: 200, message: 'Leave Event', data: result }
        } else {
            return { success: false, code: 404, message: 'Record Not Found...' }
        }
    },
    /**
     * 
     * @MODAL ENTITY
     */
    async getParticipantAnEvents(payload) {
        let result = await EventsModal.findOne({ id: payload.eventId }).populate('participants.members')
        console.log(result)
        if (result) {
            return { success: true, code: 200, message: 'success', data:{_id:result.id,participants: result.participants} }
        } else {
            return { success: false, code: 404, message: 'Record Not Found...' }
        }
    },
    /**
     * 
     * @MODAL ENTITY
     */
    async getEventByUserId(userId) {
        let result = await EventsModal.findOne({userId:userId}).populate('participants.members')
        if (result) {
            return { success: true, code: 200, message: 'success', data: result }
        } else {
            return { success: false, code: 404, message: 'Record Not Found...' }
        }
    }
}