import styled from "styled-components";

export const AboutSection = styled.section`
min-height: calc(100vh - 200px);
/* display: flex; */
/* flex-direction: column; */
/* align-items: center; */
/* justify-content: start; */
`

export const AboutMe = styled.div`
/* border: 1px solid purple; */
display: flex;
align-items: center;
gap: 1.8rem;

@media (max-width:768px) {
  flex-direction: column;
}
`

export const AboutImage = styled.img`
background-color: blue;
aspect-ratio: 25/25;
width: 27rem;
padding: 20px;
border-radius: 5px;
margin: 20px;
/* width: 100%; */
/* img{
} */
`

export const TextAbout = styled.div`
/* color: blue; */
p{

  font-size: 1.6rem;
}

`