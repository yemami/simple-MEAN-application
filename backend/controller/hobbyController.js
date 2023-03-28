const courseModel = require("../model/course");

module.exports.getHobbies = async (req, res, next) => {
  try {
    const course_id = req.params.course_id;
    const student_id = req.params.student_id;
    const result = await courseModel.findOne({
      _id: course_id,
      "students._id": student_id,
    });
    const data = {
      message: "hobbies successfully retrived from the databse",
    };
    res.json({ result:result.students[0].hobbies, data });
  } catch (error) {
    next(error);
  }
};

module.exports.createHobby = async (req, res, next) => {
  try {
    const course_id = req.params.course_id;
    const student_id = req.params.student_id;
    const hobby = req.body;
    const result = await courseModel.updateOne(
      { _id: course_id, "students._id": student_id },
      { $push: { "students.$.hobbies": hobby } }
    );
    const data = {
      message: "new hoby push on the database successfully",
    };
    res.json({ result, data });
  } catch (error) {
    next(error);
  }
};

module.exports.updateHobby = async (req, res, next) => {
  try {
    const course_id = req.params.course_id;
    const student_id = req.params.student_id;
    const hobby_id = req.params.hobby_id;
    const updatedHobby = req.body;
    const result = await courseModel.updateOne(
      { _id: course_id },
      { $set: { "students.$[stud].hobbies.$[hob]": updatedHobby } },
      { arrayFilters: [{ "stud._id": student_id }, { "hob._id": hobby_id }] }
    );
    const data = {
      message: "updated successfully",
    };
    res.json({ result, data });
  } catch (error) {
    next(error);
  }
  //     const updatedName =req.body
  //     const result1 = await courseModel.updateOne({_id:course_id},
  //         {$set:{'students.$[stud].hobbies.$[hob].name':updatedName}},
  //         {arrayFilters:[{'stud._id':student_id},{'hob._id':hobby_id}]})
};

module.exports.deleteHobby = async (req, res, next) => {
  try {
    const course_id = req.params.course_id;
    const student_id = req.params.student_id;
    const hobby_id = req.params.hobby_id;
    const result = await courseModel.updateOne(
      { _id: course_id, "students._id": student_id },
      { $pull: { "students.$.hobbies": { _id: hobby_id } } }
    );
    const data = {
      message: "deleted successfully",
    };
    res.json({ result, data });
  } catch (error) {
    next(error);
  }
};
