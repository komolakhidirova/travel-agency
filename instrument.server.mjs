import { nodeProfilingIntegration } from '@sentry/profiling-node'
import * as Sentry from '@sentry/react-router'

Sentry.init({
	dsn: 'https://f3c690a08c1eebdd8ff28a3047a2e374@o4508606837948416.ingest.us.sentry.io/4509287775338496',

	// Adds request headers and IP for users, for more info visit:
	// https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
	sendDefaultPii: true,

	integrations: [nodeProfilingIntegration()],
	tracesSampleRate: 1.0, // Capture 100% of the transactions
	profilesSampleRate: 1.0, // profile every transaction
})
