import { Row, Col, Space } from "antd";
import * as React from "react";
import styles from "./Home.module.scss";
import logo from "../../public/images/IDevSol-logo.svg";
import Link from "next/link";
import fb from "../../public/images/fb.svg";
import twitter from "../../public/images/twitter.svg";
import linkedIn from "../../public/images/linkdeIn.svg";
import { useFooterSectionQuery } from "../../generated/graphql";
import Image from "next/image";
interface FooterSectionProps {}

const FooterSection: React.FunctionComponent<FooterSectionProps> = (props) => {
  const { data } = useFooterSectionQuery();

  return (
    <div className={styles["footer-section"]}>
      <div className="container-xl">
        <Row justify="space-between" gutter={[12, 24]}>
          <Col xs={24} sm={6}>
            <h2 className={styles["footer-title"]}>Find Us</h2>
            <a
              href="https://www.google.com/maps/place/Kickstart+%7C+Flagship+-+Gulberg+(62-+C2)/@31.0255239,72.2949118,8z/data=!4m19!1m13!4m12!1m4!2m2!1d72.47972!2d30.495725!4e1!1m6!1m2!1s0x3919056dad6e533d:0x6a72c370e71f26f1!2skickstart+flagship+-+gulberg+(62-+c2)!2m2!1d74.3477625!2d31.5114675!3m4!1s0x3919056dad6e533d:0x6a72c370e71f26f1!8m2!3d31.5114675!4d74.3477625"
              target="_blank"
              rel="noreferrer"
            >
              <p className={styles["company-address"]}>
                {data?.footer?.data?.attributes?.footerDescription}
              </p>
            </a>
          </Col>
          <Col xs={24} sm={4}>
            <h2 className={styles["footer-title"]}>Explore</h2>
            <Space direction="vertical">
              <Link href="/">
                <a className={styles["footer-link"]}>Home</a>
              </Link>
              <Link href="/">
                <a className={styles["footer-link"]}>About Us</a>
              </Link>
              <Link href="/">
                <a className={styles["footer-link"]}>Contact</a>
              </Link>
              <Link href="/">
                <a className={styles["footer-link"]}>Carrers</a>
              </Link>
              <Link href="/">
                <a className={styles["footer-link"]}>Sitemap</a>
              </Link>
            </Space>
          </Col>
          <Col xs={24} sm={4}>
            <h2 className={styles["footer-title"]}>Support</h2>
            <Space direction="vertical">
              <Link href="/">
                <a className={styles["footer-link"]}>Register</a>
              </Link>
              <Link href="/">
                <a className={styles["footer-link"]}>Advice</a>
              </Link>
              <Link href="/">
                <a className={styles["footer-link"]}>Videos</a>
              </Link>
              <Link href="/">
                <a className={styles["footer-link"]}>Blog</a>
              </Link>
              <Link href="/">
                <a className={styles["footer-link"]}>Services</a>
              </Link>
            </Space>
          </Col>
          <Col xs={24} sm={4}>
            <h2 className={styles["footer-title"]}>Company</h2>
            <Space direction="vertical">
              <Link href="/">
                <a className={styles["footer-link"]}>Career</a>
              </Link>
              <Link href="/">
                <a className={styles["footer-link"]}>For Partners</a>
              </Link>
              <Link href="/">
                <a className={styles["footer-link"]}>Terms</a>
              </Link>
              <Link href="/">
                <a className={styles["footer-link"]}>Policy</a>
              </Link>
              <Link href="/">
                <a className={styles["footer-link"]}>Contact Us</a>
              </Link>
            </Space>
          </Col>
          <Col>
            <Link href="/">
              <Image
                src={logo}
                alt=""
                height="100"
                width="100"
                layout="responsive"
                objectFit="contain"
              />
            </Link>
            <div>
              <p className={styles["company-slug"]}>We’re Solution</p>
              <h3 className={styles["follow-us"]}>Follow Us on</h3>
              <Space>
                <a
                  href="https://www.linkedin.com/company/idevsol/"
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
                  href="https://www.linkedin.com/company/idevsol/"
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
                  href="https://www.linkedin.com/company/idevsol/"
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
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FooterSection;
