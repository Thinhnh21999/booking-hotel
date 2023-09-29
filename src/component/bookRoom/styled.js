import styled from "styled-components";
import { DatePicker } from "react-responsive-calendar-picker";

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
