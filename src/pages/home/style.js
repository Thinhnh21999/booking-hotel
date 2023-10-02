import { Form } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

import styled from "styled-components";

export const FormItem = styled(Form.Item)`
  margin-bottom: 0;
  Button {
    span {
      color: #fff;
    }
  }
`;

export const SwiperCustom = styled(Swiper)`
  @media (min-width: 667px) {
    overflow: unset;
  }
  .swiper-pagination {
    position: unset;
    margin-top: 32px;
  }
  .swiper-button-next {
    position: absolute;
    top: -26px !important;
    right: 0;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  }
  .swiper-button-prev {
    position: absolute;
    top: -26px !important;
    right: 48px !important;
    left: unset;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

export const SwiperCustomTwo = styled(Swiper)`
  .swiper-button-prev {
    left: 0 !important;
  }
  .swiper-button-next {
    right: 0 !important;
  }
`;
