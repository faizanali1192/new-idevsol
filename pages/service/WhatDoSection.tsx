import { Row, Col, Space } from "antd";
import * as React from "react";
import styles from "./Service.module.scss";
import rightArrow from "../../public/images/right-arrow.png";
import arrowLeft from "../../public/images/left-arrow.png";
import Image from "next/image";
type Props = {
  bestDescription?: string;
  blogs?: any;
};

const WhatDoSection = (props: Props) => {
  console.log("88888", props.blogs);
  return (
    <>
      <div className={styles["do-best-section"]}>
        <div className={styles["arrow-left"]}>
          <Image
            src={arrowLeft}
            alt=""
            height="100"
            width="100"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="container-xl">
          <Row justify="center">
            <Col xs={24} sm={15} md={12} style={{ marginTop: "20px" }}>
              <div className="text-center">
                <h2 className={styles["styled-title"]}>What we do Best</h2>
              </div>
              <p className={styles["best-text"]}>{props.bestDescription}</p>
            </Col>
          </Row>
          <div className={styles["developmet"]}>
            <Row justify="space-around" align="middle" gutter={[24, 32]}>
              <Col xs={24} sm={8}>
                <Image
                  className="img-fluid"
                  src={props.blogs[0]?.image?.data?.attributes?.url}
                  alt=""
                  height="100"
                  width="100"
                  layout="responsive"
                  objectFit="contain"
                />
              </Col>
              <Col xs={24} sm={8}>
                <h2 className={styles["service-title"]}>
                  {props.blogs[0]?.title}
                </h2>
                <p className={styles["service-text"]}>
                  {props.blogs[0]?.description}
                </p>
                <Space direction="vertical">
                  {props.blogs[0]?.points?.map((item: any, index: number) => (
                    <Space direction="horizontal" key={index}>
                      <div className="service"></div>
                      <span>{item?.point}</span>
                    </Space>
                  ))}
                </Space>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles["right-arrow"]}>
          <Image
            src={rightArrow}
            alt=""
            height="100"
            width="100"
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles["design-service-section"]}>
        <div className="container-xl">
          <Row justify="space-around" align="middle" gutter={[24, 32]}>
            <Col xs={{ span: 24, order: 2 }} sm={8}>
              <h2 className={styles["service-title"]}>
                {" "}
                {props.blogs[1]?.title}
              </h2>
              <p className={styles["service-text"]}>
                {props.blogs[1]?.description}
              </p>
              <Space direction="vertical">
                {props.blogs[0]?.points?.map((item: any, index: number) => (
                  <Space direction="horizontal" key={index}>
                    <div className="service"></div>
                    <span>{item?.point}</span>
                  </Space>
                ))}
              </Space>
            </Col>
            <Col xs={{ span: 24, order: 1 }} sm={8}>
              <Image
                className="img-fluid"
                src={props.blogs[1]?.image?.data?.attributes?.url}
                alt=""
                height="100"
                width="100"
                layout="responsive"
                objectFit="contain"
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles["Devops-serice-section"]}>
        <div className={styles["arrow-left"]}>
          <Image
            src={arrowLeft}
            alt=""
            height="100"
            width="100"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="container-xl">
          <Row justify="space-around" align="middle" gutter={[24, 32]}>
            <Col xs={24} sm={8}>
              <Image
                className="img-fluid"
                src={props.blogs[2]?.image?.data?.attributes?.url}
                alt=""
                height="100"
                width="100"
                layout="responsive"
                objectFit="contain"
              />
            </Col>
            <Col xs={24} sm={8}>
              <h2 className={styles["service-title"]}>
                {props.blogs[2]?.title}
              </h2>
              <p className={styles["service-text"]}>
                {props.blogs[2]?.description}
              </p>
              <Space direction="vertical">
                {props.blogs[2]?.points?.map((item: any, index: number) => (
                  <Space direction="horizontal" key={index}>
                    <div className="service"></div>
                    <span>{item?.point}</span>
                  </Space>
                ))}
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default WhatDoSection;
