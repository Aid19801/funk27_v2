import { DiscussionEmbed } from "disqus-react";
import styles from "./comments.module.scss";

interface Props {
  url: string;
  identifier: string;
  title: string;
}

const DisqusComments = ({ url, identifier, title }: Props) => {
  return (
    <div className={styles.commentsContainer}>
      <DiscussionEmbed
        shortname="funk-27"
        config={{
          url,
          identifier, // Single post id
          title, // Single post title
        }}
      />
    </div>
  );
};
export default DisqusComments;
