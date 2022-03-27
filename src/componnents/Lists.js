import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { List, Avatar, Button, Modal } from 'antd';
import FormPost from './FormPost';
import { useHistory } from 'react-router-dom';



export default function Lists(props) {

    const posts = useSelector(state => state.lists.posts)
    const user = useSelector(state => state.lists.selectedUser)
    const [userPosts, SetUserPosts] = useState("")

    const history = useHistory()

    useEffect(() => {
        let resPost = posts.filter((post) => post.userId === user.id)
        SetUserPosts(resPost)
    }, [user, posts])


    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const onCancle = () => {
        setIsModalVisible(false);
    };


    return (
        <>
            <h3 style={{marginLeft:'1vh',color:'lightblue'}}>Hi {user.name}, Here you have posts</h3>
            <List
                itemLayout="horizontal"
                dataSource={userPosts}
                renderItem={post => (
                    <List.Item>
                        <List.Item.Meta
                            key={post.id}
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a href="https://ant.design">{post.title}</a>}
                            description={post.body}
                        />
                    </List.Item>
                )}
            />
            <div style={{textAlign:'center'}}>
                <Button type="primary" onClick={showModal}>
                    Add Post
      </Button>  <Button type="primary" onClick={() => history.push("/")}>
                    Back
      </Button>
                <Modal title="Enter ditails for new post" visible={isModalVisible} onCancel={onCancle} footer={null}>
                    <FormPost closeDialog={handleOk} />
                </Modal>
            </div>


        </>

    )

}
