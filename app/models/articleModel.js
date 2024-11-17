const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({ title: String, text: String, date: String });

ArticleSchema.methods.setDate = function () {
    //作った時間をセット
    this.date = moment().format("YYYY-MM-DD HH:mm:ss");
};

module.exports = mongoose.model("ArticleModel", ArticleSchema);
