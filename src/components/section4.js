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

function Section4() {
  const CenterDiv = styled.div`
    display: flex;
    justify-content: center;
  `
  return (
    <Section>
      <Heading>
        Explore the Markets like it is your <span>Playground.</span>
      </Heading>
      <HeadingPara>
        Search for your favorite coins and stay ahead of the marke
      </HeadingPara>

      <ImageCenter>
        <StaticImage src="../assets/screen4.svg" alt="screen4" />
      </ImageCenter>

      <CenterDiv>
        <Button>Explore Markets</Button>
      </CenterDiv>
    </Section>
  )
}

export default Section4
