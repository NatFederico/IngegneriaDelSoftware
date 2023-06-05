let express = require("express");
let router = express.Router();
const {User} = require("../shared/user.model");

router.get("/:userId", async function (req, res) {
  const userId = req.params.userId;
  try {
    const response = await User.findById(userId).exec();
    console.log(response);
    return res.status(200).send(await User.findById(userId).exec());
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/:userId/role", async function (req, res) {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId).exec();
    console.log(user);
    return res.status(200).send(await User.find({_id: userId}, "role").exec());
  } catch (e) {
    res.status(500).json(e);
  }
});

router.put("/:userId/role", async function (req, res) {
  const userId = req.params.userId;
  try {
    if (userId !== res.locals.uid && res.locals.role === process.env.ROLE_TP) {
      res
          .status(200)
          .send(
              await User.findByIdAndUpdate(userId, {role: req.body.role})
          );
    } else {
      if(userId !== res.locals.uid){
        return res.status(401).send("As TeamPrincipal you can not change your role");
      }
      else{
        return res.status(401).send("Unauthorized");
      }
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post("/", async function (req, res) {
  console.log("POST /user");
  const userId = res.locals.uid;
  console.log("userID= " + res.locals.uid);

  try {
    const user = await User.findById(userId).exec();
    if (user == null) {
      console.log("Creating new user...");
      let newUser;
      newUser = new User({
        _id: res.locals.uid,
        email: res.locals.email,
        first_name: req.body.first_name,
        surname: req.body.surname,
        role: req.body.role,
      });
      /*await newUser.verify().exec();*/
      console.log("User added: " + newUser);
      await newUser.save();
    }
    else{
      return res.status(401).json({error: "User already exists"});
    }
    return res.status(201).send(await User.findById(userId).exec());
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.delete("/:userId", async function (req, res) {
  const userId = req.params.userId;
  try {
    if (userId !== res.locals.uid && res.locals.role === process.env.ROLE_TP) {
      return res.status(200).send(await User.findByIdAndDelete(userId).exec());
    } else {
      return res.status(401).send();
    }
  } catch (e) {
    return res.send(500).json(e);
  }
});

module.exports = router;
