import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import BackgroundVideo from '../components/BackgroundVideo'
import Image from '../components/Image' 
import Gallery from '../components/Gallery'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ 
  title,
  subtitle,
  featuredImage,
  body,
  sectionHeroVid,
  callOutBackground,
  video,
  videoPoster,
  gallery,
  videoTitle,
}) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      {callOutBackground && (
        <Image
          background
          src={callOutBackground}
          alt={title}
          backgroundSize="90%"
        />
      )}
      <div className="container relative">
      
        <div className='embed-container'>
          <Content source={sectionHeroVid} />
        </div>
        <Content source={body} />
      </div>
    </section>
    <section className="BackgroundVideo-section section">
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>
    <section className="section">
      <div className="container">
        <h2>Socially distanced, together</h2>
        <Gallery images={gallery} />
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        subtitle
        featuredImage
        sectionHeroVid
        callOutBackground
        video
        videoPoster
        videoTitle
      }
    }
  }
`
