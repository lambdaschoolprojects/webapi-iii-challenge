module.exports = (req, res, next) => {
  console.log(`
    ~~~~~~~~~~~~ LOGGER ~~~~~~~~~~~~~
    URL: http://localhost:4000${req.originalUrl}
    Type: ${req.method}
    Time: ${new Date(Date.parse(Date()))}
    `);
  next();
};
