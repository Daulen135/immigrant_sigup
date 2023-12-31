const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  post: {
    type: String,
    required: false
  },
  // title: {
  //   type: String,
  //   required: true
  // },
  // reps: {
  //   type: String,
  //   required: true
  // },
  // load: {
  //   type: String,
  //   required: true
  // },
  user_id: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)
