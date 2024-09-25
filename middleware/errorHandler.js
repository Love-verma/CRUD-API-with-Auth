exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.stack(500).json({ error: 'Server error'});
};