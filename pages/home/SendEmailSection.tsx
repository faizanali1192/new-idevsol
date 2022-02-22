import { Row, Col } from "antd";
import * as React from "react";
import CustomInputGroup from "../../Views/common/custom-input-group/CustomInputGroup";
import styles from "./Home.module.scss";
interface SendEmailSectionProps {}

const SendEmailSection: React.FunctionComponent<SendEmailSectionProps> = (
 props
) => {
 return (
  <div className={styles["email-section"]}>
   <div className='container-xl'>
    <Row justify='space-between' align='middle' gutter={[12, 24]}>
     <Col xs={24} sm={6}>
      <div className={styles["mob-email"]}>
       <h5 className={styles["wants-more"]}>Want to know more?</h5>
       <h3 className={styles["send-email"]}>Send us a mail</h3>
      </div>
     </Col>
     <Col xs={24} sm={10}>
      <CustomInputGroup />
     </Col>
    </Row>
   </div>
  </div>
 );
};

export default SendEmailSection;
