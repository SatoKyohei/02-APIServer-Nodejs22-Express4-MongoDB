const express = require("express");
const router = express.Router();
const ArticleModel = require("../../models/articleModel");

router.post("/", (req, res) => {
    // モデル作成
    const Article = new ArticleModel();

    // データを詰め込む
    Article.title = req.body.title;
    Article.text = req.body.text;
    Article.setDate();

    // 保存処理
    Article.save()
        .then(() => {
            res.json({ message: "Success" });
        })
        .catch((err) => res.send(err));
});

router.get("/", (req, res) => {
    ArticleModel.find().then((articles) => res.json(articles));
});

router.get("/:id", (req, res) => {
    const Articleid = req.params.id;

    ArticleModel.findById(Articleid).then((article) => {
        res.json(article);
    });
});

router.delete("/:id", (req, res) => {
    const Articleid = req.params.id;

    ArticleModel.remove({ _id: Articleid }).then(() => {
        res.json({ message: "Success!" });
    });
});

//routerをモジュールとして扱う準備
module.exports = router;
