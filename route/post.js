const router = require("express").Router();
const verify = require("./verifytoken");

router.get("/", verify, (req, res) => {
  // res.json({
  //   posts: {
  //     title: "my first post",
  //     description: "my first post description",
  //   },
  // });
  res.send(req.user);
});

module.exports = router;
