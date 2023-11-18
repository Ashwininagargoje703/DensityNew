import styled from "styled-components"

export const Container = styled.div`
  max-width: 1100px;

  margin: auto;
`

export const Button = styled.button`
  background: linear-gradient(to right, #ebff25, #69dc62);
  border-radius: 10px;
  padding: 10px 25px;
  font-weight: 700;
  cursor: pointer;
`
export const Section = styled.section`
  margin-block: 10rem;
`

export const Heading = styled.h2`
  max-width: 700px;
  margin: auto;
  margin-top: 5rem;
  text-align: center;
  font-size: 5rem;
  color: ${({ theme }) => theme.color.text2};
  span {
    background: linear-gradient(to right, #ebff25, #69dc62);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const HeadingPara = styled.h2`
  max-width: 700px;
  margin: auto;
  font-size: 1.3rem;
  margin-top: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.color.text2};
`

export const ImageCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  padding-block: 1rem;
`
