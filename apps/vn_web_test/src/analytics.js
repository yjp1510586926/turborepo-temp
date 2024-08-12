import googleAnalytics from '@analytics/google-analytics';
import Analytics from 'analytics';

const analytics = Analytics({
  app: 'VN.com',
  debug: true,
  plugins: [
    googleAnalytics({
      measurementIds: ['G-XCWKNKCK7C'],
    }),
  ],
});

export default analytics;
