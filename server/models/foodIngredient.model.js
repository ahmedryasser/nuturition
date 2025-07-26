module.exports = (sequelize, DataTypes) => {
    const FoodIngredient = sequelize.define('food_ingredient', {
      quantity: DataTypes.DECIMAL(6, 2),
      unit: DataTypes.STRING(20),
    }, {
      tableName: 'food_ingredient',
      timestamps: false,
    });

    return FoodIngredient;
  };
  