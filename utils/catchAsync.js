// when we get an error on async calls of mongoose we catch them 
module.exports = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
}
