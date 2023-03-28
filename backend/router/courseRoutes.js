const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");
const hobbyController = require('../controller/hobbyController')
const studentController = require('../controller/studentController')

router.get("", courseController.getCourses); //pass
router.post("", courseController.createCourse);// pass
router.put("/:course_id", courseController.updateCourse);//pass
router.delete("/:course_id", courseController.deleteCourse);//pass


router.get('/:course_id/students/:student_id/hobbies',hobbyController.getHobbies)//passssss
router.post('/:course_id/students/:student_id/hobbies',hobbyController.createHobby)//passsss
router.put('/:course_id/students/:student_id/hobbies/:hobby_id',hobbyController.updateHobby)//pass
router.delete('/:course_id/students/:student_id/hobbies/:hobby_id',hobbyController.deleteHobby)//pass


router.get('/:course_id/students',studentController.getStudents)//pass
router.post('/:course_id/students',studentController.createStudent)//pass
router.put('/:course_id/students/:student_id', studentController.updateStudent)//pass
router.delete('/:course_id/students/:student_id', studentController.deleteStudent)//pass

module.exports = router;
