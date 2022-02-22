import { Button, Result } from "antd";
import * as React from "react";

interface NotFoundProps {}

const NotFound: React.FunctionComponent<NotFoundProps> = (props) => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};

export default NotFound;
