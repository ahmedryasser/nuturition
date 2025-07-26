const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load models
db.Category = require('./category.model')(sequelize, DataTypes);
db.Food = require('./food.model')(sequelize, DataTypes);
db.Nutrition = require('./nutrition.model')(sequelize, DataTypes);
db.Ingredient = require('./ingredient.model')(sequelize, DataTypes);
db.FoodIngredient = require('./foodIngredient.model')(sequelize, DataTypes);

// Define associations

db.Food.belongsTo(db.Category, {
  foreignKey: 'category_id',
});

db.Category.hasMany(db.Food, {
  foreignKey: 'category_id',
});

db.Food.hasOne(db.Nutrition, {
  foreignKey: 'food_id',
  onDelete: 'CASCADE',
});
db.Nutrition.belongsTo(db.Food, { foreignKey: 'food_id' });

db.Food.belongsToMany(db.Ingredient, {
  through: db.FoodIngredient,
  foreignKey: 'food_id',
  otherKey: 'ingredient_id',
});
db.Ingredient.belongsToMany(db.Food, {
  through: db.FoodIngredient,
  foreignKey: 'ingredient_id',
  otherKey: 'food_id',
});

module.exports = db;
