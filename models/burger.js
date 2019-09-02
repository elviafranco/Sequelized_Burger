module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define("Burger", {
     burger_name: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
             len: [1]
         }
     },
     devoured: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
         defaultValue: false,
     },
    //  createdAt: {
    //     type: DataTypes.DATE,
    //     allowNull: true,
    //     defaultValue: Date.now(),
    // },
    // UpdatedAt: {
    //     type: DataTypes.DATE,
    //     allowNull: true,
    //     defaultValue: Date.now(),
    // },
    });
    return Burger;
  };
  