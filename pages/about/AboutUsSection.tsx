import * as React from "react";
import { Col, Row, Space } from "antd";
import CustomButton from "../../Views/common/custom-button/CustomButton";
import styles from "./AboutUs.module.scss";
import Image from "next/image";
type Props = {
  heroDescription?: string;
  heroImage?: any;
};

const AboutUsSection = (props: Props) => {
  return (
    <div className={styles["about-us-section"]}>
      <div className="container-xl">
        <Row justify="space-between" align="middle" gutter={[24, 32]}>
          <Col xs={24} sm={12} md={12}>
            <h1 className={styles["styled-title"]}>About Us</h1>
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
            <div className={"image-container"}>
              <Image
                src={props.heroImage?.data?.attributes?.url}
                className="img-fluid"
                alt="IDevSol Services"
                height="80"
                width="100"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUsSection;
