// const router = require('express').Router();
// const {
//   createUser,
//   getSingleUser,
//   saveBudget,
//   deleteBudget,
//   login,
// } = require('../../controllers/user-controller');

// // import middleware
// const { authMiddleware } = require('../../utils/auth');

// // put authMiddleware anywhere we need to send a token for verification of user
// router.route('/').post(createUser).put(authMiddleware, saveBudget);

// router.route('/login').post(login);

// router.route('/me').get(authMiddleware, getSingleUser);
// //delete route needs work. Would we need something like :incomeId , :billsId, :shoppingId? Or just simply :budgetId
// router.route('/budget/').delete(authMiddleware, deleteBudget);

// module.exports = router;


