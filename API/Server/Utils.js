var BasicAuth = require('basic-auth')

exports.BasicAuth = function (username, password) {
    return function (req, res, next) {
        var user = BasicAuth(req)
        if (!user || user.name !== username || user.pass !== password) {
            res.set('WWW-Authenticate', 'Basic realm=Authorization Required')
            return res.sendStatus(401)
        }
        next()
    }
}