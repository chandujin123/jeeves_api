
const areaToMetersConverters= {
    sqmt:(area)=>area,
    sqft:(area)=>area/10.764,
    sqyd:(area)=>area/1.196
}
function getSquareMeters(area,measure){
    if(area && measure)
        return areaToMetersConverters[measure](area)
    else
        return null
}
module.exports = {
    getSquareMeters
}