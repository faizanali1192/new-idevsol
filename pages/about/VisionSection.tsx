import * as React from "react";
import { Avatar, Col, Row, Space } from "antd";
import styles from "./AboutUs.module.scss";
import vision from "../../public/images/goal-img.png";
import CustomCard from "../../Views/common/custom-card/CustomCard";
import Image from "next/image";
type Props = {
  blog: any;
  philosophy: any;
};

const VisionSection = (props: Props) => {
  return (
    <div className={styles["vision-section"]}>
      <div className="container-xl">
        <Row align="middle" justify="space-around" gutter={[24, 32]}>
          <Col xs={24} sm={8}>
            <Image
              className="img-fluid"
              src={vision}
              alt="IdevSol vision"
              height="100"
              width="100"
              layout="responsive"
              objectFit="contain"
            />
          </Col>
          <Col xs={24} sm={8}>
            <div className={styles["text-left"]}>
              <h2 className={styles["styled-title"]}>
                {props.blog?.blogTitle}
              </h2>
            </div>
            <p className={styles["vision-text"]}>
              {props.blog?.blogDescription}
            </p>
            <Space direction="vertical" size={24}>
              {props.blog?.blogList?.map((item: any, index: number) => {
                return (
                  <Space align="start" size={24} key={index}>
                    <Avatar
                      src={item?.image?.data?.attributes?.url}
                      shape="square"
                      size="large"
                    />
                    <div>
                      <h5 className={styles["flexible-title"]}>{item.title}</h5>
                      <p className={styles["flex-text"]}>{item.description}</p>
                    </div>
                  </Space>
                );
              })}
            </Space>
          </Col>
        </Row>
        <div className={styles["vision-cards-section"]}>
          <div className={styles["card-grid"]}>
            {props?.philosophy?.map((item: any, index: number) => (
              <CustomCard className="offer-card" key={index}>
                <Space size={14}>
                  <h3 className={styles["card-title"]}>{item.title}</h3>
                </Space>
                <p className={styles["card-text"]}>{item.description}</p>
              </CustomCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
