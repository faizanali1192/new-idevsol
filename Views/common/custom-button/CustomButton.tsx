import { Button } from "antd";
import * as React from "react";
import "./CustomButton.module.scss";
interface CustomButtonProps {
 htmlType?: "button" | "submit" | "reset";
 className?: string;
 children: React.ReactNode;
 type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed";
 onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const CustomButton: React.FunctionComponent<CustomButtonProps> = (props) => {
 return (
  <Button
   className={props.className}
   htmlType={props.htmlType}
   type={props.type}
   onClick={props.onClick}
  >
   {props.children}
  </Button>
 );
};

export default CustomButton;
