module.exports = (sequelize, DataTypes) => {
    const Food = sequelize.define('food', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.DECIMAL(10, 2) },
      category_id: { type: DataTypes.INTEGER, allowNull: false },
      img: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT },
    }, {
      tableName: 'food',
      timestamps: false,
    });
  
    return Food;
  };
  