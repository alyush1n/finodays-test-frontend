import React from 'react';
import {Select} from "antd";

const {Option} = Select;

const SelectView = (props) => {
    console.log(props.values)
    return (
        <Select
            style={{width: "210px"}}
            showSearch
            placeholder={props.placeholder}
            optionFilterProp="children">
            {props.values.map(v => (
                <Option value={v}>{v}</Option>
            ))}
        </Select>
    );
};

export default SelectView;