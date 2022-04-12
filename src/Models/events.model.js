const mongoose = require('mongoose');
const Schema = mongoose.Schema

const eventsSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    title: {
        type: String,
        trim: true,
        default: null
    },
    descriptions: {
        type: String,
        trim: true,
        default: null
    },
    event_date: {
        type: Date,
        default: null
    },
    event_time: {
        type: String,
        default: null
    },
    place: {
        type: String,
        default: null
    },
    participants:[ {
        members:{
            type: Schema.Types.ObjectId,
            ref: 'Users',
            default: null
        }
    }],
    max_part:{
        type:Number,
        default:0
    },
    isDeleted: {
        type: Date,
        default: null
    },
    status: {
        type: Number,
        default: 1
    },
}, {
    timestamps: true
})

const EventsModal = mongoose.model('Events', eventsSchema)

module.exports = EventsModal