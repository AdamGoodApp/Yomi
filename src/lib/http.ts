export const get = async (endpoint: string, params: any = null) => {
	const url = new URL(endpoint);

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
			},
		});

		return await response.json();
	} catch (err) {
		console.log('error');
	}
};

export const post = async (endpoint: string, data: any) => {
	const url = new URL(endpoint);

	try {
		const response = await fetch(url.href, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		return await response.json();
	} catch (err) {
		console.log('error');
	}
};