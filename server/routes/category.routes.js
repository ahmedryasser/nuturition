module.exports = (app, db) => {
    /**
     * @swagger
     * /categories:
     *   get:
     *     summary: Get all categories
     *     responses:
     *       200:
     *         description: List of categories
     */
    app.get('/categories', async (req, res) => {
        const categories = await db.Category.findAll();
        res.json(categories);
    });
};