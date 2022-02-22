import { Layout } from "antd";
import * as React from "react";
import styles from "./Service.module.scss";
import Header from "../../Views/common/header/Header";
import { Content } from "antd/lib/layout/layout";
import Footer from "../../Views/common/footer/Footer";
import OurServiceSection from "./OurServiceSection";
import WhatDoSection from "./WhatDoSection";
import StartProject from "./StartProject";
import SendEmailSection from "../home/SendEmailSection";
import FooterSection from "../home/FooterSection";
import { useServicesPageQuery } from "../../generated/graphql";
import InternalServerError from "../../Views/components/error-pages/InternalServerError";
import CustomLoader from "../../Views/common/custom-loader/CustomLoader";
interface ServiceProps {}

const Service: React.FunctionComponent<ServiceProps> = (props) => {
  const { data, isLoading } = useServicesPageQuery();
  const d = data?.service?.data?.attributes;
  if (isLoading) {
    return <CustomLoader />;
  }
  if (!data && isLoading === false) {
    return <InternalServerError />;
  }
  return (
    <div className="container-fluid">
      <Layout>
        <Header color="#fff" id="header-scrolled" />
        <Content className="IDevSol-content">
          <OurServiceSection
            heroDescription={d?.heroDescription!}
            heroImage={d?.heroImage}
          />
          <WhatDoSection
            bestDescription={d?.bestDescription!}
            blogs={d?.blogs || []}
          />
          <StartProject companyDetails={d?.companyDetails} />
          <SendEmailSection />
          <FooterSection />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default Service;
