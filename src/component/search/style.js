import styled from "styled-components";
import Calendar from "react-calendar";

export const CalendarCustom = styled(Calendar)`
  width: 400px;
  border: 0 !important;
  padding: 4px;
  @media (max-width: 992px) {
    width: 50%;
  }
  button {
    height: 55px;
  }
  .react-calendar__navigation {
    margin-bottom: 0;
  }
  .react-calendar__month-view__weekdays {
    padding-top: 10px;
    margin-top: 5px;
    border-top: 1px solid #dedede;
    text-transform: none;
  }
`;
