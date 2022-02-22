import * as React from "react";
import { Col, Row, Space } from "antd";
import styles from "./AboutUs.module.scss";
import Link from "next/link";
import readMore from "../../public/images/readMore-arrow.svg";
import Image from "next/image";
type Props = {
  workTitle?: string;
  workDescription?: string;
  workImage: any;
};

const WorkSection = (props: Props) => {
  return (
    <div className={styles["work-section"]}>
      <div className="container-xl">
        <div className="text-center">
          <h2 className={styles["styled-title"]}>Work</h2>
        </div>
        <div className={styles["work-div"]}>
          <Row justify="space-around" align="middle" gutter={[24, 32]}>
            <Col xs={24} sm={6}>
              <Image
                className="img-fluid"
                src={props.workImage?.data?.attributes?.url}
                alt=""
                height="100"
                width="100"
                layout="responsive"
                objectFit="contain"
              />
            </Col>
            <Col xs={24} sm={10}>
              <h2 className={styles["recent-project"]}>{props.workTitle}</h2>
              <p className={styles["project-text"]}>{props.workDescription}</p>
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

export default WorkSection;
