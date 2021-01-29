import styled from 'styled-components'
import db from '../db.json';
import Cards from '../src/components/Cards';
import GitHubContainer from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';


export const BackgroundImage = styled.div`

  background-image:  url(${db.background});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.div`

  width: 100%;
  margin-left: 150px;
  max-width: 350px;
  padding-top: 45px;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {

  return (

    <BackgroundImage>
      <QuizContainer>
        <Cards>
        <Cards.header>
          <h1>Counter-Strike GO</h1>
        </Cards.header>
          <Cards.Content>
            <p>lorem ipsun scm... tust djons</p>
          </Cards.Content>
        </Cards>

        <Cards>
          <Cards.Content>
          <p>lorem ipsun scm... tust djons</p>
          </Cards.Content>
        </Cards>
        <Footer/>
      </QuizContainer>
      <GitHubContainer projectUrl="www.github.com/moisesgui"/>
    </BackgroundImage>

  )

}
