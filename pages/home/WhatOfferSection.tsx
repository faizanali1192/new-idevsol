import React from "react";
import { Space } from "antd";
import CustomCard from "../../Views/common/custom-card/CustomCard";
import styles from "./Home.module.scss";
import Image from "next/image";
type Props = {
  homePageServices: any;
};
export default function WhatOfferSection(props: Props) {
  return (
    <div className="container-xl">
      <div className={styles["offer-section"]}>
        <h1 className={styles["styled-title"]}>WHAT WE OFFER</h1>
        <div className={styles["offer-card"]}>
          <div className={styles["card-grid"]}>
            {props.homePageServices?.map((service: any, index: number) => {
              console.log(
                "service Image---->",
                service.image.data.attributes.url
              );
              return (
                <CustomCard key={index} className="offer-card">
                  <Space size={14}>
                    <Image
                      src={service?.image?.data?.attributes?.url}
                      alt=""
                      height="100"
                      width="100"
                      layout="responsive"
                      // objectFit="contain"
                    />
                    <h3 className={styles["card-title"]}>{service.title}</h3>
                  </Space>
                  <p className={styles["card-text"]}>{service.description}</p>
                </CustomCard>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
