const express = require("express");
const router = express.Router();
const pegawaiController = require("../controller/PegawaiController.js");

//route read
router.get("/", pegawaiController.index);

// router.get("/:id", pegawaiController.search);

//route ke server 2
router.get("/v2", pegawaiController.show);

//route create
router.post("/", pegawaiController.store);

//route update
router.put("/:id", pegawaiController.update);

//route delete
router.delete("/:id", pegawaiController.destroy);

module.exports = router;
