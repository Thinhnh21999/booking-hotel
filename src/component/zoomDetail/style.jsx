import styled from "styled-components";
export const Content = styled.div`
  @media (max-width:990px) {
    width: 100%;
  }  

`;
export const NavBar = styled.div`
    @media (max-width:990px) {
        display: none;
    }
`
export const ImgStyle = styled.div`
  @media (max-width: 990px) {
    border-radius: 12px 12px 12px 0;
  }
`;
export const Heading = styled.div`
  @media (max-width: 768px) {
    h1{
      font-size: 28px;
    }
    .share{
      display: none;
    }
  }
  
`
export const Contact = styled.div`
  display: none;
  @media (max-width:990px) {
    display: block;

  }
`
