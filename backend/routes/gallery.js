let express = require("express");
const { Team } = require("../shared/team.model");
const { Gallery } = require("../shared/gallery.model");
const { PhotoSchema, Photo } = require("../shared/photo.model");
let router = express.Router();

router.get("/:teamId", async function (req, res) {
  const teamId = req.params.teamId;
  try {
    if (res.locals.team === teamId) {
      return res
        .status(200)
        .json(await Team.findById(teamId, "gallery").exec());
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.get("/:teamId/photo/:photoId", async function (req, res) {
  const teamId = req.params.teamId;
  const photoId = req.params.photoId;
  try {
    if (res.locals.team === teamId) {
      const gallery = await Team.findById(teamId, "gallery").exec();
      const photos = gallery["photos"];
      const photo = photos.find((p) => p._id === photoId);
      if (photo) {
        return res.status(200).json();
      }
      return res.status(404).json({ error: "Not found" });
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.put("/:teamId/gallery", async function (req, res) {
  const teamId = req.params.teamId;
  try {
    if (res.locals.team === teamId && res.locals.role === process.env.ROLE_SM) {
      const gallery = await Team.findById(teamId, "gallery").exec();
      gallery.title = req.body.title;
      gallery.caption = req.body.caption;
      gallery.lastEdit = Date.now();
      return res
        .status(201)
        .json(
          await Team.findByIdAndUpdate(teamId, { gallery: gallery }).exec()
        );
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.put("/:teamId/gallery/:photoId", async function (req, res) {
  const teamId = req.params.teamId;
  const photoId = req.params.photoId;
  try {
    if (res.locals.team === teamId && res.locals.role === process.env.ROLE_SM) {
      const gallery = await Team.findById(teamId, "gallery").exec();
      const photo = gallery["photos"].find((photo) => photo._id === photoId);
      if (photo) {
        photo.caption = req.body.caption;
        photo.title = req.body.title;
        photo.pub_date = Date.now();
        return res
          .status(201)
          .json(
            await Team.findByIdAndUpdate(teamId, { gallery: gallery }).exec()
          );
      }
      return res.status(404).json({ error: "Not Found" });
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.post("/:teamId", async function (req, res) {
  const teamId = req.params.teamId;
  try {
    if (res.locals.team === teamId && res.locals.role === process.env.ROLE_SM) {
      const gallery = Gallery({
        title: req.body.title,
        caption: req.body.caption,
        lastEdit: Date.now(),
      });
      gallery.verify();
      return res
        .status(201)
        .json(
          await Team.findByIdAndUpdate(teamId, { gallery: gallery }).exec()
        );
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.post("/:teamId/gallery", async function (req, res) {
  const teamId = req.params.teamId;
  try {
    if (res.locals.team === teamId && res.locals.role === process.env.ROLE_SM) {
      const photo = Photo({
        title: req.body.title,
        caption: req.body.caption,
        image: req.body.imageBase64,
        pub_date: new Date(),
      });
      photo.verify();
      return res.status(201).json(await photo.save());
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.delete("/:teamId/gallery/:photoId", async function (req, res) {
  const teamId = req.params.teamId;
  const photoId = req.params.photoId;
  try {
    if (res.locals.team === teamId && res.locals.role === process.env.ROLE_SM) {
      return res
        .status(200)
        .json(await Photo.findByIdAndDelete(photoId).exec());
    } else {
      return res.status(401).json({ error: "Unauthorized" });
    }
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

module.exports = router;
