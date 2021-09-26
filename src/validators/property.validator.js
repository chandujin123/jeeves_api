const  propertyList  = [
    "propertyName",
    "Description",
    "Address",
    "Price",
    "LocalityArea",
    "CarpetArea",
    "Measure",
    "Images"
] 

module.exports = {
    properyValidator:(req, res, next) => {

        for(const pl of propertyList) {
            if(!req.body[pl]){
                res.send({error:true, msg:`${pl} is Required`}).status(400)
                return;
            }
        }
        next();
    }
}