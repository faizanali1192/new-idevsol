import { List } from "antd";
import * as React from "react";
import "./CustomList.module.scss";
import CustomButton from "../custom-button/CustomButton";
import Link from "next/link";
interface CustomListProps {
  data: { jobTitle: string; jobLink: string; jobDescription: string }[];
}

const CustomList: React.FunctionComponent<CustomListProps> = (props) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={<span className="job-title">{item.jobTitle}</span>}
            description={
              <span className="job-description">
                Lahore / Full Time / Development
              </span>
            }
          />
          <CustomButton className="apply-btn">
            <Link href={item?.jobLink}>Apply Now</Link>
          </CustomButton>
        </List.Item>
      )}
    />
  );
};

export default CustomList;
