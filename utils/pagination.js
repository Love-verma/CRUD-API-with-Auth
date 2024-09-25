const { model } = require("mongoose");

exports.paginate = (model, page = 1, limit = 10) =>{
    return model.find().limit(limit * 1).skip((page - 1) * limit).exec();
};

