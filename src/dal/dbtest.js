const db = require("./index")

setTimeout(async ()=>{
    // check if the insertion is working as expected 
    const property = await db.Property.create({
        propertyName: "GreenHouse",
        Description: "this is a test discription",
        Images:"a.jpg,b.jpg,c.jpg",
        Address:"this is a test address",
        LocalityArea: "Hyderabad",
        Price:100,
        CarpetArea:200,
    })
    await property.save()
},5000)