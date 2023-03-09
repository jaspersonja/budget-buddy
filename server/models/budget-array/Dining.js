const {Schema} = require('mongoose');

const diningSchema = new Schema({
        diningRestaurant: {
            type: String,
            required: true
        },
        diningBill: {
            type: Number,
            required: true
        },
        diningDate: {
            type: String,
            required: true
        }
})

module.exports= diningSchema;