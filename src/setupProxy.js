const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/upload", {
            target: "http://lectureleverager.herokuapp.com",
            changeOrigin: true
        })
    )
}