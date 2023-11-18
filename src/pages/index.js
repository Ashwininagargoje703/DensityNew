import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import { theme } from "../styles/theme"
import HeroSection from "../components/HeroSection"
import Section2 from "../components/Section2"
import Section3 from "../components/Section3"
import Section4 from "../components/section4"
import Section5 from "../components/Section5"
import Section6 from "../components/Section6"
import Footer from "../components/Footer"

const IndexPage = ({ data }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Layout>
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </Layout>
  </ThemeProvider>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    travelLocations: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            travel_dates
            title
            featured_image {
              childImageSharp {
                gatsbyImageData(width: 600, aspectRatio: 1.5)
              }
            }
          }
        }
      }
    }
  }
`
