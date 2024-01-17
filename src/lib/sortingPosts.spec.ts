import {
  dataMockPosts,
  dataMockPostsDescending,
  dataMockPostsUnordered
} from '../constants/dataMock'
import postOrganizer from './sortingPosts'

describe('postOrganizer', () => {
  const posts = dataMockPostsUnordered

  it('sorts posts in ascending order', () => {
    const sorted = postOrganizer().ascending(posts, 3)
    expect(sorted).toEqual(dataMockPosts)
  })

  it('sorts posts in descending order', () => {
    const sorted = postOrganizer().descending(posts, 3)
    expect(sorted).toEqual(dataMockPostsDescending)
  })
})
