import { Row, Col } from "antd";
import React from "react";
import styles from "./Home.module.scss";
import rockLeft from "../../public/images/left-rock.png";
import Image from "next/image";
type Props = {
  homePageAboutTitle: string;
  homePageAboutDescription: string;
};
export default function DoBestSection(props: Props) {
  return (
    <div className={styles["do-best-section"]}>
      <div id={styles["rock-left"]}>
        <Image
          src={rockLeft}
          alt=""
          height="100"
          width="100"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="container-fluid">
        <div className="container-xl">
          <Row align="middle" justify="space-around">
            <Col sm={6}>
              <h3 className={styles["about-solutions"]}>
                Its All About Idea to solution
              </h3>
              <h2 className={styles["Do-best"]}>{props.homePageAboutTitle}</h2>
            </Col>
            <Col sm={12}>
              <p className={styles["description-text"]}>
                {props.homePageAboutDescription}
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
