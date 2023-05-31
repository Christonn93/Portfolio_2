import { Octokit } from '@octokit/core';

async function getData() {
	const octokit = new Octokit({ auth: 'token' });

	const response = await octokit.request('GET /orgs/{org}/repos', {
		org: 'octokit',
		type: 'private'
	});
	console.log(response);
}

getData();
