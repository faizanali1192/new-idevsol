import * as React from "react";
import { Row, Col, Space } from "antd";
import CustomButton from "../../Views/common/custom-button/CustomButton";
import styles from "./ContactUs.module.scss";
import Image from "next/image";
type Props = {
  heroDescription?: String;
  heroImage?: any;
};

const ContactSection = (props: Props) => {
  return (
    <div className={styles["contact-section"]}>
      <div className="container-xl">
        <Row justify="space-between" align="middle" gutter={[24, 32]}>
          <Col xs={24} sm={12} md={12}>
            <div className={styles["text-left"]}>
              <h1 className={styles["styled-title"]}>Work With Us</h1>
            </div>
            <p className={styles["description-text"]}>
              {props.heroDescription}
            </p>
            <div className={styles["service-section-btn"]}>
              <Space size={20}>
                <CustomButton className="contact-us-btn">
                  Contact Us
                </CustomButton>
                <CustomButton className="service-btn">
                  Our Services
                </CustomButton>
              </Space>
            </div>
          </Col>
          <Col xs={24} sm={12} md={10}>
            <Image
              className="img-fluid"
              src={props.heroImage?.data?.attributes?.url}
              alt="IDevSol Services"
              height="100"
              width="100"
              layout="responsive"
              objectFit="contain"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactSection;
