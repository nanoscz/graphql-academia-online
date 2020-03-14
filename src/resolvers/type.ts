import { IResolvers} from "graphql-tools"
import _ from "lodash"
import { storage } from "../data/data.store";

const type: IResolvers = {
  Student: {
    courses: parent => {
      const courseList: Array<any> = [];
      parent.courses.map((course: string) => {
        courseList.push(_.filter(storage.courses, ['id', course])[0])
      })
      return courseList
    }
  }
}

export default type