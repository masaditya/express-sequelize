const Pegawai = require("../models/Pegawai");
const axios = require("axios");

module.exports = {
  index: function(req, res) {
    Pegawai.findAll().then(function(rows) {
      res.json(rows);
    });
  },

  show: async (req, res) => {
    console.log("bisa");
    axios
      .get("http://localhost:4000/gaji")
      .then(response => {
        res.json(response.data);
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },

  search: function(req, res) {
    Pegawai.findByPk(req.params.id).then(function(row) {
      res.json(row);
    });
  },

  store: function(req, res) {
    Pegawai.create(req.body).then(function(rows) {
      res.json(rows);
    });
  },

  update: function(req, res) {
    Pegawai.findByPk(req.params.id).then(function(row) {
      row.update(req.body);
      res.json(row);
    });
  },
  destroy: function(req, res) {
    Pegawai.findByPk(req.params.id).then(function(row) {
      row.destroy();
      res.json(row);
    });
  }
};
