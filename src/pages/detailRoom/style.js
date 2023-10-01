import styled from "styled-components";
import { Swiper } from "swiper/react";
import { DateRangePicker } from "react-date-range";
import { DatePicker } from "react-responsive-calendar-picker";

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
  .roomDetail {
    width: 50%;
  }
`;

export const ImgStyle = styled.div`
  @media (max-width: 990px) {
    border-radius: 12px 12px 12px 0;
  }
`;

export const SwiperCustom = styled(Swiper)`
  overflow: unset;
  width: 100%;
  .swiper-pagination {
    position: unset;
    margin-top: 32px;
  }
  .swiper-button-next {
    position: absolute;
    top: -26px !important;
    right: 14px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  }
  .swiper-button-prev {
    position: absolute;
    top: -26px !important;
    right: 62px !important;
    left: unset;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  }
  .swiper-button-lock {
    display: flex;
  }
  .ant-row {
    flex-direction: column;
    .ant-col {
      width: 100% !important;
      max-width: 100% !important;
      height: 100% !important;
      .border-slate-200 {
        border-right: 0;
        margin-bottom: 20px;
        div {
          justify-content: space-between;
        }
      }
      .border-slate-300 {
        margin-right: 0;
      }
      img {
        border-top-right-radius: 0.7rem;
        border-top-left-radius: 0.7rem;
        border-bottom-left-radius: 0;
      }
      p {
        display: block;
      }
      h3 {
        margin-bottom: 20px;
      }
      .bg-primary {
        margin-bottom: 30px;
      }
    }
  }
`;

export const DatePickerCustom = styled(DatePicker)`
  width: 100%;
  .date-picker-wrapper {
    position: relative !important;
    width: 100% !important;
    border-radius: 1rem !important;
    padding: 20px 30px 30px 30px !important;
    @media (max-width: 992px) {
      width: 100% !important;
    }

    @media (max-width: 564px) {
      flex-wrap: wrap;
    }

    div:nth-child(2) {
      div {
        font-size: 16px;
      }
    }

    .day-date {
      font-size: 14px;
    }
  }

  .date-picker-wrapper div:nth-child(3) {
    width: 100% !important;
    div:nth-child(2) {
      grid-template-columns: repeat(7, auto);
      display: grid;
    }
    div:nth-child(3) {
      grid-template-columns: repeat(7, auto);
      display: grid;
    }
  }
  .date-picker-wrapper div:nth-child(4) {
    width: 100% !important;
    div:nth-child(2) {
      grid-template-columns: repeat(7, auto);
      display: grid;
    }
    div:nth-child(3) {
      grid-template-columns: repeat(7, auto);
      display: grid;
    }
  }
`;

export const DatePickerCustomTwo = styled(DatePicker)`
  position: relative;
  .date-picker-wrapper {
    margin-top: 16px;
    right: 0;
    z-index: 999;
    @media (max-width: 991px) {
      width: 100% !important;
    }

    @media (max-width: 564px) {
      flex-wrap: wrap;
    }

    div:nth-child(2) {
      div {
        font-size: 16px;
      }
    }

    .day-date {
      font-size: 14px;
    }
  }
`;

export const DateRangePickerCustom = styled(DateRangePicker)`
  width: 100%;
  .rdrCalendarWrapper {
    position: relative;
    width: 100%;
    border-radius: 1rem !important;
    padding: 0 30px !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
    border: 1px solid #dedede;
    @media (max-width: 991px) {
      width: 100% !important;
    }
    .rdrMonths {
      @media (max-width: 991px) {
        flex-wrap: wrap;
        width: 100%;
      }
      .rdrMonth {
        @media (max-width: 991px) {
          width: 100%;
        }
      }
    }
  }
  .rdrDefinedRangesWrapper {
    display: none;
  }

  .rdrDateDisplayWrapper {
    display: none;
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
