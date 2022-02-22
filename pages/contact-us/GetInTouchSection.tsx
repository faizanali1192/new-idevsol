import { Col, Input, Row } from "antd";
import * as React from "react";
import CustomButton from "../../Views/common/custom-button/CustomButton";
import CustomInput from "../../Views/common/custom-input/CustomInput";
import styles from "./ContactUs.module.scss";
interface GetInTouchSectionProps {}

const GetInTouchSection: React.FunctionComponent<GetInTouchSectionProps> = (
  props
) => {
  const { TextArea } = Input;
  return (
    <div className={styles["get-touch"]}>
      <div className="container-xl">
        <Row justify="center">
          <Col xs={24} sm={16} md={14}>
            <div className="text-center">
              <h2 className={styles["styled-title"]}>Get In Touch With us</h2>
            </div>
            <div className={styles["form-div"]}>
              <form action="">
                <div className={styles["form-control"]}>
                  <Row gutter={24}>
                    <Col xs={24} sm={12}>
                      <label className="custom-label" htmlFor="firstName">
                        First Name
                      </label>
                      <CustomInput id="firstName" type="text" />
                    </Col>
                    <Col xs={24} sm={12}>
                      <label className="custom-label" htmlFor="lastName">
                        Last Name
                      </label>
                      <CustomInput id="lastName" type="text" />
                    </Col>
                  </Row>
                </div>
                <div className={styles["form-control"]}>
                  <label className="custom-label" htmlFor="email">
                    Email
                  </label>
                  <CustomInput id="email" type="email" />
                </div>
                <div className={styles["form-control"]}>
                  <label className="custom-label" htmlFor="message">
                    Message
                  </label>
                  <TextArea id="message" className="custom-textArea" rows={6} />
                </div>
                <div className={styles["btn-div"]}>
                  <CustomButton className="header-contact-us-btn">
                    Get Started
                  </CustomButton>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GetInTouchSection;
