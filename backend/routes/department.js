let express = require("express");
const { Department } = require("../shared/department.model");
const { Team } = require("../shared/team.model");
const { Component } = require("../shared/component.model");
let router = express.Router();

router.get("/:teamId", async function (req, res) {
  const teamId = req.params.teamId;
  try {
    if (res.locals.team === teamId) {
      const team = await Team.findById(teamId).exec();
      let departments = [];
      for (let i = 0; i < team["departments"].length; i++) {
        departments.append(
          await Department.findById(team["departments"][i]).exec()
        );
      }
      return res.status(200).json(departments);
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.get("/:teamId/:deptId", async function (req, res) {
  const teamId = req.params.teamId;
  const deptId = req.params.deptId;
  try {
    if (res.locals.team === teamId) {
      return res.status(200).json(await Department.findById(deptId).exec());
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.get("/:teamId/:deptId/component", async function (req, res) {
  const teamId = req.params.teamId;
  const deptId = req.params.deptId;
  try {
    if (res.locals.team === teamId) {
      const dept = await Department.findById(deptId).exec();
      const comp = [];
      for (let i = 0; i < dept["components"]; i++) {
        comp.append(await Component.findById(dept["components"][i]).exec());
      }
      return res.status(200).json(comp);
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.get("/:teamId/:deptId/component/:compId", async function (req, res) {
  const teamId = req.params.teamId;
  const deptId = req.params.deptId;
  const compId = req.params.compId;
  try {
    if (res.locals.team === teamId) {
      const comp = await Component.findById(compId).exec();
      if (comp["depId"] === deptId) {
        return res.status(200).json(comp);
      } else {
        return res.status(401).json({ error: "Unauthorized" });
      }
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.put("/:teamId/:deptId", async function (req, res) {
  const teamId = req.params.teamId;
  const deptId = req.params.deptId;
  try {
    let manager = await Department.findById(deptId);
    if (
      res.locals.team === teamId &&
      res.locals.role === process.env.ROLE_E &&
      manager["manager"] === res.locals.uid
    ) {
      return res
        .status(200)
        .json(
          await Department.findByIdAndUpdate(deptId, {
            caption: req.body.caption,
          })
        );
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.put("/:teamId/:deptId/component/:compId", async function (req, res) {
  const teamId = req.params.teamId;
  const deptId = req.params.deptId;
  const compId = req.params.compId;
  try {
    let manager = await Department.findById(deptId);
    if (
      res.locals.team === teamId &&
      res.locals.role === process.env.ROLE_E &&
      manager["manager"] === res.locals.uid
    ) {
      return res
        .status(200)
        .json(
          await Component.findByIdAndUpdate(compId, {
            n_available: req.body.n_available,
          }).exec()
        );
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.post("/:teamId", async function (req, res) {
  const teamId = req.params.teamId;
  if (res.locals.team === teamId && res.locals.role === process.env.ROLE_TP) {
  } else {
    return res.status(401).json({ error: "Unauthorized" });
  }
});

router.post("/:teamId/:deptId/component", async function (req, res) {
  const teamId = req.params.teamId;
  const deptId = req.params.deptId;
  try {
    let manager = await Department.findById(deptId);
    if (
      res.locals.team === teamId &&
      res.locals.role === process.env.ROLE_E &&
      manager["manager"] === res.locals.uid
    ) {
      const comp = Component({
        name: res.body.name,
        description: res.body.description,
        n_available: res.body.n_avaiable,
        depId: deptId,
      });
      comp.verify();
      return res.status(201).json(await comp.save());
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.delete("/:teamId/:deptId", async function (req, res) {
  const teamId = req.params.teamId;
  const deptId = req.params.deptId;
  try {
    if (res.locals.team === teamId && res.locals.role === process.env.ROLE_TP) {
      await Department.findOneAndDelete(deptId).exec();
      return res.status(200).send();
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.delete("/:teamId/:deptId/component/:compId", async function (req, res) {
  const teamId = req.params.teamId;
  const deptId = req.params.deptId;
  const compId = req.params.compId;
  try {
    let manager = await Department.findById(deptId);
    if (
      res.locals.team === teamId &&
      res.locals.role === process.env.ROLE_E &&
      manager["manager"] === res.locals.uid
    ) {
      await Component.findOneAndDelete(compId).exec();
      return res.status(200).send();
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

module.exports = router;
