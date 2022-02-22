import * as React from "react";
import { Col, Row, Space } from "antd";
import styles from "./Career.module.scss";
import fastGrow from "../../public/images/fast-grow.png";
import Link from "next/link";
import readMore from "../../public/images/readMore-arrow.svg";
import Image from "next/image";
type Props = {
  joinUs: any;
};
const WhyJoinUs = (props: Props) => {
  return (
    <div className={styles["why-join-us"]}>
      <div className="container-xl">
        <div className="text-center">
          <h2 className={styles["styled-title"]}>Why Join Us</h2>
        </div>
        <div className={styles["join-div"]}>
          <Row justify="space-between" gutter={[24, 32]}>
            {props.joinUs?.map((item: any, index: number) => {
              return (
                <Col xs={24} sm={12} key={index}>
                  <Space direction="vertical" size={32}>
                    <Space size={20} align="start">
                      <Image
                        src={item?.image?.data?.attributes?.url}
                        alt=""
                        height="100"
                        width="100"
                        layout="responsive"
                        objectFit="contain"
                      />
                      <div>
                        <h5 className={styles["join-title"]}>{item.title}</h5>
                        <p className={styles["join-text"]}>
                          {item.description}
                        </p>
                      </div>
                    </Space>
                  </Space>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="text-center">
          <Space>
            <div className={styles["read-more"]}></div>
            <Link href="">
              <a className={styles["read-more-link"]}>
                <Space style={{ width: "max-content" }}>
                  <span>View Open Positions</span>
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
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;
