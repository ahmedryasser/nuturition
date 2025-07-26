module.exports = (app, db) => {
    /**
     * @swagger
     * /food:
     *   get:
     *     summary: Get all food items
     *     responses:
     *       200:
     *         description: List of food items
     */
    app.get('/food', async (req, res) => {
      try {
        const foods = await db.Food.findAll({
          attributes: ['id', 'name', 'price', 'img', 'description'],
          //array of ingredients
          include: [{model: db.Category, attributes: ['name']}, {model: db.Nutrition, attributes: ['calories', 'fat', 'protein', 'carbs']}, {model: db.Ingredient, attributes: ['name']}],
        });
        res.json(foods);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });
  };
  