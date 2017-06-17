var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("user", {

        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        verified: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: "1"
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 50]
            }
        },
        FavGame1: {
            type: DataTypes.STRING,
            validate: {
                // isNull: false,
                // notEmpty: true,
                len: [1, 140]
            }
        },
        FavGame2: {
            type: DataTypes.STRING,
            validate: {
                // isNull: false,
                // notEmpty: true,
                len: [1, 140]
            }
        },
        FavGame3: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 140]
            }
        },
        zipcode: {
            type: DataTypes.INTEGER(5),
            validate: {
                isInt: true,
                len: [1, 5]
            }
        },
        ninSwitch: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        ps4: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        xbox1: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        nin3ds: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        ninwu: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        pc: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        rpg: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        sports: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        simulator: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        adventure: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        action: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        actionAdventure: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        date_created: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW

        }
    },{
    // Creating a custom method for our User model. This will check if an unhashed password entered by
    // The user can be compared to the hashed password stored in our database
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    },
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    hooks: {
      beforeCreate: function(user, options) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
        
      
      }
    }
    });

    return user;
};