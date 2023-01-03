interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

const addCourse = (
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal => {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;
  return courseGoal as CourseGoal;
};
