import MapSvg from "../../assets/svgs/map.svg";
import PhoneSvg from "../../assets/svgs/phone.svg";
import EmailSvg from "../../assets/svgs/email.svg";
import { Form, Input, Button, message } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoadingSg } from "../../redux/slice/loadingSlice";
import Notification from "../../component/notification";

import * as styled from "./style";

export default function Contact() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingSg(true));
    const timeoutId = setTimeout(() => {
      dispatch(setLoadingSg(false));
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch]);

  const onFinish = (value) => {
    Notification(
      "success",
      "Cảm ơn bạn đã gửi đến những lời yêu thương, chúc bạn và gia đình sức khoẻ"
    );
    setTimeout(() => {
      form.resetFields();
    }, 1000);
  };

  return (
    <>
      <div className="w-full lg:h-[780px] h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387625.9023692689!2d-74.36563460807385!3d40.62149124937595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1696335883699!5m2!1svi!2s"
          frameBorder="0"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="py-[50px] lg:py-[80px] mx-5 lg:mx-auto lg:container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 my-auto order-2 lg:order-1">
            <h2 className="mb-4 text-3xl font-bold">Contact information</h2>
            <p className="mb-4 text-gray">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex items-center py-4">
              <img className="pr-2.5 w-10" src={MapSvg} alt="" />
              <span className="text-lg">
                Libety Road, New District, New York
              </span>
            </div>
            <div className="border-bottom w-[325px]"></div>
            <div className="flex items-center py-4">
              <img className="pr-2.5 w-10" src={PhoneSvg} alt="" />
              <span className="text-lg">(000) 999 -656 -888</span>
            </div>
            <div className="border-bottom w-[325px]"></div>
            <div className="flex items-center py-4">
              <img className="pr-2.5 w-10" src={EmailSvg} alt="" />
              <span className="text-lg">travelerwp@gmail.com</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 shadow-custom rounded-3xl order-1 lg:order-2 mb-10 lg:mb-0">
            <Form
              className="py-[30px] px-[18px]"
              form={form}
              onFinish={onFinish}
            >
              <h2 className="text-3xl font-bold mx-3">Send a message</h2>
              <div className="flex mt-[30px]">
                <styled.FormItemMessages
                  name="name"
                  label="Your Name"
                  rules={[
                    {
                      required: true,
                      message: "Name is required",
                    },
                  ]}
                  style={{
                    width: "50%",
                    padding: "0 12px",
                  }}
                >
                  <Input
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      boxShadow:
                        "0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)",
                      borderRadius: "12px",
                    }}
                    placeholder="Your Name*"
                  />
                </styled.FormItemMessages>

                <styled.FormItemMessages
                  name="phone"
                  label="Your Phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                  style={{
                    width: "50%",
                    padding: "0 12px",
                  }}
                >
                  <Input
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      boxShadow:
                        "0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)",
                      borderRadius: "12px",
                    }}
                    placeholder="Your Phone"
                  />
                </styled.FormItemMessages>
              </div>

              <styled.FormItemMessages
                name="email"
                label="Email -(*)"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
                style={{
                  padding: "0 12px",
                }}
              >
                <Input
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    boxShadow:
                      "0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)",
                    borderRadius: "12px",
                  }}
                  placeholder="Your Name*"
                />
              </styled.FormItemMessages>

              <styled.FormItemMessages
                name="content"
                label="Message"
                style={{
                  padding: "0 12px",
                }}
              >
                <Input.TextArea
                  placeholder="Message"
                  rows={7}
                  style={{
                    boxShadow:
                      "0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)",
                  }}
                />
              </styled.FormItemMessages>

              <Button
                style={{
                  width: "100%",
                  height: "unset",
                  padding: "15px",
                  color: "#fff",
                  backgroundColor: "#3B71FE",
                  borderRadius: "50px",
                  fontWeight: "700",
                }}
                htmlType="submit"
              >
                Send Messages
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
