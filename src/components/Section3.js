import React from "react"
import {
  Heading,
  HeadingPara,
  ImageCenter,
  Section,
} from "../styles/components"
import { StaticImage } from "gatsby-plugin-image"

function Section3() {
  return (
    <Section>
      <Heading>
        Trade More. <span>Pay Less.</span>
      </Heading>
      <HeadingPara>Our low Fees Supercharge Your Profits</HeadingPara>

      <ImageCenter>
        <StaticImage src="../assets/third1.svg" alt="third1" />
        <StaticImage src="../assets/third2.svg" alt="third2" />
        <StaticImage src="../assets/third3.svg" alt="third3" />
      </ImageCenter>
    </Section>
  )
}

export default Section3
