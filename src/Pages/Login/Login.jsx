import React from "react";
import { Form, Input, Button, Alert} from "antd";
import CardWrapper from '../../components/Card/CardWrapper';
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import authAction from "../../Redux/Action/authAction";

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

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

export default function Login() {

  const { errorMessage, successMessage } = useSelector((state) => state.loading);

  const history = useHistory();
  const dispatch = useDispatch();


  const onFinish = (values) => {
   const data = {
      password: values.password,
      email: values.user.email,
    }
    dispatch(authAction.login(data, history))

  };

  return (
    <CardWrapper title="Login">
        {errorMessage || successMessage ? <Alert message={errorMessage || successMessage} type={successMessage?"success": "error"} />: null}
      <Form
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        {...formItemLayout}
      >
        
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
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
        
        <Form.Item style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <NavLink to='/signUp'>Register</NavLink>
    </CardWrapper>
  );
}
