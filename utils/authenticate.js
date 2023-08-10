const Authenticate = (req, res, next) => {
    // check if user is currenly logged in
    if (!req.session.logged_in) {
        // if not, send them to login page
        res.redirect('/login');
    } 
    else {
        next();
    }
};

module.exports = Authenticate;