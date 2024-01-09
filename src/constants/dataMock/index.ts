import { PostInterface } from '../../interfaces/postInterface'

export const dataMockButton = {
  text: 'Any text'
}

export const dataMockErrorMessage = {
  text: 'Any text'
}

export const dataMockPostCard = {
  title: 'Any title',
  subtitle: 'Any subtitle',
  date: 'Any date',
  time: 'Any time',
  link: 'url.com',
  category: 'Any category',
  imagePath: '/image.com'
}

export const dataMockPostCardMini = {
  title: 'Any title',
  time: 'Any time',
  date: 'Any date',
  imagePath: '/image.com',
  link: 'url.com'
}

export const dataMockPosts: PostInterface[] = [
  {
    metadata: {
      category: 'Tech',
      cover: '/image.com',
      date: '21-04-2022',
      excerpt: 'This is a tech post',
      id: '1',
      link: '/posts/1',
      slug: 'post-1',
      time: '10 min',
      title: 'Tech Post 1'
    }
  },
  {
    metadata: {
      category: 'Science',
      cover: '/image.com',
      date: '21-04-2022',
      excerpt: 'This is a science post',
      id: '2',
      link: '/posts/2',
      slug: 'post-2',
      time: '15 min',
      title: 'Science Post 1'
    }
  },
  {
    metadata: {
      category: 'Science',
      cover: '/image.com',
      date: '21-04-2022',
      excerpt: 'This is another science post',
      id: '2',
      link: '/posts/3',
      slug: 'post-3',
      time: '15 min',
      title: 'Science Post 2'
    }
  }
]

export const mockHeaders = [
  {
    title: 'Science Post 1',
    description: 'This is a science post',
    keyword: 'science post',
    cover: '/image.com',
    slug: 'post-2',
    canonical: '/posts/2'
  }
]

export const dataMockSearchInPost = {
  text: 'Science Post',
  result: 2
}

export const dataMockSectionDoubleTitle = {
  titleMin: 'Any title min',
  titleMax: 'Any title max'
}

export const dataMockSectionTitle = {
  title: 'Any title',
  strong: false
}

export const dataMockCareer = {
  role: 'Any role',
  company: 'Any company',
  urlCompany: 'Any urlCompany',
  city: 'Any city',
  country: 'Any country',
  startDate: 'Any startDate',
  finalDate: 'Any finalDate',
  duration: 'Any duration'
}

export const dataMockFilter = {
  filters: ['Devops', 'Front end', 'SEO']
}

export const dataMockSocialCards = [
  {
    link: 'https://github.com/rroy11705',
    title: 'PORTFOLIO',
    subtitle: 'Last projects',
    icon: 'Any icon'
  },
  {
    link: 'https://twitter.com/DeveloprrPro',
    title: 'TWITTER',
    subtitle: 'Discussions',
    icon: 'Any icon'
  },
  {
    link: 'https://www.linkedin.com/in/rahulroy99/',
    title: 'LINKEDIN',
    subtitle: 'Connect to me',
    icon: 'Any icon'
  },
  {
    link: 'mailto:developrr.pro@gmail.com',
    title: 'EMAIL',
    subtitle: 'Talk to me',
    icon: 'Any icon'
  }
]
