module.exports = (req, res, next) => {
    console.log(`
    URL: http://localhost:4000${req.originalUrl}
    Type: ${req.method}
    Time: ${Date.now()}
    `);
    next();
}