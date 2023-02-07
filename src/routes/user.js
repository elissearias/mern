const { Router } = require('express');
const { check }  = require('express-validator');

const { registerUser } = require('../controllers/user');

const router = Router();

router.post('/register',[
    check('name', 'Name is required').not().isEmpty(),
    check('username','Username is required').not().isEmpty(),
    check('email','Email is required').not().isEmpty().isEmail(),
    check('password','Password should be more than 6 letters').isLength({min:6}),
], registerUser);


module.exports = router;