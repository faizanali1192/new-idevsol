import * as React from "react";
import { Row, Col, Space } from "antd";
import styles from "./Home.module.scss";
import GoalImg from "../../public/images/goal-img.png";
import ABC from "../../public/images/quote.svg";
import readMore from "../../public/images/readMore-arrow.svg";
import rightRock from "../../public/images/right-rock.png";
import Link from "next/link";
import Image from "next/image";
type Props = {
  homePageGoalTitle: string;
  homePageGoalDescription: any;
  homePageGoalImage: any;
};
const OurGoalSection = (props: Props) => {
  return (
    <div className={styles["our-goal-section"]}>
      <div id={styles["right-rock"]}>
        <Image
          src={rightRock}
          alt=""
          height="100"
          width="100"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="container-xl">
        <h2 className={styles["our-goal"]}>OUR GOAL</h2>
        <div className={styles["goal-data"]}>
          <Row justify="space-around" align="middle" gutter={[24, 32]}>
            <Col xs={24} sm={12} md={8}>
              <Image
                src={
                  props.homePageGoalImage ? props.homePageGoalImage : GoalImg
                }
                alt=""
                className={styles["goal-Image"]}
                height="100"
                width="100"
                layout="responsive"
                objectFit="contain"
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <h2 className={styles["organization-title"]}>
                {props.homePageGoalTitle}
              </h2>
              <p className={styles["description-text"]}>
                {props.homePageGoalDescription}
              </p>
              <Space>
                <div className={styles["read-more"]}></div>
                <Link href="">
                  <a className={styles["read-more-link"]}>
                    <Space style={{ width: "max-content" }}>
                      <span>View More</span>
                      <Image
                        src={readMore}
                        alt="Read More"
                        height="100"
                        width="100"
                        layout="responsive"
                        objectFit="contain"
                      />
                    </Space>
                  </a>
                </Link>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default OurGoalSection;
