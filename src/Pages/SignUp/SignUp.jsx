import React from "react";
import { Form, Input, Button, Alert } from "antd";
import CardWrapper from "../../components/Card/CardWrapper";
import { useDispatch, useSelector } from "react-redux";
import authAction from "../../Redux/Action/authAction";
import { NavLink } from "react-router-dom";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

export default function SignUp() {
  const dispatch = useDispatch();
  const { errorMessage, successMessage } = useSelector((state) => state.loading);

  const onFinish = (values) => {
    const data = {
      firstName: values.user.first,
      lastName: values.user.last,
      email: values.user.email,
      userName: values.user.user,
      password: values.password,
    };
    dispatch(authAction.register(data));
  };

  return (
    <CardWrapper title="Sign Up">
      {errorMessage || successMessage ? <Alert message={errorMessage || successMessage} type={successMessage?"success": "error"} />: null}
      <Form
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        {...formItemLayout}
      >
        <Form.Item
          name={["user", "first"]}
          label=" First Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "last"]}
          label=" Last Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "user"]}
          label="User Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <NavLink to="/">Login</NavLink>
      </Form>
    </CardWrapper>
  );
}
