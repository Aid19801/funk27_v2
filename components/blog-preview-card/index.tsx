import React, { ReactElement } from "react";
import * as moment from "moment";
import Link from "next/link";
import { Card, Media, Image, Content } from "react-bulma-components";
import styles from "./preview-card.module.scss";

interface Props {
  data: any;
  uid: string;
  tags: object[];
}

function BlogPreviewCard({ data, uid, tags }: Props): ReactElement {
  return (
    <React.Fragment>
      <Link href="/blog/[slug]" as={`/blog/${uid}`}>
        <a>
          <Card className={styles.cardContainer}>
            <h4 className={styles.cardTag}>{tags ? tags[0] : "General"}</h4>
            <h5 className={styles.cardDate}>
              {
                //@ts-ignore
                moment(data.date).format("DD/MM/YYYY")
              }
            </h5>
            <Card.Image size="4by3" src={data["blog-image-1"].url} />
            <Card.Content>
              <Media>
                <Media.Item renderAs="figure" position="left">
                  <Image size={64} alt="64x64" src={data["blog-image-2"].url} />
                </Media.Item>
                <Media.Item>
                  <Content className={styles.card__title}>
                    {data["blog-title"][0].text}
                  </Content>
                </Media.Item>
              </Media>
              <Content>
                {data["blog-body"][0].text.length > 140
                  ? data["blog-body"][0].text.slice(0, 140) + "..."
                  : data["blog-body"][0].text}
              </Content>
            </Card.Content>
          </Card>
        </a>
      </Link>
    </React.Fragment>
  );
}

export default BlogPreviewCard;
