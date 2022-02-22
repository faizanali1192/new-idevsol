import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import Footer from "../../Views/common/footer/Footer";
import Header from "../../Views/common/header/Header";
import styles from "./Home.module.scss";
import HeroSection from "./HeroSection";
import DoBestSection from "./DoBestSection";
import WhatOfferSection from "./WhatOfferSection";
import OurGoalSection from "./OurGoalSection";
import TestimonialSection from "./TestimonialSection";
import OurTeamSection from "./OurTeamSection";
import SendEmailSection from "./SendEmailSection";
import FooterSection from "./FooterSection";
import { useHomePageQuery } from "../../generated/graphql";
// import InternalServerError from "../../Views/components/error-pages/InternalServerError";

const Home = () => {
  const { data, isLoading } = useHomePageQuery();

  let d = data?.home?.data?.attributes;
  // console.log("----", d?.goalImage?.data?.attributes?.url);

  const { Content } = Layout;
  const [color, setBackgroundColor] = useState("");
  const [headerId, setHeaderId] = useState("");
  const [height, setHeight] = useState(
    typeof window !== "undefined" ? window.scrollY : ""
  );
  typeof window !== "undefined"
    ? document.addEventListener("scroll", () => {
        setHeight(typeof window !== "undefined" ? window.scrollY : "");
      })
    : "";

  useEffect(() => {
    if (height < 5) {
      setBackgroundColor("transparent");
      setHeaderId("");
    } else {
      setBackgroundColor("white");
      setHeaderId("header-scrolled");
    }
  }, [height]);

  // if (!data && isLoading == false) {
  //   return <InternalServerError />;
  // }
  return (
    <div className={styles["container-fluid"]}>
      <Layout>
        <Header color={color} id={headerId} />
        <Content className="IDevSol-content">
          <HeroSection
            heroTitle={d?.heroTitle!}
            heroDescription={d?.heroDescription!}
          />
          <DoBestSection
            homePageAboutTitle={d?.aboutTitle!}
            homePageAboutDescription={d?.aboutDescription!}
          />
          <WhatOfferSection homePageServices={d?.homePageServices} />
          <OurGoalSection
            homePageGoalTitle={d?.goalTitle!}
            homePageGoalDescription={d?.goalDescription}
            homePageGoalImage={d?.goalImage?.data?.attributes?.url}
          />
          <TestimonialSection ratings={d?.homePageRatings!} />
          <OurTeamSection teamTitle="MEET OUR TEAM" team={d?.team} />
          <SendEmailSection />
          <FooterSection />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default Home;
