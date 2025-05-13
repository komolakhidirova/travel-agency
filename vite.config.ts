import { reactRouter } from '@react-router/dev/vite'
import {
	sentryReactRouter,
	type SentryReactRouterBuildOptions,
} from '@sentry/react-router'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const sentryConfig: SentryReactRouterBuildOptions = {
	org: 'komola',
	project: 'travel-agency',
	// An auth token is required for uploading source maps.
	authToken:
		'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',
	// ...
}

export default defineConfig(config => {
	return {
		plugins: [
			tailwindcss(),
			tsconfigPaths(),
			reactRouter(),
			sentryReactRouter(sentryConfig, config),
		],
		ssr: {
			noExternal: [/@syncfusion/],
		},
	}
})
