import * as React from "react";
import styles from "./ContactUs.module.scss";
import map from "../../public/images/map.png";
import { Col, Row } from "antd";
import CustomCard from "../../Views/common/custom-card/CustomCard";
import Image from "next/image";
type Props = {
  credentials: any;
};

const LetsConnectSection = (props: Props) => {
  return (
    <>
      <div className={styles["lets-connect"]}>
        <div className="container-xl">
          <div className="text-center">
            <h2 className={styles["styled-title"]}>Let’s Connect</h2>
          </div>
          <div className={styles["map-div"]}>
            <div className="text-center">
              <Image
                className="img-fluid"
                src={map}
                alt=""
                // height="100"
                // width="100"
                // layout="responsive"
                // objectFit="contain"
              />
            </div>
          </div>
          <Row justify="center" align="middle">
            {props.credentials?.map((item: any, index: number) => {
              return (
                <Col xs={24} sm={6} key={index}>
                  <CustomCard>
                    <div className="text-center">
                      <Image
                        src={item?.icon?.data?.attributes?.url}
                        alt=""
                        height="100"
                        width="100"
                        layout="responsive"
                        objectFit="contain"
                      />
                    </div>
                    <h4 className={styles["contact-title"]}>{item?.title}</h4>
                    <h6 className={styles["contact-desc"]}>
                      {item?.description}
                    </h6>
                  </CustomCard>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
};

export default LetsConnectSection;
