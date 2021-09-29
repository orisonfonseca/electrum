import React from "react";
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import authAction from "../../Redux/Action/authAction";
import { useHistory } from 'react-router-dom'

export default function HeaderPlate() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(authAction.logout(history))
  }

  return (
    <div>
      <p style={{color: 'white', float: 'right'}}>{user && user[0].userName ?user[0].userName:null}</p>
      <Button
            type="danger"
            icon={<PoweroffOutlined />}
            style={{float: 'left', marginTop: 15}}
            onClick={logout}
          />
    </div>
  );
}
