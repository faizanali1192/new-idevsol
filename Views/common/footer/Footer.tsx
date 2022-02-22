import * as React from "react";
import { Layout } from "antd";
import "./Footer.module.scss";
import { useLowerFooterQuery } from "../../../generated/graphql";
interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = (props) => {
  const { data } = useLowerFooterQuery();
  const { Footer } = Layout;
  return (
    <Footer className="IDevsol-footer">
      <div className="container-xl">
        <div className="footer-text">
          {data?.lowerFooter?.data?.attributes?.copyRightText}
        </div>
      </div>
    </Footer>
  );
};

export default Footer;
