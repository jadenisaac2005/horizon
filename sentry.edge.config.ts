import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://a8a95b40416b8c0407f0fc3ace6dab7b@o4507621332680704.ingest.us.sentry.io/4507621335695360",

  // We recommend adjusting this value in production, or using `tracesSampler`
  // for finer control
  tracesSampleRate: 1.0,
});
