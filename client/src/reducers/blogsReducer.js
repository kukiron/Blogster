import mapKeys from "lodash/mapKeys"
import { FETCH_BLOGS, FETCH_BLOG } from "../actions/types"

export default (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_BLOG: {
      const blog = payload
      return { ...state, [blog._id]: payload }
    }

    case FETCH_BLOGS:
      return { ...state, ...mapKeys(payload, "_id") }

    default:
      return state
  }
}
