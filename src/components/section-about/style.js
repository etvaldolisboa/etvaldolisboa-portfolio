import styled from "styled-components";

export const AboutSection = styled.section`
  min-height: calc(100vh - 200px);
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
  aspect-ratio: 24/24;
  width: 24rem;
  padding: .6rem;
  backdrop-filter: var(--global-backdrop-filter);
  border-radius: var(--radius-app);
  background-color: var(--color-bw-800-opacity);
`

export const TextAbout = styled.div`
/* color: blue; */
p, span{
  font-size: 1.6rem;
}
span{
font-weight: bold;
}
a{
  font-weight: bold;
  /* color: red; */
}

.linkCV{
  display: inline-block;
  padding: 1rem;
  font-size: 2rem;
  background-color: blue;
}
`