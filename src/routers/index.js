const express = require('express');
const router = express.Router();

const liveRouter = require('../routers/live');
const rankRouter = require('../routers/rank');
const anchorRouter = require('../routers/anchor');

router.use('/live', liveRouter);
router.use('/rank', rankRouter);
router.use('/anchor', anchorRouter);



module.exports = router;
