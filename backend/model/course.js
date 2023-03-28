const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  courseName: String,
  students: [
    {
      name: String,
      grades: [String],
      hobbies: [
        {
          name: String,
          style: String,
        },
      ],
    },
  ],
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
