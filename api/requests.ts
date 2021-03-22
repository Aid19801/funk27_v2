import { useQuery } from "react-query";
import Prismic from "prismic-javascript";

const linkResolver = function (doc) {
  if (doc.type === "blog") return "/blog/" + doc.slug;
  if (doc.type === "page") return "/" + doc.slug;
  // Fallback for other types, in case new custom types get created
  return "/doc/" + doc.id;
};

async function fetchPageByUID(key, uid) {
  return Prismic.getApi("https://funk27.cdn.prismic.io/api/v2")
    .then((api) =>
      api.getByUID("page", uid, {
        fetchLinks: [
          "blog-page.blog-title",
          "blog-page.blog-body",
          "blog-page.blog-image-1",
          "blog-page.blog-image-2",
          "blog-page.date",
        ],
      })
    )
    .then((response) => {
      // console.log("response is ", response);
      return response;
    })
    .catch((err) => console.log("page fetch error =====>>> : ", err));
}

async function fetchBlogPageByUID(key, uid) {
  return Prismic.getApi("https://funk27.cdn.prismic.io/api/v2")
    .then((api) => api.getByUID("blog-page", uid))
    .then((response) => response)
    .catch((err) => console.log("blog fetch error: ", err));
}

const useContent = (key, uid) => {
  //@ts-ignore
  return useQuery([key, uid], fetchPageByUID, {
    enabled: uid,
    // initialData: props.ssrContent
  });
};

const fetchTweets = async () => {
  const myHeaders = new Headers();

  myHeaders.append("tweet.fields", "Bearer AAAAAAAAAAAAAAAAAAAAAK9iKwEAAAAAR0RawpJ67cnyn01rB%2BLLpwQ%2FRqc%3DFYclz6ESj9IZxzs3wRZjQOPNd27UBPIDAFA1XOktUj6L95dlmc");
  myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAK9iKwEAAAAAR0RawpJ67cnyn01rB%2BLLpwQ%2FRqc%3DFYclz6ESj9IZxzs3wRZjQOPNd27UBPIDAFA1XOktUj6L95dlmc");
  myHeaders.append("Cookie", "personalization_id=\"v1_uCzGQMbDZ7rr7RnwgtF2vQ==\"; guest_id=v1%3A160853653158928814");
  myHeaders.append("Cors", "personalization_id=\"v1_uCzGQMbDZ7rr7RnwgtF2vQ==\"; guest_id=v1%3A160853653158928814");

  const user_data = `user.fields=description,name,username`;
  const expand = 'expansions=author_id';
  const tweet_data = `tweet.fields=author_id,created_at,geo,lang,possibly_sensitive,referenced_tweets,source`;
  const query = `query=forex`;

  try {
    const proxyurl = "https://cors-anywhere.herokuapp.com";
    const otherProxy = "https://thingproxy.freeboard.io/fetch";
    // const res = await fetch("https://api.twitter.com/2/users/69620713/tweets?tweet.fields=attachments,created_at,conversation_id,entities,referenced_tweets,source&expansions=attachments.media_keys&media.fields=media_key", {
    // const res = await fetch("https://thingproxy.freeboard.io/fetch/https://api.twitter.com/2/users/69620713/tweets?tweet.fields=attachments,created_at,conversation_id,entities,referenced_tweets,source&expansions=attachments.media_keys&media.fields=media_key", {
    // const res = await fetch(`${proxyurl}/https://api.twitter.com/2/users/69620713/tweets?tweet.fields=attachments,created_at,conversation_id,entities,referenced_tweets,source&expansions=attachments.media_keys&media.fields=media_key`, {
      const res = await fetch(`${otherProxy}/https://api.twitter.com/2/tweets/search/recent?${query}&${user_data}&${tweet_data}&${expand}`, {
      method: 'GET',
      headers: myHeaders,
    });
    const json = await res.json();
    return json;
  } catch (error) { 
    return error;
  }
}

export { useContent, fetchPageByUID, fetchBlogPageByUID, fetchTweets };
