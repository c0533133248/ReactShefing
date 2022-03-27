
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Table, Space, Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import actions from '../redux/Action';
import { useHistory } from 'react-router-dom';


export default function HomePage() {

  const listData = useSelector(state => state.lists.listData)
  const [userList, setUserList] = useState("")
  const dispatch = useDispatch()
  const history = useHistory();

  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );


  useEffect(() => {
    setUserList(listData)
  }, [listData])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Company Name',
      key: 'companyName',
      render: (user) => (
        <Space size="middle">
          <a>{user.company.name}</a>
        </Space>
      ),
    },
  ];

  const onSearch = (value) => {
    try {
      if (value === "")
        setUserList(listData)
      else {
        let resultSearch = listData.filter((user) => user.name.toLowerCase().includes(value) ||
          user.email.toLowerCase().includes(value))
        setUserList(resultSearch)
      }
    }
    catch (error) {
      console.log(error)
    }
}


const showUserPosts = (user) => {
  history.push("/listPosts")
  dispatch(actions.setUser(user))
}



return (
  <div style={{ paddingTop: 30 }}>
    <h2 style={{ textAlign: 'center', color: 'lightblue' }}>User List</h2>
    <Space direction="vertical">
      <Search placeholder="input search name or email" onSearch={onSearch} style={{ width: 240, marginLeft: 20 }} />
    </Space>
    <div style={{ paddingTop: 30 }} className="table">
      <Table  onRow={(record) => {
        return {
          onClick: event => { showUserPosts(record) }, // click row
        };
      }}
        pagination={{ pageSize: 5 }} dataSource={userList} columns={columns} />
    </div>
  </div >
)
}
