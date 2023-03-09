const {Schema} = require('mongoose');

const shoppingSchema = new Schema({
    shoppingPlace: {
        type: String,
        required: true
    },
    shoppingCost: {
        type: Number,
        required: true
    },
    shoppingDate: {
        type: String,
        required: true
    }
})

module.exports= shoppingSchema;