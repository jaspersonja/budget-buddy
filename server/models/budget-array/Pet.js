const {Schema} = require('mongoose');

const petSchema = new Schema({
    petItem: {
        type: String,
        required: true
    },
    petItemCost: {
        type: Number,
        required: true
    },
    petDate: {
        type: String,
        required: true
    }
})

module.exports= petSchema;