
import { message, DatePicker } from 'antd';
import React, { useState } from 'react'

const useComponent = (number: number) => {
  if (number % 2 === 1) {
    return Test;
  } else {
    return Test1
  }
}

export const Test = () => {
  // const { DatePicker } = import('antd')
  const [date, setDate] = useState(null);

  const handleChange = (value) => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  };
  return (
    <div>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
          当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
        </div>
    </div>
  )
}

export const Test1 = () => {
  const test = '';

  return (
    <div>
      <div>
        {test}
      </div>
      test
    </div>
  )
}

export default useComponent;
