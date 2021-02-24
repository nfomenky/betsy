const router = require('express').Router();
const apiRouter = require('./api');

  router.use('/api', apiRouter);

router.get('/', (req, res) => {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('hello betsy!');
});

module.exports = router;
