import styled from "styled-components";
export const ImgStyle = styled.div`
  @media (max-width: 990px) {
    border-radius: 12px 12px 12px 0;
  }
`;
export const Price = styled.div`
  @media (min-width: 990px) {
    display: flex;
    justify-content: center;
    transform: translateY(50%);
    p {
      width: 100%;
      text-align: center;
    }
    .zoomDetail {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 990px) {
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
  }
`;
