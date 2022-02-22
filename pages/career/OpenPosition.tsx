import { Col, Row } from "antd";
import * as React from "react";
import CustomList from "../../Views/common/custom-list/CustomList";
import styles from "./Career.module.scss";
type Props = {
 openPositions: any;
};

const OpenPosition = (props: Props) => {
 const data: any[] = [];
 props.openPositions.map((item: any) => {
  data.push(item);
 });
 return (
  <div className={styles["open-position-section"]}>
   <div className='container-xl'>
    <div className='text-center'>
     <h2 className={styles["styled-title"]}>Open Positions</h2>
    </div>
    <div className={styles["jobs-div"]}>
     <Row justify='center'>
      <Col xs={24} sm={20} md={15}>
       <CustomList data={data} />
      </Col>
     </Row>
    </div>
   </div>
  </div>
 );
};

export default OpenPosition;
