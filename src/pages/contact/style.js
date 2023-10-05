import { Rate, Form, Button, Pagination } from "antd";
import styled from "styled-components";

export const FormItemMessages = styled(Form.Item)`
  .ant-form-item-row {
    display: block !important;
  }
  label {
    font-size: 16px !important;
  }
`;

export const FormItemCustoms = styled(Form.Item)`
  width: 50%;
  margin-bottom: 10px !important;

  @media (max-width: 768px) {
    width: 100%;
  }
  .ant-form-item-label {
    width: 40%;
    text-align: left;
  }
`;
