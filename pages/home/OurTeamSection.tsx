import * as React from "react";
import { Row, Col, Space, Avatar } from "antd";
import CustomCard from "../../Views/common/custom-card/CustomCard";
import styles from "./Home.module.scss";
import fb from "../../public/images/fb.svg";
import twitter from "../../public/images/twitter.svg";
import linkedIn from "../../public/images/linkdeIn.svg";
import Image from "next/image";
type Props = {
  teamTitle?: string;
  team?: any;
};
const OurTeamSection = (props: Props) => {
  return (
    <div className={styles["team-section"]}>
      <div className="container-xl">
        <h2 className={styles["our-team"]}>{props.teamTitle}</h2>
        <div className={styles["team-member"]}>
          <Row gutter={[16, 18]} justify="center">
            {props.team?.map((member: any) => {
              return (
                <Col key={member.id} xs={24} sm={12} md={6}>
                  <CustomCard className="team-card">
                    <div className="text-center">
                      <Avatar
                        src={member?.personImage?.data?.attributes?.url}
                        shape="circle"
                        size={{
                          xs: 150,
                          sm: 150,
                          md: 160,
                          lg: 170,
                          xl: 180,
                          xxl: 200,
                        }}
                      />
                      <h4 className={styles["member-name"]}>
                        {member?.personName}
                      </h4>
                      <h5 className={styles["member-role"]}>
                        {member?.designation}
                      </h5>
                      <Space>
                        <a
                          href={member?.links?.facebook}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={fb}
                            alt="FaceBook"
                            height="100"
                            width="100"
                            layout="responsive"
                            objectFit="contain"
                          />
                        </a>
                        <a
                          href={member?.links?.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={twitter}
                            alt="Twitter"
                            height="100"
                            width="100"
                            layout="responsive"
                            objectFit="contain"
                          />
                        </a>
                        <a
                          href={member?.links?.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image
                            src={linkedIn}
                            alt="LinkedIn"
                            height="100"
                            width="100"
                            layout="responsive"
                            objectFit="contain"
                          />
                        </a>
                      </Space>
                    </div>
                  </CustomCard>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
