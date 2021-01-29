import styled from 'styled-components'


const Cards = styled.div`

  margin-top: 24px;
  margin-bottom: 24px;
  border: 2px solid ${({ theme }) => theme.colors.primary};;
  background-color: #263238;
  border-radius: 4px;

  overflow: hidden;

  h1,h2,h3 {
    font-size: 15px;
    margin-bottom: 0;
    font-weight: 700;
    line-height: 1;
    color: black;
    letter-spacing: 1px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Cards.header = styled.header`
  font-size: 16px;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  * {
    margin: 0;
  }
`;

Cards.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Cards;