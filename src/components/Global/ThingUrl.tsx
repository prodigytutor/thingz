import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Cascader, Input, Select, Space } from 'antd';

const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com">
    <Option value=".com">.com</Option>
    <Option value=".cloud">.cloud</Option>
    <Option value=".online">.online</Option>
    <Option value=".net">.net</Option>
    <Option value=".org">.org</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

const ThingUrl: React.FC = () => (
  <Space direction="vertical">

    <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
    
  </Space>
);

export default ThingUrl;