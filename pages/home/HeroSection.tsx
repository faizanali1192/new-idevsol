import React from "react";
import { Row, Col, Space } from "antd";
import styles from "./Home.module.scss";
import heroSectionImage from "../../public/images/hero-section.png";

import CustomButton from "../../Views/common/custom-button/CustomButton";
import Image from "next/image";
type Props = {
  heroTitle: string;
  heroDescription: string;
};
export default function HeroSection(props: Props) {
  return (
    <div className="container-xl">
      <div className={styles["hero-section"]}>
        <Row>
          <Col xs={24} sm={12}>
            <h1 className={styles["page-title"]}>{props.heroTitle}</h1>
            <p className={styles["description-text"]}>
              {props.heroDescription}
            </p>
            <div className={styles["hero-section-btn"]}>
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
          <div className={styles["section-bg"]}>
            <Image
              src={heroSectionImage}
              alt="Hero Image"
              // height="100"
              // width="100"
              // layout="responsive"
              // objectFit="contain"
            />
          </div>
        </Row>
      </div>
    </div>
  );
}
