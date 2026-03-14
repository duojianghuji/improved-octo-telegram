// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const site = process.env.SITE_URL ??
	(isGitHubPages
		? 'https://duojianghuji.github.io/improved-octo-telegram/'
		: 'https://fieldnotes.example.com');
const base = process.env.BASE_PATH ?? (isGitHubPages ? '/improved-octo-telegram' : '/');

export default defineConfig({
	site,
	base,
	integrations: [mdx(), sitemap()],
});
