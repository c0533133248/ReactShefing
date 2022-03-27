import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/Action';

export default function FormPost(props) {

    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const posts = useSelector(state => state.lists.posts)
    const user = useSelector(state => state.lists.selectedUser)

    const onFinish = (values) => {
        const post = {
            "userId": user.id,
            "id": posts[posts.length - 1].id + 1,
            "title": values.title,
            "body": values.body
        };
        form.resetFields();
        dispatch(actions.setNewPost(post))
        props.closeDialog()

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>

            <Form
                form={form}
                name="basic"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ title: '', body: '' }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input your title!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Body"
                    name="body"
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
        </>
    )
}
