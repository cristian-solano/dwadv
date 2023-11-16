const model = require("../models")
const sequelize = model.sequelize

sequelize.sync({ force: true });
console.log("All models were synchronized successfully.");