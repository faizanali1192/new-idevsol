import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import * as React from "react";
import Footer from "../../Views/common/footer/Footer";
import Header from "../../Views/common/header/Header";
import ContactSection from "./ContactSection";
import LetsConnectSection from "./LetsConnectSection";
import GetInTouchSection from "./GetInTouchSection";
import FooterSection from "../home/FooterSection";
import SendEmailSection from "../home/SendEmailSection";
import { useContactPageQuery } from "../../generated/graphql";
// import InternalServerError from "../error-pages/InternalServerError";
import CustomLoader from "../../Views/common/custom-loader/CustomLoader";
interface ContactUsProps {}

const ContactUs: React.FunctionComponent<ContactUsProps> = (props) => {
  const { data, isLoading } = useContactPageQuery();
  const d = data?.contact?.data?.attributes;

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
          <ContactSection
            heroDescription={d?.heroDescription!}
            heroImage={d?.heroImage}
          />
          <LetsConnectSection credentials={d?.credentials} />
          <GetInTouchSection />
          <SendEmailSection />
          <FooterSection />
        </Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default ContactUs;
