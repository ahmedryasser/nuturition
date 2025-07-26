const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

require('./routes/nutrition.routes')(app, db);
require('./routes/food.routes')(app, db);
require('./routes/category.routes')(app, db);


db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
  });
});
