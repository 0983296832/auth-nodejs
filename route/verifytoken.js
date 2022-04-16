const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified._id;
    //gán req để sau khi check thì dữ liệu req ở sau vẫn nhận được
    // router.get("/", verify, (req, res) => {
    // req.user ở đây sẽ nhận đc id của ng dùng sau khi verify token
    //   res.send(req.user);
    // });
    if (req.user === "61d6b8d9ad45071e8efdb627") next();
    else res.status(400).send("you are not admin");
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};
module.exports = auth;

// user
// "email":"binh1112@gmail.com",
//     "password":"binh1234"

// admin
// "email":"binh111@gmail.com",
//     "password":"binh123"
