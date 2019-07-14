const users = require('../lib/users');
const auth = require('../lib/auth');

const handleLogin = async (req, res, next) => {
    const user = await users.getUserByEmail(req.body.email);
    if (!user) throw new Error('try again');    
    const doesMatch = await auth.compare(req.body.password, user.password);
    if (!doesMatch) throw new Error('try again');
    req.session.userId = user.id;
    res.json({ success: true });
};

exports.handleLogin = handleLogin;