const moment =  require("moment-timezone");
const dt_rnage = {
    "This week":()=>{
        return [moment().startOf('week'), moment().endOf('week') ];
    },
    "Last 5 Week":()=>{
        return [moment().subtract(5*7, "days"), moment()];
    },
    "Last 15 week":()=>{
        return [moment().subtract(15*7, "days"), moment()];
    }
}
function constConvertToTimeZone(daterange){
    return dt_rnage[daterange]()
}
module.exports = {
    constConvertToTimeZone
}