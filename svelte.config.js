import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

export default {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: dev ? '' : '/actividad2-cicd'
		}
	}
};