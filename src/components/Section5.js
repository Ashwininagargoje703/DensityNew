import React from "react"
import {
  Button,
  Heading,
  HeadingPara,
  ImageCenter,
  Section,
} from "../styles/components"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

function Section5() {
  const CenterDiv = styled.div`
    display: flex;
    justify-content: center;
  `
  return (
    <Section>
      <Heading>
        <span>Unlock</span> New Frontiers.
      </Heading>
      <HeadingPara>
        Are you a stock trader looking for new opportunities to make money? We
        got you covered!
      </HeadingPara>

      <ImageCenter>
        <StaticImage src="../assets/screen51.svg" alt="screen5" />
      </ImageCenter>
      <ImageCenter>
        <StaticImage src="../assets/screen52.svg" alt="screen52" />
      </ImageCenter>
    </Section>
  )
}

export default Section5
