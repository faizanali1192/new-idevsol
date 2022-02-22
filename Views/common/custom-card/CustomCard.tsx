import * as React from "react";
import { Card } from "antd";
import "./CustomCard.module.scss";

interface CustomCardProps {
  children: React.ReactNode;
  className?: string;
}

const CustomCard: React.FunctionComponent<CustomCardProps> = (props) => {
  return (
    <Card bordered={false} className={props.className}>
      {props.children}
    </Card>
  );
};

export default CustomCard;
