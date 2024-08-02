var jwt = require('jsonwebtoken');
const verifyAuthToken = async (req, res, next) => {
    try {
        console.log('passing through auth.middleware');
        const { authorization } = req.headers;
        console.log(req.headers);
        console.log('cookie: ', req.headers.cookie);
        const authToken = req.headers.cookie.replace('authToken=', '') || authorization?.replace('Bearer ', '');
        console.log('authToken: ', authToken);
        if (!authToken) {
            throw new Error("User AuthToken not found in middleware");
        }
        jwt.verify(authToken, process.env.SIGNATURE, async (err, user) => {
            if (err) {
                console.log('Error while verifying auth Token: ', err);
                return res.status(403).json({ message: "Couldn't verify jwt token" });
            } else {
                console.log('user details fetched from auth token: ', user);
                req.userId = user.userId;
                console.log('Auth.middleware passed');
                next();
            }
        })
    } catch (error) {
        console.log('error occured in verify auth token middleware: ', error);
        return res.status(500).json({ message: "internal server error!!!", success: false })
    }
}

module.exports = {
    verifyAuthToken
}