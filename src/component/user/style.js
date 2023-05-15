import styled from "styled-components";
import { Button, Modal } from "antd";

export const ButtonCustom = styled(Button)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #dedede;
  padding: 4px 10px;
`;

export const ModalCustom = styled(Modal)`
  .ant-modal-content {
    padding: 30px 0 !important;
    button {
    }
  }
`;
