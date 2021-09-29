import React, { useEffect, useState } from "react";
import { Table, Button, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import listAction from "../../Redux/Action/listAction";
import ModalDisplay from "./Modal";

export default function TableList() {
  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      render: (text, record) => {
        return (
          <img
            style={{ width: 65, height: 65, borderRadius: 65 / 2 }}
            src={record.avatar}
          />
        );
      },
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record, id, email) => {
        return (
          <div>
            <Button onClick={setModal} type="primary">
              Add User
            </Button>{" "}
            <a onClick={() => onEdit(record)} danger>
              Edit User
            </a>
          </div>
        );
      },
    },
  ];
  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState('');
  const [isEdit, setEdit] = useState(false);


  const { list } = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(listAction.getListItems(1));
  }, []);

  const onPageChange = (value) => {
    dispatch(listAction.getListItems(value));
  };

  const setModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onEdit = async (value) => {
    await setFormData(value)
    setEdit(true)
    setModal();
  };

  const clearData = () => {
    setFormData('')
    setEdit(false)
  }

  return (
    <div>
      <Table
        onRowClick={onEdit}
        dataSource={list && list.length > 0 ? list : null}
        columns={columns}
        pagination={false}
      />
      ;
      <Pagination defaultCurrent={1} total={12} onChange={onPageChange} />
      <ModalDisplay isEdit={isEdit} formData={formData} isModalVisible={isModalVisible} setModal={setModal} clearData={clearData} />
    </div>
  );
}
