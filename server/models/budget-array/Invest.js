const {Schema} = require('mongoose');

const investSchema = new Schema({
    brokerName: {
        type: String,
        required: true
    },
    brokerageDeposit: {
        type: Number,
        required: true
    },
    brokerageDate: {
        type: String,
        required: true
    }
})

module.exports= investSchema;