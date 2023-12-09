import LayoutMobile from '../../templates/LayoutMobile'
import SinglePost from '../../organisms/SinglePost'
import HeadSeo from '../../organisms/HeadSeo'

const Slug = ({ metadata, content, slug }) => {
  return (
    <>
      <HeadSeo
        title={`${metadata.title} - Rahul Roy`}
        description={metadata.metadescription}
        keyword={metadata.metakeyword}
        cover={`www.developrr.pro${metadata.cover}`}
        slug={`www.developrr.pro/${slug}`}
        canonical={`www.developrr.pro/${slug}`}
      />
      <LayoutMobile>
        <SinglePost metadata={metadata} content={content} />
      </LayoutMobile>
    </>
  )
}

export default Slug
