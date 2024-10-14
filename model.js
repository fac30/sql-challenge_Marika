const db = require("./database/db.js");

const select_cohorts_in_finsbo = db.prepare(/*sql*/ `
  SELECT name FROM cohorts WHERE location = 'Finsbury Park';
`);

function listCohortsInFinsbo() {
  return select_cohorts_in_finsbo.all();
}

const select_students_in_finsbo = db.prepare(/*sql*/ `
  SELECT username FROM students
  JOIN cohorts ON students.cohort_name = cohorts.name
  WHERE cohorts.location = 'Finsbury Park';
`);

function listStudentsInFinsbo() {
  return select_students_in_finsbo.all();
}

const select_students_with_location = db.prepare(/*sql*/ `
  SELECT students.username, cohorts.location
  FROM students
  JOIN cohorts ON students.cohort_name = cohorts.name;
`);

function listStudentsWithLocation() {
  return select_students_with_location.all();
}

const select_students_with_projects = db.prepare(/*sql*/ `
const select_students_with_projects = db.prepare(/*sql*/ `
  SELECT projects.name, students.username FROM students
  INNER JOIN students_projects ON students.username = students_projects.username
  INNER JOIN projects ON students_projects.project_id = projects.id;
`);

`);

function listStudentsWithProjects() {
  return select_students_with_projects.all();
}

const select_students_with_projects_in_finsbo = db.prepare(/*sql*/ `
  SELECT projects.name, students.username
FROM students
INNER JOIN students_projects ON students.username = students_projects.username
INNER JOIN projects ON students_projects.project_id = projects.id
INNER JOIN cohorts ON students.cohort_name = cohorts.name
WHERE cohorts.location = 'Finsbury Park';
`);

function listStudentsWithProjectsInFinsbo() {
  return select_students_with_projects_in_finsbo.all();
}

module.exports = {
  listCohortsInFinsbo,
  listStudentsInFinsbo,
  listStudentsWithLocation,
  listStudentsWithProjects,
  listStudentsWithProjectsInFinsbo,
};
