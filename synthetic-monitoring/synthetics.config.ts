import type { SyntheticsConfig } from '@elastic/synthetics';

export default env => {
  const config: SyntheticsConfig = {
    params: {
      url: 'https://elastic.github.io/synthetics-demo/',
    },
    playwrightOptions: {
      ignoreHTTPSErrors: false,
      locale: 'en-NL',
      timezoneId: 'Europe/Amsterdam',
    },
    /**
     * Configure global monitor settings
     */
    monitor: {
      schedule: 1,
      locations: [],
      privateLocations: ['Private II'],
    },
    /**
     * Project monitors settings
     */
    project: {
      id: 'synthetic-monitoring',
      url: 'https://kibana.siobytes.com',
      space: 'default',
    },
  };
  if (env !== 'development') {
    /**
     * Override configuration specific to environment
     * Ex: config.params.url = ""
     */
  }
  return config;
};
