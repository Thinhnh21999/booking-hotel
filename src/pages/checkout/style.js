import { Button, Form, Select } from "antd";
import styled from "styled-components";

export const FormCustom = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  margin: 30px -12px 0 -12px;

  .ant-form-item {
    width: 50%;
    padding: 0 12px;
    margin-bottom: 30px !important;

    @media (max-width: 576px) {
      width: 100%;
    }

    label {
      color: #727272 !important;
      font-size: 16px;
      margin-bottom: 2px;
    }

    .ant-form-item-control-input {
      min-height: 50px;
      input {
        padding: 6px 12px;
        font-size: 18px;
        color: #212529 !important;
        height: 50px;
      }
    }
  }
`;

export const FormItemTextAreaCustom = styled(Form.Item)`
  width: 100% !important;
  div {
    display: block;
  }
  label {
    color: #727272;
    font-size: 16px;
    margin-bottom: 10px;
  }
  .ant-input {
    color: #212529 !important;
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

export const SelectCustom = styled(Select)`
  margin-bottom: 16px;
  border: 1px solid #232323;
  border-radius: 16px;

  .ant-select-selector {
    padding: 16px !important;
    height: 60px !important;
    border-radius: 16px;
    span {
      font-size: 16px;
      line-height: 26px;
    }
  }

  .rc-virtual-list-holder-inner {
    padding: 16px;
  }
`;

export const ButtonCustom = styled(Button)`
  height: 50px;
  width: 110px;
  background-color: #3b71fe;
  border-radius: 40px;
  margin-top: 30px;
  span {
    color: #fff;
  }
`;
