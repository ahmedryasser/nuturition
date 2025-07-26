module.exports = (app, db) => {
  /**
   * @swagger
   * /food/{id}/nutrition:
   *   get:
   *     summary: Get nutrition info for a specific food item
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Nutrition info
   *       404:
   *         description: Not found
   */
  app.get('/food/:id/nutrition', async (req, res) => {
    try {
      const nutrition = await db.Nutrition.findOne({
        where: { food_id: req.params.id },
      });

      if (!nutrition) {
        return res.status(404).json({ message: 'Nutrition info not found' });
      }

      res.json(nutrition);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};
