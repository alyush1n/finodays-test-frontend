import React from 'react';
import {Select} from "antd";

const {Option} = Select;

const SelectView = (props) => {
    // console.log(props.values)
    return (
        <Select
            style={{width: "210px"}}
            showSearch
            placeholder={props.placeholder}
            optionFilterProp="children"
            onSelect={(value)=>props.select(props.type,value)}
            >
            {props.values.map(v => (
                <Option value={v.en ? v.en : v} key={v.en ? v.en : v}>{v.ru ? v.ru : v}</Option>
            ))}
            
        </Select>
    );
};

export default SelectView;