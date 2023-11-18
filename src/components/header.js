import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Button, Container } from "../styles/components"

const Header = ({ siteTitle }) => {
  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #08130a;
    padding-block: 24px;
  `
  const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
  `
  const UL = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 1rem;

    li {
      a {
        text-decoration: none;
      }
    }
  `

  const links = [
    {
      title: "Career",
      slug: "#career",
    },
    {
      title: "Blogs",
      slug: "#blogs",
    },
    {
      title: "Leaderboard",
      slug: "#leaderboard",
    },
    {
      title: "Fees",
      slug: "#fees",
    },
  ]

  return (
    <Container>
      <Header>
        <Link>
          <StaticImage src="../assets/logo.svg" alt="logo" />
        </Link>
        <LinkWrapper>
          <UL>
            {links.map((item, ind) => (
              <li key={ind}>
                <a href={item.slug}>{item.title}</a>
              </li>
            ))}
          </UL>
          <Button>Trade Now</Button>
        </LinkWrapper>
      </Header>
    </Container>
  )
}

export default Header
