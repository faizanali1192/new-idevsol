import * as React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from "./Career.module.scss";
import gallery1 from "../../public/images/gallery1.png";
import gallery2 from "../../public/images/gallery2.png";
import gallery3 from "../../public/images/gallery3.png";
import Image from "next/image";
type Props = {
  activities: any;
};

const ActivitiesSection = (props: Props) => {
  const images = [gallery1, gallery2, gallery3, gallery1, gallery2, gallery3];
  return (
    <div className={styles["activities-section"]}>
      <div className="text-center">
        <h2 className={styles["styled-title"]}>Activities</h2>
      </div>
      <div className={styles["gallery-grid"]}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
          <Masonry gutter={12}>
            {props.activities?.data?.map((image: any, index: number) => (
              <Image
                key={index}
                src={image?.attributes?.url}
                height="100"
                width="100"
                layout="responsive"
                objectFit="cover"
                // style={{ width: "100%", display: "block" }}
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default ActivitiesSection;
