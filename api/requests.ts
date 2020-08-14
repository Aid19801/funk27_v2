import { useQuery } from 'react-query';
import Prismic from 'prismic-javascript';

async function fetchPageByUID(key, uid) {
	return Prismic.getApi('https://funk27.cdn.prismic.io/api/v2')
		.then((api) => api.query(
            Prismic.Predicates.at('document.type', 'page'),
        ))
		.then((response) => response.results.filter(each => each.uid === "home-page")[0])
		.catch((err) => console.log('AT | err :', err));
}

const useContent = (uid) => {
	return useQuery(['content', uid], fetchPageByUID, {
		enabled: uid,
		initialData: props.ssrContent
	});
};

export { useContent, fetchPageByUID };
