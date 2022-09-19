const mongoose = require("mongoose");

const LevelSchema = new mongoose.Schema({
  userID: { type: String },
  guildID: { type: String },
  reason: { type: String },
  moderator: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Levels', LevelSchema);