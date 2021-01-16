const YOMI_DEV = 'http://0.0.0.0:9000/';
const YOMI_PROD = 'https://yomi-server.herokuapp.com/';
const ANILIST = 'https://graphql.anilist.co/';
const MANGADEXGQL = 'http://mangadex.herokuapp.com/graphql';

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

export const yomiApi = async (route: string, params: any = null) => {
	const url = new URL(`${YOMI_PROD}${route}`);

	if (params) {
		Object.keys(params).forEach((key) => {
			url.searchParams.append(key, params[key]);
		});
	}

	try {
		const response = await fetch(url.href, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			}
		});

		return await response.json();
	} catch (err) {
		console.log('error');
	}
};

export const mangadexQL = async (query: string, variables: {}) => {
	const url = new URL(MANGADEXGQL);

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