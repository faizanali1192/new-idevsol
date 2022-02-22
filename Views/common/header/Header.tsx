import React, { useState } from "react";
import { Drawer, Menu, Space } from "antd";
import { Header } from "antd/lib/layout/layout";
import styles from "./Header.module.scss";
import LogoImage from "../../../public/images/IDevSol-logo.svg";
// import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "../custom-button/CustomButton";
import Icon from "@ant-design/icons";
import { MenuSvg } from "./../../common/Icons/MenuSvg";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

interface IAppProps {
  color: string;
  id?: string;
}
const App: React.FunctionComponent<IAppProps> = (props) => {
  const router = useRouter();
  //   const location = useLocation();
  //   const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : ""
  );
  typeof window !== "undefined"
    ? window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
      })
    : "";
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const drawer = () => {
    return (
      <div className={styles["drawer"]}>
        <CustomButton type="link" className="menu-btn" onClick={showDrawer}>
          <Icon component={MenuSvg} />
        </CustomButton>
      </div>
    );
  };
  const navMenu = () => {
    return (
      <ul className="IDevSol-navBar">
        <li className={router.pathname == "/" ? "active" : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname == "/service" ? "active" : ""}>
          <Link href="/service">Service</Link>
        </li>
        <li className={router.pathname == "/about" ? "active" : ""}>
          <Link href="/about">About us</Link>
        </li>
        <li className={router.pathname == "/career" ? "active" : ""}>
          <Link href="/career">Career</Link>
        </li>
        <li>
          <CustomButton
            onClick={() => router.push("/contact-us")}
            className="header-contact-us-btn"
          >
            Contact Us
          </CustomButton>
        </li>
      </ul>
    );
  };
  const menu = () => {
    return (
      <Menu
        className="IDevSol-navBar"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[router.pathname]}
      >
        <Menu.Item key="/">
          <Link href="/">
            <span className="default">Hfdsome</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/service">
          <Link href="/service">Services</Link>
        </Menu.Item>
        <Menu.Item key="/about-us">
          <Link href="/about-us">About us</Link>
        </Menu.Item>
        <Menu.Item key="/career">
          <Link href="/career">Career</Link>
        </Menu.Item>
        <Menu.Item className="header-contact-us-item" key="5">
          <CustomButton
            onClick={() => router.push("/contact-us")}
            className="header-contact-us-btn"
          >
            Contact Us
          </CustomButton>
        </Menu.Item>
      </Menu>
    );
  };
  return (
    <>
      <div className={styles["bg-white"]}>
        <Header
          id={props.id}
          className="IDevsol-header"
          style={{ backgroundColor: props.color }}
        >
          <div className="container-xl">
            <div className="IDevSol-logo">
              <Link href="/">
                <Image
                  src={LogoImage}
                  alt="IDevSol"
                  height="100"
                  width="100"
                  layout="responsive"
                  objectFit="contain"
                />
              </Link>
            </div>
            {width < 900 ? drawer() : navMenu()}
          </div>
        </Header>
      </div>
      <Drawer
        className="menu-drawer"
        placement="left"
        onClose={onClose}
        visible={visible}
        width={300}
      >
        <Space direction="vertical" size={18}>
          <Link href="/">Home</Link>
          <Link href="/service">Service</Link>
          <Link href="/about-us">About us</Link>
          <Link href="/career">Career</Link>
          <CustomButton
            className="header-contact-us-menu-btn"
            onClick={() => router.push("/contact-us")}
          >
            Contact Us
          </CustomButton>
        </Space>
      </Drawer>
    </>
  );
};

export default App;
