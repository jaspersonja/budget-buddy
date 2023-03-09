const {Schema} = require('mongoose');

const billSchema = new Schema({
    billName: {
        type: String,
        required: true
    },
    billAmount: {
        type: Number,
        required: true
    },
    billDate: {
        type: String,
        required: true
    }
})

module.exports= billSchema;