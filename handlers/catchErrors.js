const catchErrors = fn => (req, res, next) => fn(req, res, next).catch(err => res.json({ success: false, error: err.message }));

exports.catchErrors = catchErrors;
