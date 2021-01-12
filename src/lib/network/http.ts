const MONGO_DEV = 'http://0.0.0.0:9000/';
const MONGO_PROD = 'https://yomi-server.herokuapp.com/';
const ANILIST = 'https://graphql.anilist.co/';

export const aniApi = async (query: string, variables: {}) => {
	const url = new URL(ANILIST);

	try {
		const response = await fetch(url.href, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify({
				query: query,
				variables: variables
			})
		});

		return await response.json();
	} catch (err) {
		console.log('error');
	}
};