const Sequelize = require("sequelize")
const sequelize = require("../config/db")

const Pegawai = sequelize.define(
    "pegawai", {
        id_pegawai: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_pegawai: {
            type: Sequelize.STRING(100)
        },
        alamat: {
            type: Sequelize.STRING(100)
        }
    }, {
        timestamps: false,
        tableName: "pegawai"
    }
)
module.exports = Pegawai