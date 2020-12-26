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

export { useContent, fetchPageByUID, fetchBlogPageByUID };
