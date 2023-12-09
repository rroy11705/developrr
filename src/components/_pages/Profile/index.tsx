import Image from 'next/image'
import SectionDoubleTitle from '../../atoms/SectionDoubleTitle'
import Career from '../../molecules/Career'
import SocialCards from '../../molecules/SocialCards'
import HeadSeo from '../../organisms/HeadSeo'
import LayoutMobile from '../../templates/LayoutMobile'
import MainContent from '../../templates/MainContent'
import { Container } from './styles'

const Profile = () => {
  const SOCIAL_DATA = [
    {
      link: 'https://github.com/rroy11705',
      title: 'PORTFOLIO',
      subtitle: 'Last projects'
    },
    {
      link: 'https://twitter.com/DeveloprrPro',
      title: 'TWITTER',
      subtitle: 'Discussions'
    },
    {
      link: 'https://www.linkedin.com/in/rahulroy99/',
      title: 'LINKEDIN',
      subtitle: 'Connect to me'
    },
    {
      link: 'mailto:developrr.pro@gmail.com',
      title: 'EMAIL',
      subtitle: 'Talk to me'
    }
  ]
  return (
    <>
      <HeadSeo
        title="Profile - Rahul Roy"
        description="This is a blog about web development"
        keyword="full stack developer"
        cover="www.developrr.pro/cover-blog.png"
        slug="www.developrr.pro/profile"
        canonical="www.developrr.pro/profile"
      />
      <LayoutMobile noTop>
        <MainContent>
          <Container>
            <div className="header">
              <div className="photo">
                <Image
                  src="/profile.jpeg"
                  alt="Profile picture"
                  width={256}
                  height={256}
                  layout="responsive"
                  className="profileImageIn"
                  quality={100}
                  priority
                />
              </div>
              <div className="titles">
                <SectionDoubleTitle
                  titleMin="Software Engineer"
                  titleMax="Rahul Roy"
                />
              </div>
              <div className="description">
                <h2>Bio</h2>
                <p>
                  Greetings, I{"'"}m Rahul Roy, a software artisan with a love
                  for turning lines of code into meaningful digital experiences.
                  Over the past three years, my journey as a full-stack
                  developer has been a delightful rollercoaster of challenges
                  and triumphs. Armed with React.js and Python (Django), I{"'"}
                  ve been on a mission to blend creativity with functionality in
                  the ever-evolving tech landscape.
                </p>
                <br />
                <p>
                  My adventure in the world of bits and bytes started with a
                  fascination for problem-solving, and it has since blossomed
                  into a deep-seated passion for creating digital magic. On the
                  front lines of development, I{"'"}ve woven intricate user
                  interfaces with React.js, ensuring each click and scroll feels
                  like a journey rather than a task. Meanwhile, behind the
                  scenes, my love affair with Python and Django has birthed
                  robust, scalable backends that bring these interfaces to life.
                </p>
                <br />
                <p>
                  What sets me apart extends beyond the screen and into the
                  collaborative dance of team dynamics. I thrive in the synergy
                  of diverse minds, turning projects into shared victories.
                  Beyond the technical realm, you{"'"}ll find me exploring the
                  latest tech trends, always eager to infuse a touch of
                  innovation into my work. Join me in transforming ideas into
                  code and dreams into digital realities.
                </p>
              </div>
            </div>
            <div className="career">
              <h2>Career</h2>
              <div className="careerContainer">
                <Career
                  role="Software Engineer"
                  company="Mindbowser Inc"
                  urlCompany="https://www.mindbowser.com/"
                  city="Pune"
                  country="India"
                  startDate="Jun 2023"
                  finalDate="Present"
                />
                <Career
                  role="Software Engineer"
                  company="Xoriant"
                  urlCompany="https://www.xoriant.com/"
                  city="Pune"
                  country="India"
                  startDate="Aug 2021"
                  finalDate="Jun 2023"
                  duration="1 yr 11 mos"
                />
                <Career
                  role="Web Developer"
                  company="Zero Dollar Security"
                  urlCompany="https://zerodollarsecurity.in/"
                  city="Kolkata"
                  country="India"
                  startDate="Nov 2019"
                  finalDate="Jul 2021"
                  duration="1 yr 9 mos"
                />
              </div>
            </div>
            <SocialCards socialData={SOCIAL_DATA} />
          </Container>
        </MainContent>
      </LayoutMobile>
    </>
  )
}

export default Profile
