'use strict'

import {Schema, model} from 'mongoose'

const appoimentSchema = Schema({
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['CREATED', 'ACCEPTED', "CANCELLED", 'COMPLETED'],
        default: 'CREATED',
        require: true
    },
    animal: {
        type: Schema.ObjectId,
        ref: 'animal',
        require: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'user',
        require: true
    }
}, {
    versionKey: false
})

export default model('appoiment', appoimentSchema)

