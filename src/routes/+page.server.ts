import type { Actions, PageServerLoad } from './$types';
import request from 'graphql-request';

const query = `
  query {
    zoraCreateTokens (
      orderBy: timestamp,
      orderDirection: desc,
      first: 200
    ) {
      timestamp
      contract {
        address
        contractStandard
      }
      tokenId
      uri
      metadata {
        image
      }
    }
  }
`;

export const load: PageServerLoad = (async () => {
	try {
		const newTokens = await request(
			'https://api.goldsky.com/api/public/project_clhk16b61ay9t49vm6ntn4mkz/subgraphs/zora-create-zora-mainnet/stable/gn',
			query,
			{}
		);
		return { newTokens };
	} catch (error) {
		console.error(`Error in load function for /: ${error}`);
	}
}) satisfies PageServerLoad;
