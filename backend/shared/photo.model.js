const mongoose = require('mongoose')

const PhotoSchema = new mongoose.Schema({
    _id: String,
    title: String,
    caption: String,
    image: String,
    pub_date: Date
})

const Photo = new mongoose.model("Photo", PhotoSchema)

module.exports = {Photo, PhotoSchema}
