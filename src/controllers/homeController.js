let getHomePage = (req, res) => {
    return res.send('Hello world!')
}
module.exports = {
    getHomePage: getHomePage,
}