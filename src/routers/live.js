const express = require('express');
const anchor = require('../controllers/live');
const router = express.Router();

router.get('/room/:web_rid', anchor.room);

router.get('/detail/:room_id', anchor.detail);


module.exports = router;
