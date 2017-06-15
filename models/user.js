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
    ninSwitch:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue: false
    },
    ps4:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue: false
    },
    xbox1:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue: false
    },
    nin3ds:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue: false
    },
    ninwu:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue: false
    },
    pc:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue: false
    },
    rpg:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue: false
    },
    sports:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue: false
    },
    simulator:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue: false
    },
    adventure:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue: false
    },
    action:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue: false
    },
    actionAdventure:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue: false
    },
    date_created:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW

    }
  
 });

  return user;
};