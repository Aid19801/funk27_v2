import { useQuery } from 'react-query';
import Prismic from 'prismic-javascript';


const linkResolver = function(doc) {
	// Pretty URLs for known types
	if (doc.type === 'blog') return "/post/" + doc.slug;
	if (doc.type === 'page') return "/" + doc.slug;
	// Fallback for other types, in case new custom types get created
	return "/doc/" + doc.id;
};

async function fetchPageByUID(key, uid) {
	
	// console.log('AT | fetchPageByUID key:', key);
	// console.log('AT | fetchPageByUID uid:', uid);

	return Prismic.getApi('https://funk27.cdn.prismic.io/api/v2')
		.then((api) => api.getByUID('page', uid,  { 'fetchLinks': ['blog-page.blog-title', 'blog-page.blog-body', 'blog-page.blog-image-1', 'blog-page.blog-image-2'] }),
        )
		.then(response => {
			// console.log('AT | response back from prismic UID query:', response);
			return response;
		})
		.catch((err) => console.log('AT | err :', err));
}

const useContent = (key, uid) => {
	return useQuery([key, uid], fetchPageByUID, {
		enabled: uid,
		// initialData: props.ssrContent
	});
};

export { useContent, fetchPageByUID };
