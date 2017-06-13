module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
   
    first_name:{ 
        type:DataTypes.STRING,
        allowNull:false
      
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isEmail:true
        }
    },
    verified:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue:"1"
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false

    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    consoles:{
        type:DataTypes.STRING
        
    },
    Genres:{
        type:DataTypes.STRING

    },
    FavGame1:{
        type:DataTypes.STRING
    },
    FavGame2:{
        type:DataTypes.STRING
    },
    FavGame3:{
        type:DataTypes.STRING
    },
    zipcode:{
        type:DataTypes.INTEGER(5)
    },
    date_created:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW

    }
  
 });

  return user;
};