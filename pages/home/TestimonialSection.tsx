import React, { useState } from "react";
import styles from "./Home.module.scss";
import Slider from "react-slick";
import testImg from "../../public/images/testimonial-bg.png";
import quote from "../../public/images/quote.svg";
import CustomButton from "../../Views/common/custom-button/CustomButton";
import person from "../../public/images/person.svg";
import { Space, Tag } from "antd";
import Image from "next/image";
type Props = {
  width?: number;
  ratings?: any;
};

const TestimonialSection = (props: Props) => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : ""
  );
  typeof window !== "undefined"
    ? window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
      })
    : "";
  const settings = {
    dots: false,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles["testimonial-section"]}>
      <div className="container-fluid">
        <h1 className={styles["styled-title"]}>WHAT OUR CLIENT SAYS</h1>
        <div className={styles["testimonial-slider"]}>
          <Slider {...settings} className="testimonial-cards">
            {width > 768
              ? props.ratings?.map((rating: any, index: number) => (
                  <div className={styles["test-card"]} key={index}>
                    <Image
                      src={testImg}
                      alt="Testimonial data"
                      className={styles["test-bg"]}
                      // height="100"
                      // width="100"
                      // layout="responsive"
                      // objectFit="contain"
                    />
                    <div className={styles["card-body"]}>
                      <Tag className="testimonial-tag" color="black">
                        NxtBar
                      </Tag>
                      <div className={styles["testimonial-body"]}>
                        <div>
                          <p className={styles["slick-text"]}>
                            We strategize and build creative launch and account
                            management strategies on Amazon to win multiple best
                            seller badges.
                          </p>
                        </div>
                        <div className={styles["client-style"]}>
                          <div className="text-center">
                            <Image
                              src={quote}
                              alt=""
                              // height="100"
                              // width="100"
                              // layout="responsive"
                              // objectFit="contain"
                            />
                          </div>
                          <p>{rating.clientRatings}</p>
                          <Space>
                            <Image
                              src={rating?.clientImage?.data?.attributes?.url}
                              alt=""
                              height="100"
                              width="100"
                              layout="responsive"
                              objectFit="contain"
                           />
                            <div>
                              <div className={styles["person-name"]}>
                                {rating.clientName}
                              </div>
                              <div className={styles["founder"]}>
                                Founder, NXT Bar
                              </div>
                            </div>
                          </Space>
                        </div>
                      </div>
                      <CustomButton className="header-contact-us-btn">
                        Case Study
                      </CustomButton>
                    </div>
                  </div>
                ))
              : props.ratings?.map((rating: any, index: number) => (
                  <div className={styles["smaller-card"]} key={index}>
                    <div className={styles["quote"]}>
                      <Image
                        src={quote}
                        alt=""
                        // height="100"
                        // width="100"
                        // layout="responsive"
                        // objectFit="contain"
                      />
                    </div>
                    <p className={styles["smaller-text"]}>
                      {rating.clientRatings}
                    </p>
                    <Space>
                      <Image
                        src={person}
                        alt=""
                        // height="100"
                        // width="100"
                        // layout="responsive"
                        // objectFit="contain"
                      />
                      <div>
                        <div className={styles["person-name"]}>
                          {rating.clientName}
                        </div>
                        <div className={styles["founder"]}>
                          Founder, NXT Bar
                        </div>
                      </div>
                    </Space>
                  </div>
                ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
