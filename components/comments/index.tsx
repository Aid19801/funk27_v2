import { DiscussionEmbed } from "disqus-react";
import styles from "./comments.module.scss";

interface Props {
  url: string;
  identifier: string;
  title: string;
}

const DisqusComments = ({ url, identifier, title }: Props) => {
  return (
    <div>
      yeah
      <DiscussionEmbed
        shortname="funk-27.disqus.com"
        config={{
          url,
          identifier, // Single post id
          title, // Single post title
        }}
      />
      no
    </div>
  );
};
export default DisqusComments;
