const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  details: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
