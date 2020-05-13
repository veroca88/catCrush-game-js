const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/catCrush', (req, res, next) => {
  res.render('game/catCrush');
});

module.exports = router;