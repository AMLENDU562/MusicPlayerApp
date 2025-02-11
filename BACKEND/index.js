var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var imgSchema = require('./model');
var fs = require('fs');
var path = require('path');
app.set("view engine", "ejs");
require('dotenv').config()

const cors=require('cors')

app.use(cors())

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('connected'))
.catch(e=>console.log(e));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var multer = require('multer');
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		if (file.fieldname === 'image') {
			cb(null, '../FrontEnd/src/images/');
		} else if (file.fieldname === 'audio') {
			cb(null, '../FrontEnd/src/audios/');
		} else {
			cb(new Error('Invalid fieldname'));
		}
	},
	filename: (req, file, cb) => {
		// You can modify filename dynamically here if needed
		cb(null, file.originalname);
	}
});


var upload = multer({ storage: storage });



app.post('/',async(req,res)=>{
    console.log(req.body);
})

app.get('/', (req, res) => {
	res.send('<h1>WELCOME SIR</h1>')
	imgSchema.find({})
	.then((data, err)=>{
		if(err){
			console.log(err);
		}

		else{
			console.log("Redirect");
		}
	})
});

app.get('/get-image',(req,res)=>{
	imgSchema.find({}).then(data=>{
		res.send(data);
	});
})

app.get('/upload',(req,res)=>{
	res.send("<h1>Uploaded file</h1>");
})

var uploadMiddleware = upload.fields([{ name: 'image', maxCount: 100 }, { name: 'audio', maxCount: 100 }]);


app.post('/upload', uploadMiddleware, (req, res) => {
    // Check if required fields are present
   

    console.log(req.files);
	console.log(req.body.name);
	console.log(req.body);

    var obj = {
        name: req.body.name,
        img: {
            data: req.files.image[0].filename,
            contentType: 'image'
        },
        aud: {
            data: req.files.audio[0].filename,
            contentType: 'audio'
        }
    }

    imgSchema.create(obj)
        .then((item) => {
            // Item successfully created
            return res.status(200).json({ success: true, message: "Upload successful" });
        })
        .catch((err) => {
            // Handling errors
            return res.status(500).json({ error: "Internal Server Problem" });
        });
});

var port = process.env.PORT
app.listen(port, err => {
	if (err)
		throw err
	console.log('Server listening on port', port)
})
