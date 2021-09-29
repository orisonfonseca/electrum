import { Modal } from "antd";
import React from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import listAction from "../../Redux/Action/listAction";

const ModalDisplay = ({ isEdit, formData, isModalVisible, setModal, clearData }) => {

  const dispatch = useDispatch();

  const onFinish = (values) => {
    const data = {
      first_name: values.user.first,
      last_name: values.user.last,
      email: values.user.email,
    };
    if(isEdit){
      dispatch(listAction.editListItems(data));
      clearData();
    }else{
      dispatch(listAction.addListItems(data, formData.id));
    }
    setModal();
    
  };

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

  return (
    <Modal
      visible={isModalVisible}
      onOk={setModal}
      onCancel={setModal}
      title={formData? 'Edit User': 'Add User'}
    >
      <Form
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        {...formItemLayout}
      >
      <Form.Item
          initialValue={formData.first_name}
          name={["user", "first"]}
          label="First Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          initialValue={formData.last_name}
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
          initialValue={formData.email}
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
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 80
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        </Form>
    </Modal>
  );
};
export default ModalDisplay;