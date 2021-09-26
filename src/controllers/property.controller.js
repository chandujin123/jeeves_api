
const {Property} = require("../dal")
const { Op, Model } = require("sequelize");
const {constConvertToTimeZone}  = require("../utils/DateConverter");
const {getSquareMeters} = require("../utils/AreaConverter");

async function addProperty(propertyData) {
    try {
        const property = await db.Property.create(propertyData)
        await property.save();
        console.info("Save property Successful")
        return { error:false, msg:"add property successful"}
    }
    catch(error) {
    console.error(error)
    console.error("failed to update the database")
    return { error:true, msg:"Failed to add property"}
    }
}

function getFilter(filter) {
    const queryFilter = {};
    const { Location , priceRange, dateRange } = filter;

        if(Location && Location!='All')
            queryFilter.LocalityArea = Location
        if(priceRange)
            queryFilter.Price = {[Op.gte]:(+priceRange)*100000}
        if(dateRange && dateRange!= 'Any')
            queryFilter.createdAt = {[Op.between]:constConvertToTimeZone(dateRange)}
    
    if(Object.keys(queryFilter).length)
        return {where:queryFilter}
    else
    return  {};
}
async function getProperties(filter){
    try {
        const {measureConverter} = filter;
        const queryFilter = getFilter(filter)
        const propertyList =  await db.Property.findAll(queryFilter)
        propertyList.map(d=>d.dataValues).forEach(d=> { 
              d.CarpetArea = getSquareMeters(d.CarpetArea,measureConverter) 
            });
          console.info("get properties Successful");
          return {error:false,msg:"get properties Successful", data: propertyList}
    } catch (error) {
        console.error(error)
        console.error("failed to update the database")
        return { error:true, msg:"Failed to get Properties"}  
    }
}

module.exports = {
    addProperty,
    getProperties
}