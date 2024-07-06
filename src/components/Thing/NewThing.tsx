'use client';

import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Upload } from 'antd';
import { ThingType } from '../../interfaces/thingz';
import ThingTypeInput from './ThingTypeInput';
import { PlusOutlined } from '@ant-design/icons';
}


type FieldType = {
  id: string;
  type: ThingType;
  title: string;
  img: string;
  tags: string[];
};
interface INewThingProps {}
const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function NewThing() {
   const [state, setState] = useState();
   return (
       <div>
           <h1>NewThing</h1>
           <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="ID"
      name="id"
      rules={[{ required: true, message: 'Thing ID is required!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Thing Type"
      name="type"
      rules={[{ required: true, message: 'Please select thing type!' }]}
    >
      <ThingTypeInput />
    </Form.Item>

    <Form.Item<FieldType>
      label="Title"
      name="title"
      rules={[{ required: true, message: 'Please input your title!' }}
    >
      <Input />
    </Form.Item>
<Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Save
      </Button>
    </Form.Item>
  </Form>
       </div>
   );
}