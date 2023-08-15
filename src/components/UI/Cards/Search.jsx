import React from 'react'
import { Input, Button , Space , Select } from 'antd';
const Search = () => {
  return (
    <Space wrap className='border-2 rounded-md border-blue-700 overflow-hidden'>
      <Input className='bg-[#F7FAFC] w-[421px] h-[40px] border-e-blue-500 rounded-none placeholder: text-[16px] font-medium' placeholder="Search" />
      <Select
        defaultValue="All category"
        style={{ width: 120}}
        bordered = {false}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
          
        ]} 
      />
      <Button className=' w-[100px] h-[42px] bg-blue-700 overflow-hidden rounded-none' type="primary">Search</Button>
    </Space>
  )
}

export default Search;