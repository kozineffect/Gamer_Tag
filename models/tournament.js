module.exports = function(sequelize, DataTypes) {
  var tournament = sequelize.define("tournament", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
    
    },
        city:{
        type:DataTypes.STRING,
        allowNull:false

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
        end_date:{
        type:DataTypes.STRING
    },
            cutoff:{
        type:DataTypes.STRING
    },
    tournament_time:{
        type:DataTypes.STRING
    },
    game_title:{
        type:DataTypes.STRING,
        // allowNull:false
    },
    number_players:{
        type:DataTypes.INTEGER(1)
    },
    console:{
        type:DataTypes.STRING
    },
    user1:{
        type:DataTypes.STRING
    },
    user2:{
        type:DataTypes.STRING
    },
    user3:{
        type:DataTypes.STRING
    },
    user4:{
        type:DataTypes.STRING
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