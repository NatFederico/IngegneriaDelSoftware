let express = require("express");
let router = express.Router();
const { Team } = require("../shared/team.model");
const { User } = require("../shared/user.model");
const { Record } = require("../shared/record.model");
const { Calendar } = require("../shared/calendar.model");
const { Gallery } = require("../shared/gallery.model");
const { Department } = require("../shared/department.model");
const { Board } = require("../shared/board.model");

router.get("/:teamId", async function (req, res) {
  const teamId = req.params.teamId;
  try {
    if (teamId === res.locals.team) {
      const team = await Team.findById(teamId).exec();
      if (!team) {
        return res.status(404);
      }
      return res.status(200).json(team);
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.get("/:teamId/users", async function (req, res) {
  const teamId = req.params.teamId;
  try {
    if (teamId === res.locals.team) {
      let team = await Team.findById(teamId, "userId").exec();
      let users = [User];
      for (let i = 0; i < team.length; i++) {
        users.append(await User.findById(team[i]));
      }
      return res.status(200).json(users);
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.get("/:teamId/history", async function (req, res) {
  const teamId = req.params.teamId;
  try {
    if (teamId === res.locals.team) {
      return res
        .status(200)
        .json(await Team.findById(teamId, "history").exec());
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.put("/:teamId", async function (req, res) {
  const teamId = req.params.teamId;
  try {
    if (res.locals.role === process.env.ROLE_TP && teamId === res.locals.team) {
      return res
        .status(200)
        .json(await Team.findByIdAndUpdate(teamId, req.body).exec());
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});
router.put("/:teamId/editTeam/:userId", async function (req, res) {
  const teamId = req.params.teamId;
  const userId = req.params.userId;
  try {
    if (teamId === res.locals.team && res.locals.role === process.env.ROLE_TP) {
      const team = await Team.findById(teamId).exec();
      let users = team["userId"];
      for (let i = 0; i < users.length; i++) {
        if (users[i] === userId) {
          return res.status(200).send("User already in team");
        }
      }
      users.push(userId);
      return res
        .send(200)
        .json(await Team.findByIdAndUpdate(teamId, { userId: users }).exec());
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.put("/:teamId/addRecord", async function (req, res) {
  const teamId = req.params.teamId;
  try {
    if (teamId === res.locals.team && res.locals.role === process.env.ROLE_SM) {
      const history = await Team.findById(teamId, "history");
      const record = Record({
        year: req.body.year,
        nameOfGP: req.body.nameOfGP,
        pilotId: req.body.pilotId,
        placement: req.body.placement,
        isPole: req.body.isPole,
        isFastest: req.body.isFastest,
      });
      record.verify();
      history.append(record);
      await Team.findByIdAndUpdate(teamId, { history: history }).exec();
      return res.status(201).json(record);
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.delete("/:teamId/removeUser/:userId", async function (req, res) {
  const teamId = req.params.teamId;
  const userId = req.params.userId;
  try {
    if (teamId === res.locals.team && res.locals.role === process.env.ROLE_TP) {
      const team = await Team.findById(teamId).exec();
      let users = team["userId"];
      let updatedList = [String];
      for (let i = 0; i < users.length; i++) {
        if (users[i] !== userId) {
          updatedList.append(users[i]);
        }
      }
      await User.findByIdAndUpdate(userId, { teamId: null }).exec();
      return res
        .send(200)
        .json(
          await Team.findByIdAndUpdate(teamId, { userId: updatedList }).exec()
        );
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.delete("/:teamId/removeRecord/:recordId", async function (req, res) {
  const teamId = req.params.teamId;
  const recordId = req.params.recordId;
  try {
    if (teamId === res.locals.team && res.locals.role === process.env.ROLE_TP) {
      const team = await Team.findById(teamId).exec();
      let history = team["history"];
      let updatedList = [Record];
      for (let i = 0; i < users.length; i++) {
        if (history[i] !== recordId["_id"]) {
          updatedList.append(history[i]);
        }
      }
      return res
        .send(200)
        .json(
          await Team.findByIdAndUpdate(teamId, { history: updatedList }).exec()
        );
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.delete("/:teamId/delete", async function (req, res) {
  const teamId = req.params.teamId;
  try {
    if (teamId === res.locals.team && res.locals.role === process.env.ROLE_TP) {
      let team = await Team.findById(teamId).exec();
      let users = [User];
      let deps = [Department];
      for (let i = 0; i < team["userId"].length; i++) {
        await User.findByIdAndUpdate(users[i]["_id"], { teamId: null }).exec();
      }
      for (let i = 0; i < team.get("departments").length; i++) {
        await Department.findByIdAndUpdate(deps[i]["_id"], {
          teamId: null,
        }).exec();
      }
      await Calendar.findByIdAndUpdate(team.get("calendar"), {
        team: null,
      }).exec();
      await Gallery.findByIdAndUpdate(team.get("calendar"), {
        team: null,
      }).exec();
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.post("/", async function (req, res) {
  try {
    if (res.locals.role === process.env.ROLE_TP) {
      const team = Team({
        userId: [res.locals.uid],
        name: req.body.name,
        board: new Board(),
        gallery: new Gallery(),
        calendar: new Calendar(),
        history: [],
        departments: [],
      });
      await team.verify();
      return res.status(201).json(team.save());
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {}
});

module.exports = router;
