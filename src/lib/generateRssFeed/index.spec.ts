import generateRssFeed from '.'
import { dataMockPosts } from '../../constants/dataMock'

jest.mock('fs', () => ({
  mkdirSync: jest.fn(),
  writeFileSync: jest.fn()
}))

describe('generateRssFeed', () => {
  it('should generate rss feeds', () => {
    generateRssFeed(dataMockPosts)
  })
})
