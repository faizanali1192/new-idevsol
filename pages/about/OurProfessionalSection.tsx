import { Row, Col } from "antd";
import * as React from "react";
import OurTeamSection from "../home/OurTeamSection";
import styles from "./AboutUs.module.scss";
import { useHomePageQuery } from "../../generated/graphql";

interface OurProfessionalSectionProps {}

const OurProfessionalSection: React.FunctionComponent<
  OurProfessionalSectionProps
> = (props) => {
  const { data } = useHomePageQuery();
  let d = data?.home?.data?.attributes;
  return (
    <div className={styles["our-professional"]}>
      <div className="container-xl">
        <Row justify="center">
          <Col xs={24} sm={15} md={14}>
            <div className="text-center">
              <h2 className={styles["styled-title"]}>Our Professional Team</h2>
            </div>
            <p className={styles["professional-text"]}>
              We specialize in making custom IT solutions for a wide extend of
              clients in essentially each niche. Our client list ranges from
              little start-ups to huge organizations
            </p>
          </Col>
        </Row>
      </div>
      <OurTeamSection team={d?.team} />
    </div>
  );
};

export default OurProfessionalSection;
