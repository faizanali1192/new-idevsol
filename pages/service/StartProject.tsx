import * as React from "react";
import { Avatar, Col, Row } from "antd";
import styles from "./Service.module.scss";
import CustomCard from "../../Views/common/custom-card/CustomCard";
type Props = {
 companyDetails?: any;
};

const StartProject = (props: Props) => {
 return (
  <div className={styles["start-project-section"]}>
   <div className='container-xl'>
    <div className='text-center'>
     <h2 className={styles["styled-title"]}>Let’s Start Your Project</h2>
    </div>
    <div className={styles["card-div"]}>
     <Row align='middle' justify='center' id='serviceRow'>
      {props.companyDetails?.map((item: any, index: number) => (
       <Col key={index}>
        <CustomCard className='service-card'>
         <div className='text-center'>
          <Avatar
           src={item?.image?.data?.attributes?.url}
           shape='circle'
           size='large'
          />
          <div className={styles["price"]}>{item.title}</div>
          <span className={styles["happy-text"]}>{item.description}</span>
         </div>
        </CustomCard>
       </Col>
      ))}
     </Row>
    </div>
   </div>
  </div>
 );
};

export default StartProject;
