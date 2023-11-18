import React from "react"
import styled from "styled-components"
import { Container } from "../styles/components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

function Section6() {
  const data = useStaticQuery(graphql`
    query {
      testimonials: allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              title
              position
              name
              image {
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  const filterData = d => {
    console.log(d)
    return d.filter(({ node }) => node.frontmatter.position)
  }

  const ContainerDiv = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.color.text2};
    padding-block: 4rem;
  `
  const Para = styled.p`
    color: ${({ theme }) => theme.color.text1};
    text-align: center;
    font-size: 1.3rem;
    max-width: 500px;
  `
  const H2 = styled.h2`
    font-size: 3rem;
    text-align: center;
    color: ${({ theme }) => theme.color.text1};
  `
  const CenterDiv = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
  `
  return (
    <ContainerDiv>
      <Container>
        <H2>Don’t take our word for it.</H2>
        <CenterDiv>
          <Para>
            Hear it from our expert community of traders who have made insane
            amounts in a short amount of time
          </Para>
        </CenterDiv>
        <div
          style={{
            display: "flex",
            gap: "5rem",
            justifyContent: "center",
          }}
        >
          {data &&
            filterData(data.testimonials.edges).map(({ node }) => (
              <div
                style={{
                  color: "black",
                  maxWidth: "300px",
                  backgroundColor: "#F3F3F3",
                  padding: "10px 25px",
                  minHeight: "280px",
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: node.html }}></div>
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <h3
                    style={{
                      maxWidth: "50%",
                      fontSize: "1.6rem",
                      marginTop: "5rem",
                    }}
                  >
                    {node.frontmatter.name}
                  </h3>
                  <p
                    style={{
                      marginTop: "-20px",
                    }}
                  >
                    {node.frontmatter.position}
                  </p>
                  <div
                    style={{
                      position: "absolute",
                      bottom: -29,
                      right: -25,
                    }}
                  >
                    <img src={node.frontmatter.image.publicURL} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </ContainerDiv>
  )
}

export default Section6
