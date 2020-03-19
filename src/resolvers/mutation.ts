import { IResolvers } from 'graphql-tools';
import { storage } from '../data/data.store';

const mutation: IResolvers = {
  Mutation: {
    addCourse(__:void, { course }): any {
      const newCourse = {
        id: String(storage.coursesJson.length + 1),
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
      storage.coursesJson.push(newCourse);
      return newCourse;
    },
  },
};

export default mutation;
