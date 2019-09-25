 const Pegawai = require('../models/Pegawai')

 module.exports = {

     index: function (req, res) {
         Pegawai.findAll().then(function (rows) {
             res.json(rows)
         })
     },

     search: function (req, res) {
         Pegawai.findByPk(req.params.id).then(function (row) {
             res.json(row)
         })
     },

     store: function (req, res) {
         Pegawai.create(req.body).then(function (rows) {
             res.json(rows)
         })
     },

     update: function (req, res) {
         Pegawai.findByPk(req.params.id).then(function (row) {
             row.update(req.body)
             res.json(row)
         })
     },
     destroy: function (req, res) {
         Pegawai.findByPk(req.params.id).then(function (row) {
             row.destroy()
             res.json(row)
         })
     }
 }