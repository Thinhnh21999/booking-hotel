import styled, { css } from "styled-components";
import { Button, Modal, Form, Input, Checkbox } from "antd";

export const ButtonCustom = styled(Button)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #dedede;
  padding: 4px 10px;
`;

export const SignInOut = styled.div`
  ${(props) =>
    props.isSignIn
      ? css`
          button:first-child {
            text-decoration: underline;
            color: #3b71fe;
          }
          button:last-child {
            color: #727272;
          }
        `
      : css`
          button:first-child {
            color: #727272;
          }
          button:last-child {
            text-decoration: underline;
            color: #3b71fe;
          }
        `}
`;

export const ModalCustom = styled(Modal)`
  .ant-modal-content {
    padding: 30px 0 !important;
    border-radius: 20px !important;
  }

  .ant-modal-footer {
    display: none;
  }

  .ant-modal-close {
    inset-inline-start: 25px !important;
    top: 30px;
    width: 36px;
    height: 36px;
    border-radius: 50px;
  }
`;

export const FormCustom = styled(Form)`
  max-width: 570px !important;
  padding: 0 30px;
`;

export const FormItemCustom = styled(Form.Item)`
  .ant-col-16 {
    max-width: 100% !important;
  }
  .ant-col {
    margin: 0;
  }
  .ant-form-item-control-input-content {
    display: flex;
  }

  .ant-input-suffix {
    margin: 0 12px;
  }
  div {
    .ant-input {
      width: 100%;
      padding: 10px 16px;
      border-radius: 10px;
      color: #83929d;
    }
  }
  span {
    padding: 0;
    border-radius: 10px;
  }
`;

export const ButtonCreateCustom = styled(Button)`
  width: 100%;
  height: 45px !important;
  border-radius: 50px;
  background-color: #3b71fe;
  span {
    color: #fff;
  }
`;

export const CheckboxCustom = styled(Checkbox)``;

export const StyledSpan = styled.p`
  position: relative;
  text-align: center;
  margin-bottom: 30px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 100%;
    height: 1px;
    background-color: #dedede;
    z-index: 1;
  }
`;
