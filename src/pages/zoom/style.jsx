import styled from "styled-components";
export const Wrapper = styled.div`
  padding: 0 6%;
  margin: 10px 0 20px;

  @media (max-width: 1232px) {
    padding: 0 1%;
  }
`;
export const PriceFixed = styled.div`
display: none;
@media (max-width: 990) {
  display: block;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 5px 5px 5px 5px #ccc;
  z-index: 9;
  }
`;
export const Price = styled.div`
    .box {
      display: flex;
    }
    p {
      width: 50%;
      text-align: center;
    }
    .zoomDetail {
      width: 50%;
    }
`;
