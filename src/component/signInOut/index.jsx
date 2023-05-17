import { Button, Checkbox, Form, Input, RadioChangeEvent } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import UserSvg from "../../assets/svgs/user.svg";
import FacebookSvg from "../../assets/svgs/facebook.svg";
import GoogleSvg from "../../assets/svgs/google.svg";
import TwitterSvg from "../../assets/svgs/twitter.svg";
import { Radio } from "antd";
import * as styled from "./style.js";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [keyboard, setKeyboard] = useState(true);
  const [isSignIn, setIsSignIn] = useState(true);
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <styled.ButtonCustom type="primary" onClick={showModal}>
        <img className="w-5" src={UserSvg} alt="" />
      </styled.ButtonCustom>
      <styled.ModalCustom open={isModalOpen}>
        <button
          className="ant-modal-close"
          onClick={() => {
            setIsModalOpen(false);
          }}
        ></button>
        <styled.SignInOut
          isSignIn={isSignIn}
          className="center mb-[25px] px-[30px] pb-[25px] text-center border-b border-solid border-[#dedede]"
        >
          <button onClick={() => setIsSignIn(true)} className="mx-5" to="">
            Sign in
          </button>
          <button onClick={() => setIsSignIn(false)} className="mx-5" to="">
            Sign up
          </button>
        </styled.SignInOut>
        {isSignIn ? (
          <styled.FormCustom
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h2 className="font-bold text-[26px] mb-[30px]">
              Sign in to your account
            </h2>
            <styled.FormItemCustom
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              placeholder="Email or username"
            >
              <Input placeholder="Email or UserName" />
            </styled.FormItemCustom>

            <styled.FormItemCustom
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              placeholder="Password"
            >
              <Input.Password placeholder="Password" />
            </styled.FormItemCustom>

            <styled.FormItemCustom
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <styled.ButtonCreateCustom type="primary" htmlType="submit">
                Submit
              </styled.ButtonCreateCustom>
            </styled.FormItemCustom>

            <styled.FormItemCustom
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
              <a className="ml-auto font-medium underline" href="">
                Forgot Password?
              </a>
            </styled.FormItemCustom>
            <div className="w-full">
              <styled.StyledSpan>
                <span className="text-gray z-[2] relative">
                  or sign in with
                </span>
              </styled.StyledSpan>

              <div className="border border-solid border-[#83929d] rounded-[10px] mb-5">
                <a className="flex px-4 py-2.5">
                  <img className="w-5" src={FacebookSvg} alt=".." />
                  <span className="mx-auto block font-medium">
                    Sign in with Facebook
                  </span>
                </a>
              </div>

              <div className="border border-solid border-[#83929d] rounded-[10px] mb-5">
                <a className="flex px-4 py-2.5">
                  <img className="w-5" src={GoogleSvg} alt=".." />
                  <span className="mx-auto block font-medium">
                    Sign in with Google
                  </span>
                </a>
              </div>

              <div className="border border-solid border-[#83929d] rounded-[10px] mb-5">
                <a className="flex px-4 py-2.5">
                  <img className="w-5" src={TwitterSvg} alt="." />
                  <span className="mx-auto block font-medium">
                    Continue with Twitter
                  </span>
                </a>
              </div>
            </div>

            <div className="block text-center">
              <button
                onClick={() => setIsSignIn(false)}
                className="text-primary font-medium underline"
              >
                Create an account
              </button>
            </div>
          </styled.FormCustom>
        ) : (
          <styled.FormCustom
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h2 className="font-bold text-[26px] mb-[30px]">
              Sign in to your account
            </h2>
            <styled.FormItemCustom
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              placeholder="Username"
            >
              <Input placeholder="Email or UserName" />
            </styled.FormItemCustom>

            <styled.FormItemCustom
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              placeholder="Email or username"
            >
              <Input placeholder="Password" />
            </styled.FormItemCustom>

            <styled.FormItemCustom
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              placeholder="Email or username"
            >
              <Input placeholder="Email or UserName" />
            </styled.FormItemCustom>

            <styled.FormItemCustom
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              placeholder="Password"
            >
              <Input.Password placeholder="Password" />
            </styled.FormItemCustom>

            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Normal User</Radio>
              <Radio value={2}>Partner User</Radio>
            </Radio.Group>

            <div className="mb-4 w-full"></div>
            <styled.FormItemCustom
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <styled.ButtonCreateCustom type="primary" htmlType="submit">
                Submit
              </styled.ButtonCreateCustom>
            </styled.FormItemCustom>

            <Checkbox
              onChange={() => {
                setKeyboard(!keyboard);
              }}
              checked={keyboard}
            >
              I confirm that I have read and accepted the
              <a href="#" className="text-primary ml-1">
                privacy policy
              </a>
            </Checkbox>
            <div className="mt-4 w-full"></div>
            <div className="w-full">
              <styled.StyledSpan>
                <span className="text-gray z-[2] relative">
                  or sign in with
                </span>
              </styled.StyledSpan>

              <div className="border border-solid border-[#83929d] rounded-[10px] mb-5">
                <a className="flex px-4 py-2.5">
                  <img className="w-5" src={FacebookSvg} alt=".." />
                  <span className="mx-auto block font-medium">
                    Sign in with Facebook
                  </span>
                </a>
              </div>

              <div className="border border-solid border-[#83929d] rounded-[10px] mb-5">
                <a className="flex px-4 py-2.5">
                  <img className="w-5" src={GoogleSvg} alt=".." />
                  <span className="mx-auto block font-medium">
                    Sign in with Google
                  </span>
                </a>
              </div>

              <div className="border border-solid border-[#83929d] rounded-[10px] mb-5">
                <a className="flex px-4 py-2.5">
                  <img className="w-5" src={TwitterSvg} alt="." />
                  <span className="mx-auto block font-medium">
                    Continue with Twitter
                  </span>
                </a>
              </div>
            </div>
          </styled.FormCustom>
        )}
      </styled.ModalCustom>
    </>
  );
};
export default App;
