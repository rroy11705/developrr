import HeadSeo from '../../organisms/HeadSeo'
import Recommendations from '../../organisms/Recommendations'
import LayoutMobile from '../../templates/LayoutMobile'
import MainContent from '../../templates/MainContent'

const Home = ({ posts }) => {
  return (
    <LayoutMobile>
      <HeadSeo
        title="Rahul Roy - Web Developer"
        description="Greetings, I'm Rahul Roy, a software artisan with a love for turning lines of code into meaningful digital experiences. Over the past three years, my journey as a full-stack developer has been a delightful rollercoaster of challenges and triumphs. Armed with React.js and Python (Django), I've been on a mission to blend creativity with functionality in the ever-evolving tech landscape."
        keyword="desenvolvedor full stack"
        cover="www.developrr.pro/cover-blog.png"
        slug="www.developrr.pro/"
        canonical="www.developrr.pro/"
      />
      <MainContent>
        <Recommendations posts={posts} />
      </MainContent>
    </LayoutMobile>
  )
}

export default Home
