const express = require('express');
const anchor = require('../controllers/rank');
const router = express.Router();

router.get('/list', anchor.ranklist);

router.get('/webranklist', anchor.webRankList);

router.get('/creator', anchor.creator);

router.get('/hot', anchor.hotsearch);

router.get('/gamelist', anchor.gamelist);


module.exports = router;
