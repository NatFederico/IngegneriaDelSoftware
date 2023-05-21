var mongoose = require('mongoose');

const ComponentSchema = new mongoose.Schema({
    _id: String,
    name: String,
    description: String,
    n_available: Number,
    depId: String
})

const Component = mongoose.model("Component", ComponentSchema);

module.exports = {Component, ComponentSchema}
