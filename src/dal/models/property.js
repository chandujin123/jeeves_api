const { Sequelize, DataTypes } = require('sequelize');
module.exports = function (sequelize){
   return sequelize.define('Property', {
    propertyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING
    },
    Images:{
      type: DataTypes.STRING
    },
    Address:{
      type: DataTypes.STRING
    },
    LocalityArea:{
      type: DataTypes.STRING
    },
    Price:{
      type: DataTypes.FLOAT
    },
    CarpetArea:{
      type: DataTypes.INTEGER
    }
  }, {

  });
}



