import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

const ThingType: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value="Text">Text</Radio>
      <Radio value="Password">Passord</Radio>
      <Radio value="Url">URL</Radio>
      <Radio value="Date">Date</Radio>
    </Radio.Group>
  );
};

export default ThingType;