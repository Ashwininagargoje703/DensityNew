import React from "react"
import styled from "styled-components"
import { Heading, HeadingPara, ImageCenter } from "../styles/components"
import { StaticImage } from "gatsby-plugin-image"

function HeroSection() {
  return (
    <section>
      <Heading>
        It's time to trade, the <span>future.</span>
      </Heading>
      <HeadingPara>
        Trade BTC, ETH, Futures With 125x Leverage And Earn Rewards.
      </HeadingPara>
      <ImageCenter>
        <StaticImage src="../assets/screen1.svg" alt="hero1" />
      </ImageCenter>
      <div
        style={{
          marginBlock: "5rem",
        }}
      >
        <StaticImage src="../assets/trade-info.svg" alt="hero1" />
      </div>
    </section>
  )
}

export default HeroSection
