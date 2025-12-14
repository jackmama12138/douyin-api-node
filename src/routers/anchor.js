const express = require('express');
const anchor = require('../controllers/anchor');
const router = express.Router();

router.get('/search/:name', anchor.search);

router.get('/history/:aid', anchor.history);

router.get('/profile/:sec_user_id', anchor.profile);

module.exports = router;
