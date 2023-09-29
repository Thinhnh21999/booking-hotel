import styled from "styled-components";
import { DatePicker } from "react-responsive-calendar-picker";

export const DatePickerCustom = styled(DatePicker)`
  .date-picker-wrapper {
    top: 0;
    left: 0;
    margin-top: 16px;
    transform: translateY(82px);
    border-radius: 1rem !important;
    padding: 20px 30px 30px 30px !important;
    z-index: 9999;
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

  .date-picker-wrapper div:nth-child(3) {
    @media (max-width: 991px) {
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
  }
  .date-picker-wrapper div:nth-child(4) {
    @media (max-width: 991px) {
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
  }
`;
