const courseModel = require("../model/course");

module.exports.getStudents = async (req, res, next) => {
  try {
    const course_id = req.params.course_id;
    const result = await courseModel.findOne({ _id: course_id });
    const data = {
      message: "all students retrive successfully",
    };
    console.log(result);
    res.json({ result: result.students, data });
  } catch (error) {
    next(error);
  }
};

module.exports.createStudent = async (req, res, next) => {
  try {
    const course_id = req.params.course_id;
    const student = req.body;
    const result = await courseModel.updateOne(
      { _id: course_id },
      { $push: { students: student } }
    );
    const data = {
      message: "student is successfully pushd on the student list",
    };
    res.json({ result, data });
  } catch (error) {
    next(error);
  }
};

module.exports.updateStudent = async (req, res, next) => {
  try {
    const course_id = req.params.course_id;
    const student_id = req.params.student_id;
    const updatedStudent = req.body;
    const result = await courseModel.updateOne(
      { _id: course_id, "students._id": student_id },
      { $set: { "students.$": updatedStudent } }
    );
    const data = {
      message: "student updated successfully",
    };
    res.json({ result, data });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteStudent = async (req, res, next) => {
  try {
    const { course_id } = req.params;
    const student_id = req.params.student_id;
    const result = await courseModel.updateOne(
      { _id: course_id },
      { $pull: { students: { _id: student_id } } }
    );
    const data = {
      message: "student deleted successfully",
    };
    res.json({ result, data });
  } catch (error) {
    next(error);
  }
};
