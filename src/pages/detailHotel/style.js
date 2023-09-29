import { Rate, Form, Button, Pagination } from "antd";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Price = styled.div`
  display: none;
  @media (max-width: 990px) {
    display: block;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 5px 5px 5px 5px #ccc;
    z-index: 9;
  }
`;

export const SwiperCustom = styled(Swiper)`
  overflow: unset;
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

export const RateCustom = styled(Rate)`
  svg {
    path {
      color: #fa5636;
    }
  }
`;

export const FormCustoms = styled(Form)`
  input {
    padding: 10px 15px;
  }
`;

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

export const ButtonCustoms = styled(Button)`
  display: flex;
  align-items: center;
  padding: 26px 20px;
  border-radius: 50px;
  margin-top: 24px;
  background-color: #3b71fe !important;
  span {
    font-size: 14px;
  }
`;

export const PaginationCustom = styled(Pagination)`
  .ant-pagination-prev {
    background-color: ##f7f8fa;
    border: 1px solid #dedede;
    border-radius: 10px;
    svg {
      color: #768090;
    }
  }
  .ant-pagination-next {
    background-color: ##f7f8fa;
    border: 1px solid #dedede;
    border-radius: 10px;
    svg {
      color: #768090;
    }
  }
  .ant-pagination-item-active {
    background-color: #3b71fe;
    border-radius: 10px;
    a {
      color: #fff;
    }
  }
`;
