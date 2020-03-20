import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
import lodash from 'lodash';
import error from '../handlers/error';

const mutation: IResolvers = {
  Mutation: {
    addCourse(__:void, { course }): any {
      const newCourse = {
        id: String(database.coursesJson.length + 1),
        title: course.title,
        description: course.description,
        class: course.class,
        time: course.time,
        level: course.level,
        logo: course.logo,
        path: course.path,
        teacher: course.teacher,
        reviews: [],
      };
      database.coursesJson.push(newCourse);
      return newCourse;
    },
    editCourse(__:void, { course }): any {
      const elementExits = lodash.findIndex(database.coursesJson, function(o) {
        return o.id === course.id
      })
      if(elementExits === -1) {
        error(`The course does not exist in the database`);
      }
      const reviews = database.coursesJson[elementExits].reviews;
      course.reviews = reviews;
      database.coursesJson[elementExits] = course;
      return course
    }
  },
};

export default mutation;
