import { PostInterface } from '../interfaces/postInterface'

/* eslint-disable no-unused-vars */
function postOrganizer() {
  function ascending(posts: PostInterface[], recommendationSize: number) {
    const sorted = posts.sort((a, b) => {
      return parseInt(a.metadata.id) - parseInt(b.metadata.id)
    })
    return sorted.slice(0, recommendationSize)
  }
  function descending(posts: PostInterface[], recommendationSize: number) {
    const sorted = posts.sort((a, b) => {
      return parseInt(b.metadata.id) - parseInt(a.metadata.id)
    })
    return sorted.slice(0, recommendationSize)
  }
  return {
    ascending,
    descending
  }
}

export default postOrganizer
