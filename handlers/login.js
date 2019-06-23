const users = require('../lib/users');
const auth = require('../lib/auth');

const handleLogin = async (req, res, next) => {
    const user = await users.getUserByEmail(req.body.email);
    if (!user) throw new Error('incorrect email');
    const doesMatch = await auth.compare(req.body.password, user.password);
    if (!doesMatch) throw new Error(`jesus christ ${user.first}, did you forget your password?`);
    req.session.userId = user.id;
    res.json({ success: true });
};

exports.handleLogin = handleLogin;