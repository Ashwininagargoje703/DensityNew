import React from "react"
import styled from "styled-components"
import { Container } from "../styles/components"
import { StaticImage } from "gatsby-plugin-image"

export default function Footer() {
  const Footer = styled.footer`
    background-color: ${({ theme }) => theme.color.secondary};
    padding: 3rem 0;
  `
  const ImageCenter = styled.div`
    display: flex;
    justify-content: center;
  `
  const Div = styled.div`
    display: flex;
    margin-block: 2rem;
    justify-content: center;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
  `

  const links = [
    {
      title: "Blog",
      slug: "#blog",
    },
    {
      title: "Fees",
      slug: "#Fees",
    },
    {
      title: "Leaderboard",
      slug: "#Leaderboard",
    },
    {
      title: "Careers",
      slug: "#Careers",
    },
    {
      title: "Contact Us",
      slug: "#contact",
    },
    {
      title: "Privacy Policy",
      slug: "#privacy",
    },
  ]

  const social = [
    {
      link: "../assets/fb.svg",
    },
    {
      link: "../assets/twitter.svg",
    },
    {
      link: "../assets/linkedin.svg",
    },
    {
      link: "../assets/insta.svg",
    },
  ]

  return (
    <Footer>
      <Container>
        <ImageCenter>
          <StaticImage src="../assets/logo.svg" alt="logo" />
        </ImageCenter>
        <Div>
          <ul>
            {links.map(item => (
              <li>{item.title}</li>
            ))}
          </ul>
        </Div>
        <Div>
          <p
            style={{
              textAlign: "center",
              maxWidth: "750px",
            }}
          >
            Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
            diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
            muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.{" "}
          </p>
        </Div>
        <Div
          style={{
            gap: "1rem",
          }}
        >
          <StaticImage src="../assets/fb.svg" alt="logo" />
          <StaticImage src="../assets/twitter.svg" alt="logo" />
          <StaticImage src="../assets/linkedin.svg" alt="logo" />
          <StaticImage src="../assets/insta.svg" alt="logo" />
        </Div>
      </Container>
    </Footer>
  )
}
