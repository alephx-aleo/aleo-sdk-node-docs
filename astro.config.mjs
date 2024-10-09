// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://alephx-aleo.github.io',
	base: 'aleo-sdk-node-docs',
	integrations: [
		starlight({
			title: 'Aleo SDK Node',
			customCss: [
			  './src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/alephx-aleo/aleo-sdk-node',
			},
			sidebar: [
				{
					label: 'Aleo SDK Node',
					items: [
						{ label: 'Quick Start', slug: 'start-here/quickstart' },
						{ label: 'Network Support', slug: 'start-here/network-support' },
						{ label: 'Architecture Support', slug: 'start-here/architecture-support' },
						{ label: 'Roadmap', slug: 'start-here/roadmap' },
						{ label: 'Develop With Us', slug: 'start-here/development' },
					],
				},
				{
					label: 'API Reference',
					items: [
						{ label: 'loadProgramKeys', slug: 'reference/load-program-keys' },
						{ label: 'buildExecutionTransaction', slug: 'reference/build-execution-transaction' },
					],
				},
			],
		}),
	],
});
