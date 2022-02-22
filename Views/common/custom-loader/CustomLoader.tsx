import * as React from "react";
import { Spin } from "antd";
import "./CustomLoader.module.scss";
interface CustomLoaderProps {}

const CustomLoader: React.FunctionComponent<CustomLoaderProps> = (props) => {
 return (
  <div className='custom-loader'>
   <Spin size='large' tip='Loading...' />
  </div>
 );
};

export default CustomLoader;
