var mongoose = require('mongoose');

const ComponentSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    n_available: {
        type: Number,
        required: true
    },
    depId: {
        type: String
    }
})

const Component = mongoose.model("Component", ComponentSchema);

module.exports = {Component, ComponentSchema}
