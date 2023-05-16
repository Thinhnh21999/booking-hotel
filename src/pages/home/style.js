import { Form } from "antd";
import styled from "styled-components";
import Swiper from "swiper";

export const FormItem = styled(Form.Item)`
  margin-bottom: 0;
  Button {
    span {
      color: #fff;
    }
  }
`;

export const SwiperCustom = styled(Swiper)`
  .swiper-button-prev {
  }
`;
