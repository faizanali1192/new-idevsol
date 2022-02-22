import * as React from "react";
import { Result, Button } from "antd";
import ConstructionImage from "../../../public/images/construction.jpg";
import Image from "next/image";
interface InternalServerErrorProps {}

const InternalServerError: React.FunctionComponent<InternalServerErrorProps> = (
  props
) => {
  return (
    // <Result
    //   icon="<a href='https://www.freepik.com/vectors/web'>Web vector created by storyset - www.freepik.com</a>"
    //   status="500"
    //   title="500"
    //   subTitle="Sorry, something went wrong."
    //   extra={<Button type="primary">Back Home</Button>}
    // />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: "20px",
      }}
    >
      <h1 style={{ color: "red", fontSize: "42px", textAlign: "center" }}>
        Under Maintenance
      </h1>
      <Image
        src={ConstructionImage}
        alt=""
        height="100"
        width="100"
        layout="responsive"
        objectFit="contain"
        // style={{ height: "80vh", width: "auto", maxWidth: "100%" }}
      />
    </div>
  );
};

export default InternalServerError;
