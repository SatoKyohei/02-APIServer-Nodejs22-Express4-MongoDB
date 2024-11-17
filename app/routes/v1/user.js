const express = require("express");
const router = express.Router();
const UserModel = require("../../models/userModel.js");

router.post("/", function (req, res) {
    // モデル作成．
    const User = new UserModel();

    // データを詰め込む
    User.name = req.body.name;
    User.screen_name = req.body.screen_name;
    User.bio = req.body.bio;

    // 保存処理
    User.save()
        .then(function () {
            res.json({ message: "Success!!" });
        })
        .catch((err) => {
            res.send(err);
        });
});

router.get("/", (req, res) => {
    UserModel.find().then((users) => {
        res.json(users);
    });
});

router.get("/:id", function (req, res) {
    const Userid = req.params.id;
    UserModel.findById(Userid)
        .then((user) => res.json(user))
        .catch((err) => res.send(err));
});

router.put("/:id", (req, res) => {
    const Userid = req.params.id;

    UserModel.findById(Userid)
        .then((user) => {
            user.name = req.body.name;
            user.screen_name = req.body.screen_name;
            user.bio = req.body.bio;

            user.save()
                .then(function () {
                    res.json({ message: "Success!!" });
                })
                .catch((err) => {
                    res.send(err);
                });
        })
        .catch((err) => {
            res.send(err);
        });
});

//routerをモジュールとして扱う準備
module.exports = router;
