const mongoose = require("mongoose");
const {BoardSchema} = require('./board.model')
const {GallerySchema} = require('./gallery.model')
const {CalendarSchema} = require('./calendar.model')
const {RecordSchema} = require('./record.model')
const {DepartmentSchema} = require('./department.model')

const TeamSchema = new mongoose.Schema({
    _id: {
        type: String,
    },
    userId: [String],
    name: String,
    board: BoardSchema,
    gallery: GallerySchema,
    calendar: CalendarSchema,
    records: [RecordSchema],
    departments: [DepartmentSchema]
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = {Team, TeamSchema}
