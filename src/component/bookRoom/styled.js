import styled from "styled-components";
import { DateRangePicker } from "react-date-range";

export const DateRangePickerCustom = styled(DateRangePicker)`
  display: flex !important;
  .rdrCalendarWrapper {
    position: absolute;
    right: 0;
    max-width: 700px;
    min-width: 100%;
    margin-top: 16px;
    border-radius: 1rem !important;
    padding: 0 30px !important;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
    border: 1px solid #dedede;
    z-index: 9999;
    @media (max-width: 991px) {
      width: 100% !important;
    }

    .rdrMonths {
      @media (max-width: 564px) {
        flex-wrap: wrap;
      }
    }
  }
  .rdrCalendarWrapper {
    margin-top: 0 !important;
  }
  @media (max-width: 768px) {
    .rdrCalendarWrapper {
      position: static;
      padding: 0 !important;
    }
    .rdrMonths .rdrMonth:nth-child(2) {
      display: none;
    }
  }
  .rdrDefinedRangesWrapper {
    display: none;
  }

  .rdrDateDisplayWrapper {
    display: none;
  }
`;
