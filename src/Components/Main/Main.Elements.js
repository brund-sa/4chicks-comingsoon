import styled from 'styled-components'


export const MainLogo = styled.div `
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   img {
       width: 50%;
   }
   h1 {
       font-size: size 3rem;
       font-family: 'Roboto', sans-serif;
       font-weight: 900;
       padding: 20px 0;
   }
/* 
   @media screen and (max-width: 900px) {
       img {
           width: 50%;
       }
   } */
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  margin-top: 35px;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
