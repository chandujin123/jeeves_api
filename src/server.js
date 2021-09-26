const express = require('express');
const multer  = require('multer');
const cors = require('cors');

const path = require('path')
const {addProperty, getProperties} = require("./controllers/property.controller");
const { properyValidator } = require("./validators/property.validator");
const { setDestinationPath, setFileName, fileFilter } = require("./utils/UploadUtils");

require("./dal")
const app = express();
const storage = multer.diskStorage({ destination: setDestinationPath, filename: setFileName })
const upload = multer({ storage , fileFilter: fileFilter})

app.use("/property_image",express.static(path.join(__dirname,"property_image")));
app.use(express.json())
app.use(cors())

app.get('/getProperties',async (req,res)=>{
    const result  = await getProperties(req.query)
    if(result.error){
        res.send(result).status(500);
    }
    else {
        res.send(result).status(200)
    }
})
app.post('/addProperties',properyValidator, async (req,res)=> {
    const result  = await addProperty(req.body)
    if(result.error){
        res.send(result).status(500);
    }
    else {
        res.send(result).status(200)
    }

})

app.post('/img/upload', upload.array('photos', 12), function (req, res) {
    res.send(req.files)
    .status(200);
  })

app.listen(3000,()=>{
console.log("Server started at 3000 port")
})