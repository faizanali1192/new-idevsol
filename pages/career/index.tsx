import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import * as React from "react";
import Footer from "../../Views/common/footer/Footer";
import Header from "../../Views/common/header/Header";
import CareerSection from "./CareerSection";
import WhyJoinUs from "./WhyJoinUs";
import ActivitiesSection from "./ActivitiesSection";
import OpenPosition from "./OpenPosition";
import FooterSection from "../home/FooterSection";
import SendEmailSection from "../home/SendEmailSection";
import { useCareersPageQuery } from "../../generated/graphql";
// import InternalServerError from "../error-pages/InternalServerError";
import CustomLoader from "../../Views/common/custom-loader/CustomLoader";
interface CareerProps {}

const Career: React.FunctionComponent<CareerProps> = (props) => {
  const { data, isLoading } = useCareersPageQuery();
  const d = data?.career?.data?.attributes;
  if (isLoading) {
    return <CustomLoader />;
  }
  //   if (!data && isLoading === false) {
  //     return <InternalServerError />;
  //   }
  return (
    <div className="container-fluid">
      <Layout>
        <Header color="#fff" id="header-scrolled" />
        <Content className="IDevSol-content">
          <CareerSection
            heroDescription={d?.heroDescription!}
            heroImage={d?.heroImage}
          />
          <WhyJoinUs joinUs={d?.joinUs || []} />
          <ActivitiesSection activities={d?.Activities || []} />
          <OpenPosition openPositions={d?.openPositions || []} />
          <SendEmailSection />
          <FooterSection />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default Career;
