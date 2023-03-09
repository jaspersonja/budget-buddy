const {Schema} = require('mongoose');

const grocerySchema = new Schema({
    groceryPlace: {
        type: String,
        required: true
    },
    groceryCost: {
        type: Number,
        required: true
    },
    groceryDate: {
        type: String,
        required: true
    }
})

module.exports= grocerySchema;