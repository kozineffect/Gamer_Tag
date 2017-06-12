module.exports = function(sequelize, DataTypes) {
  var tournament = sequelize.define("tournament", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
    
    },
    user_admin:{
        type:DataTypes.STRING,
        allowNull:false

    },
    tournament_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    tournament_password:{
        type:DataTypes.STRING,
        allowNull:false
    },
      date_created:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW

    },
    tournament_date:{
        type:DataTypes.STRING
    },
    game_title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    number_players:{
        type:DataTypes.INTEGER(1)
    },
    users_in_tournament:{
        type:DataTypes.STRING
    },
    admin_verify:{
        type:DataTypes.BOOLEAN
    }

  });
  return tournament;
  };