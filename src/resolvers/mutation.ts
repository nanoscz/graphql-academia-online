import { IResolvers } from 'graphql-tools';
import _ from 'lodash';
import { storage } from '../data/data.store';

const mutation: IResolvers = {
  Mutation: {
    addCourse(__:void, { course }): any {
      const newCourse = {
        id: String(storage.courses.length + 1),
        title: course.title,
        description: course.description,
        class: course.class,
        time: course.time,
        level: course.level,
        logo: course.logo,
        path: course.path,
        teacher: course.teacher,
        reviews: []
      }
      storage.courses.push(newCourse)
      return newCourse
    }
  }
};

export default mutation;