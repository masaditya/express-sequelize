const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    "perusahaan",
    "root",
    "", {
        host: "localhost",
        dialect: "mysql"
    }
)
module.exports = sequelize;