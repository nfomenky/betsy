const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const productsRouter = require('./products');
const asynHandler = require('express-async-handler');
const { User } = require('../../db/models');
const {
	setTokenCookie,
	restoreUser,
	requireAuth,
} = require('../../utils/auth.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/products', productsRouter);

//--------------TESTING USER AUTHENTICATION -----------------
// router.get(
// 	'/set-token-cookie',
// 	asynHandler(async (req, res) => {
// 		const user = await User.findOne({
// 			where: {
// 				username: 'demo',
// 			},
// 		});
// 		setTokenCookie(res, user);
// 		return res.json({ user });
// 	})
// );

// router.get('/restore-user', restoreUser, (req, res) => {
// 	return res.json(req.user);
// });

// router.get('/require-auth', requireAuth, (req, res) => {
// 	return res.json(req.user);
// });
//-----------------------------------------------------------

router.post('/test', (req, res) => {
	return res.json({ requestBody: req.body });
});

module.exports = router;
