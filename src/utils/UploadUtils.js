
const uuid  = require('uuid');
const path = require('path')
const DESTINATION_PATH = path.join(__dirname,'../property_image/')
const ALLOWED_FILES = ['image/png', 'image/jpeg', 'image/jpg',]
function setDestinationPath(req, file, cb){
    cb(null, DESTINATION_PATH);
}

function setFileName(req, file, cb){
    const extenction = file.mimetype.split("/")[1]
    cb(null, `${uuid.v4()}.${extenction}`)
}
function fileFilter(req, file, cb){
    if (ALLOWED_FILES.includes(file.mimetype)) {
        return  cb(null, true)
      }
      cb(null, false)
}

module.exports = {
    setDestinationPath,
    setFileName,
    fileFilter
}