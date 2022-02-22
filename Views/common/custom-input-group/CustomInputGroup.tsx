import { Input, Button } from "antd";
import * as React from "react";
import "./CustomInputGroup.module.scss";

interface CustomInputGroupProps {}

const CustomInputGroup: React.FunctionComponent<CustomInputGroupProps> = (
 props
) => {
 return (
  <Input.Group compact className='sendEmail'>
   <Input style={{ width: "calc(100% - 90px)" }} />
   <Button>Send</Button>
  </Input.Group>
 );
};

export default CustomInputGroup;
