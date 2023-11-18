import React from "react"
import { ImageCenter, Section } from "../styles/components"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

function Section2() {
  const ImageWrapper = styled.section`
    margin-block: 5rem;
  `
  return (
    <Section>
      <ImageWrapper>
        <ImageCenter>
          <StaticImage src="../assets/second1.svg" />
        </ImageCenter>
        <ImageCenter>
          <StaticImage src="../assets/second2.svg" />
        </ImageCenter>
        <ImageCenter>
          <StaticImage src="../assets/second3.svg" />
        </ImageCenter>
      </ImageWrapper>
    </Section>
  )
}

export default Section2
