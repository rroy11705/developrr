import fs from 'fs'
import { Feed } from 'feed'

const handleDate = (date: string) => {
  const splitDate = date.split('-')
  const fixedDay = parseInt(splitDate[0]) + 1
  const formattedDate = new Date(
    `${splitDate[1]}-${fixedDay.toString()}-${splitDate[2]}`
  )
  return formattedDate.toISOString()
}

const generateRssFeed = async posts => {
  const siteURL = 'www.developrr.pro'
  const date = new Date()
  const author = {
    name: 'Rahul Roy',
    email: 'developrr.pro@gmail.com',
    link: 'https://www.linkedin.com/in/rahulroy99/'
  }
  const feed = new Feed({
    title: "Rahul Roy' blog",
    description: '',
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/cover-blog.png`,
    favicon: `${siteURL}/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, Rahul Roy`,
    updated: date,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`
    },
    author
  })
  posts.forEach(post => {
    const url = `${siteURL}/${post.metadata.slug}`
    feed.addItem({
      title: post.metadata.title,
      id: url,
      link: url,
      description: post.metadata.excerpt,
      content: post.metadata.excerpt,
      author: [author],
      contributor: [author],
      date: new Date(handleDate(post.metadata.date))
    })
  })
  fs.mkdirSync('./public/rss', { recursive: true })
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2())
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1())
  fs.writeFileSync('./public/rss/feed.json', feed.json1())
}

export default generateRssFeed
