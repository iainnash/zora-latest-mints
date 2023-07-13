<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	onMount(() => {
		setInterval(() => {
			invalidateAll();
		}, 8000);
	});

	export let data: PageData;
</script>

<svelte:head>
	<title>Latest ZORA Mints</title>
	<meta name="description" content="Latest ZORA mints on ZORA network" />
</svelte:head>

<section>
	<div>
		{#each data.newTokens.zoraCreateTokens as token}
			{#if token.metadata && token.metadata.image}
				<a
					href={`https://zora.co/collect/zora:${token.contract.address}/${
						token.contract.contractStandard === 'ERC1155' ? token.tokenId : ''
					}`}
					target="_blank"
					><img
						loading="lazy"
						class="img"
						alt={token.metadata.name}
						src={token.metadata.image.replace(
							'ipfs://',
							'https://ipfs.decentralized-content.com/ipfs/'
						)}
					/></a
				>
			{/if}
		{/each}
	</div>
</section>

<style>
	.img {
		max-width: 90%;
		max-height: 90%;
		margin: 0 auto;
		display: block;
		margin: 4%;
	}
</style>
