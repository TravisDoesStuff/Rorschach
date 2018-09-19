require('dotenv').config({path: '../.env'});

const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const moment = require('moment');

const expressApp = express();
const router = express.Router();

const API_PORT = process.env.PORT || 3001;

expressApp.use(bodyParser.urlencoded({ extended: true }));
expressApp.use(bodyParser.json());

mongoose.connect(process.env.REACT_APP_MERN_API_ADDRESS, { useNewUrlParser: true });

const Schema = mongoose.Schema;
const CommentSchema = new Schema({
    name: String,
    text: String,
    inkId: { type: Number },
    date: { type: Date },
    versionKey: false
},{ collection: 'rorschach' });
var Comment = mongoose.model('Comment', CommentSchema);

expressApp.use('/api', router);

router.get('/comments/:inkId', (req, res) => {
    const { inkId } = req.params;
    Comment.find({inkId: inkId}, (err, comment) => {
        if(err) console.log(err);
        return res.json({ data: comment });
    }).sort({date: -1});
});

router.post('/comments/:inkId', (req, res) => {
    const comment = new Comment();
    const { userName, answerValue, inkId } = req.body;
    
    comment.name = userName;
    comment.text = answerValue;
    comment.inkId = inkId;
    comment.date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

    comment.save(err => {
        if(err) console.log(err);
        return res.json({ success: true });
    });
});

expressApp.listen(API_PORT, () =>{
    console.log(`Listening on port ${API_PORT}`);
});
