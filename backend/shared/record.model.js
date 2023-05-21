const mongoose = require('mongoose')

const RecordSchema = new mongoose.Schema({
    _id: String,
    year: Number,
    nameOfGP: String,
    pilotId: String,
    placement: Number,
    isPole: Boolean,
    isFastest: Boolean
})

const Record = new mongoose.model("Record", RecordSchema)

module.exports = {Record, RecordSchema}
