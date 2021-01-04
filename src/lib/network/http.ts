const MONGO_DEV = 'http://0.0.0.0:9000/';
const MONGO_PROD = 'https://yomi-server.herokuapp.com/';


export const get = async (endpoint: string, params: any = null, auth: string = '') => {
	const url = new URL(`${MONGO_DEV}${endpoint}`);

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
				'Authorization': auth
			},
		});

		return await response.json();
	} catch (err) {
		console.log('error');
	}
};

export const post = async (endpoint: string, params: any = null, data: any, auth: string = '') => {
	const url = new URL(`${MONGO_PROD}${endpoint}`);

	if (params) {
		Object.keys(params).forEach((key) => {
			url.searchParams.append(key, params[key]);
		});
	}

	try {
		const response = await fetch(url.href, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': auth
			},
			body: JSON.stringify(data),
		});

		return await response.json();
	} catch (err) {
		console.log(err);
	}
};