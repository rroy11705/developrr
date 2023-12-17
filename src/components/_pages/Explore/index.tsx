import { PostInterface } from '../../../interfaces/postInterface'
import SearchBar from '../../molecules/SearchBar'
import HeadSeo from '../../organisms/HeadSeo'
import LatestPosts from '../../organisms/LatestPosts'
import LayoutMobile from '../../templates/LayoutMobile'
import MainContent from '../../templates/MainContent'

type Props = {
  posts: PostInterface[]
}

const Explore = ({ posts }: Props) => {
  return (
    <>
      <HeadSeo
        title="Explore - Rahul Roy"
        description="This is a blog about web development"
        keyword="full stack developer"
        cover="www.developrr.pro/cover-blog.png"
        slug="www.developrr.pro/explore"
        canonical="www.developrr.pro/explore"
      />
      <LayoutMobile>
        <MainContent>
          <SearchBar />
          <LatestPosts posts={posts} />
        </MainContent>
      </LayoutMobile>
    </>
  )
}

export default Explore
