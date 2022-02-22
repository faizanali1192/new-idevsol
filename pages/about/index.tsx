import * as React from "react";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import Footer from "../../Views/common/footer/Footer";
import Header from "../../Views/common/header/Header";
import AboutUsSection from "./AboutUsSection";
import VisionSection from "./VisionSection";
import WorkSection from "./WorkSection";
import OurProfessionalSection from "./OurProfessionalSection";
import FooterSection from "../home/FooterSection";
import SendEmailSection from "../home/SendEmailSection";
import { useAboutPageQuery } from "../../generated/graphql";
import CustomLoader from "../../Views/common/custom-loader/CustomLoader";
interface AboutUsProps {}

const AboutUs: React.FunctionComponent<AboutUsProps> = (props) => {
  const { data, isLoading } = useAboutPageQuery();
  const d = data?.about?.data?.attributes;
  if (isLoading) {
    return <CustomLoader />;
  }
  return (
    <div className="container-fluid">
      <Layout>
        <Header color="#fff" id="header-scrolled" />
        <Content className="IDevSol-content">
          <AboutUsSection
            heroDescription={d?.heroDescription!}
            heroImage={d?.heroImage}
          />
          <VisionSection blog={d?.blog} philosophy={d?.philosophy} />
          <WorkSection
            workTitle={d?.work?.title!}
            workDescription={d?.work?.description!}
            workImage={d?.work?.image}
          />
          <OurProfessionalSection />
          <SendEmailSection />
          <FooterSection />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default AboutUs;
