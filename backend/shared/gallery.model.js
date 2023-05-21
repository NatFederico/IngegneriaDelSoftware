const mongoose = require('mongoose')
const {PhotoSchema} = require('./photo.model')

const GallerySchema = mongoose.Schema({
    _id: String,
    title: String,
    caption: String,
    lastEdit: Date,
    photos: [PhotoSchema]
})

const Gallery = mongoose.model('Gallery', GallerySchema)

module.exports = {Gallery, GallerySchema}
