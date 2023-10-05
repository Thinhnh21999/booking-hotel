import { Rate } from "antd";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const RateCustom = styled(Rate)`
  svg {
    path {
      color: #fa5636;
      font-size: 14px;
    }
  }
`;

export const SwiperCustom = styled(Swiper)`
  @media (min-width: 667px) {
    overflow: unset;
  }
  .swiper-pagination {
    position: unset;
    margin-top: 32px;
  }
  .swiper-button-next {
    position: absolute;
    top: -26px !important;
    right: 0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  }
  .swiper-button-prev {
    position: absolute;
    top: -26px !important;
    right: 48px !important;
    left: unset;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

export const LoaderButton = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  margin-left: 8px;

  .loader-large {
    position: absolute;
    inset: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 20px;
    animation: loading 2s infinite;
  }

  .loader-small {
    position: absolute;
    width: 50%;
    height: 50%;
    inset: 0;
    margin: auto;
    background-color: #3b71fe;
    z-index: 2;
    border-radius: 3px;
    animation: loading 2s infinite reverse;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotateY(180deg);
    }

    100% {
      transform: rotateX(180deg);
    }
  }
`;
