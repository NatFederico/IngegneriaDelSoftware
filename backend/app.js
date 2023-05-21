const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const usersRouter = require('./routes/users');
const teamRouter = require('./routes/team');
const boardRouter = require('./routes/team');
const galleryRouter = require('./routes/gallery');
const calendarRouter = require('./routes/calendar');
const departmentRouter = require('./routes/department');

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next){
    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'No credentials sent!' });
    }
    let token = req.header('Authorization').replace('Bearer', '').trim()
    try {
        jwt.verify(token, process.env.JWT_SECRET, {algorithm: 'HS256'}, function (err, decoded) {
            if (err) {
                return res.status(401).json(err)
            }
            res.locals.roles = decoded.roles
            next()
        })
    } catch (e) {
        console.log(e)
        return res.status(500).send("error");
    }
})


app.use('/team', teamRouter);
app.use('/users', usersRouter);
app.use('/department', departmentRouter)
app.use('/board', boardRouter);
app.use('/gallery', galleryRouter)
app.use('/calendar', calendarRouter)

module.exports = app;

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT);
        console.log("...connected to Atlas instance");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();
