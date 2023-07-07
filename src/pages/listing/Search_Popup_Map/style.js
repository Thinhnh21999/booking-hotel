import styled from "styled-components";
import { Form, Button, Checkbox, Rate, Space } from "antd";

export const Wrapper = styled.div`
  padding: 0 6%;
  margin: 10px 0 20px;

  @media (max-width: 1232px) {
    padding: 0 1%;
  }
`;

export const Container = styled.div`
  @media (max-width: 990px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;
export const FilterButton = styled.div`
  display: none;
  @media (max-width: 990px) {
    display: block;
    width: 25px;
  }
`;
export const Para = styled.p`
  @media (max-width: 990px) {
    display: none;
  }
`;

export const Aside = styled.div`
  @media (max-width: 990px) {
    display: none;
  }
`;

export const ButtonCustom = styled(Button)`
  width: 88px;
  height: 46px;
  border-radius: 50px;
  background: #3b71fe;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: #fff;
  }
`;

export const CheckboxGroup = styled(Checkbox.Group)`
  display: flex;
  flex-direction: column;
  font-size: 16px !important;
  label {
    margin-inline-start: 0 !important;
    font-size: 16px;
    margin: 5px 0;
    span {
      color: #5e6d77;
    }
    .ant-checkbox {
      margin-right: 4px;
      align-self: center;
    }
  }
`;

export const RateCustom = styled(Rate)`
  svg {
    path {
      color: #fa5636;
    }
  }
`;

export const SpaceCompact = styled(Space.Compact)`
  width: 58px;
  cursor: pointer;
  .ant-dropdown-trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
