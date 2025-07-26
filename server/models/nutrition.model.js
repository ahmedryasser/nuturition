module.exports = (sequelize, DataTypes) => {
    const Nutrition = sequelize.define('nutrition', {
      calories: DataTypes.INTEGER,
      fat: DataTypes.DECIMAL(5, 2),
      protein: DataTypes.DECIMAL(5, 2),
      carbs: DataTypes.DECIMAL(5, 2),
    }, {
      tableName: 'nutrition',
      timestamps: false, 
    });
  
    return Nutrition;
  };
  