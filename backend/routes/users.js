let express = require("express");
let router = express.Router();
const User = require("../shared/user.model");

router.get("/:userId", async function (req, res) {
  const userId = req.params.userId;
  try {
    if (userId === res.locals.uid || res.locals.role === process.env.ROLE_TP) {
      return res.status(200).send(await User.findById(userId).exec());
    } else {
      return res.status(401).send();
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/:userId/role", async function (req, res) {
  const userId = req.params.userId;
  try {
    if (userId === res.locals.uid || res.locals.role === process.env.ROLE_TP) {
      return res.status(200).send(await User.findById(userId, "role").exec());
    } else {
      return res.status(401).send();
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

router.put("/:userId/role", async function (req, res) {
  const userId = req.params.userId;
  try {
    if (!res.locals.role) {
      return res.status(500).send("Error during auth");
    } else {
      for (let i = 0; i < res.locals.roles.length; i++) {
        if (res.locals.roles[i] === process.env.ROLE_TP) {
          res
            .status(200)
            .send(
              await User.findByIdAndUpdate(userId, { role: req.body.role })
            );
        }
        return res.status(401).send("Unauthorized");
      }
    }
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post("/", async function (req, res) {
  const userId = req.body.uid;
  try {
    if (res.locals.uid === userId) {
      const user = await User.findById(userId).exec();
      if (user == null) {
        const newUser = User({
          _id: req.body.uid,
          email: req.body.email,
          first_name: req.body.first_name,
          surname: req.body.surname,
          roles: req.body.roles,
        });
        await newUser.verify().exec();
        await newUser.save().exec();
      }
      return res.status(201).send(await User.findById(userId, "_id").exec());
    }
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
