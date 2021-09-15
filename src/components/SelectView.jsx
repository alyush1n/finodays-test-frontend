import React from 'react';
import {Select} from "antd";

const {Option} = Select;

const SelectView = (props) => {
    return (
        <Select
            style={{width: "210px"}}
            showSearch
            placeholder={props.placeholder}
            optionFilterProp="children">
            <Option value="123">123</Option>
        </Select>
    );
};

export default SelectView;