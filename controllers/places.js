const Place = require("../models/Place");

module.exports = {
  getPlaces: async (req, res) => {
    console.log(req.user);
    try {
      const placeItems = await Place.find({ userId: req.user.id });
      const itemsLeft = await Place.countDocuments({
        userId: req.user.id,
        visited: false,
      });
      res.render("places.ejs", { places: placeItems, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createPlace: async (req, res) => {
    try {
      const placeItem = req.body;
      const validationErrors = [];

      if (
        placeItem.placeAuthenticRating > 5 ||
        placeItem.placeAuthenticRating < 0
      )
        validationErrors.push({ msg: "Your rating must be between 0 and 5." });
      if (
        placeItem.placeAtmosphereRating > 5 ||
        placeItem.placeAtmosphereRating < 0
      )
        validationErrors.push({ msg: "Your rating must be between 0 and 5." });
      if (placeItem.placeTasteRating > 5 || placeItem.placeTasteRating < 0)
        validationErrors.push({ msg: "Your rating must be between 0 and 5." });
      if (validationErrors.length) {
        req.flash("errors", validationErrors);
        return res.redirect("/places");
      }
      console.log(
        await Place.create({
          placeDate: placeItem.placeDate,
          placeName: placeItem.placeName,
          placeLocation: placeItem.placeLocation,
          placeAuthenticRating: placeItem.placeAuthenticRating,
          placeAtmosphereRating: placeItem.placeAtmosphereRating,
          placeTasteRating: placeItem.placeTasteRating,
          favoritePlace: placeItem.favoritePlace,
          placeNotes: placeItem.placeNotes,
          userId: req.user.id,
        })
      );

      console.log("Place has been added!");
      res.redirect("/places");
    } catch (err) {
      console.log(err);
    }
  },
  markVisited: async (req, res) => {
    try {
      await Place.findOneAndUpdate(
        { _id: req.body.placeIdFromJSFile },
        {
          completed: true,
        }
      );
      console.log("Marked Visited");
      res.json("Marked Visited");
    } catch (err) {
      console.log(err);
    }
  },
  marktoVisit: async (req, res) => {
    try {
      await Place.findOneAndUpdate(
        { _id: req.body.placeIdFromJSFile },
        {
          completed: false,
        }
      );
      console.log("Marked toVisit");
      res.json("Marked toVisit");
    } catch (err) {
      console.log(err);
    }
  },
  deletePlace: async (req, res) => {
    console.log(req.params.id);
    try {
      await Place.findById({ _id: req.params.id });
      await Place.deleteOne({ _id: req.params.id });
      console.log("Deleted Place");
      res.redirect("/places");
    } catch (err) {
      console.log(err);
    }
  },
};
