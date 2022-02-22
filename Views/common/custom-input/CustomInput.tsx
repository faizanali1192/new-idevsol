import * as React from "react";
import { Input } from "antd";
import "./CustomInput.module.scss";

interface CustomInputProps {
 id: string;
 type: string;
}

const CustomInput: React.FunctionComponent<CustomInputProps> = (props) => {
 return <Input className='custom-input' id={props.id} type={props.type} />;
};

export default CustomInput;
