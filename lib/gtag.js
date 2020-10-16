export const GA_TRACKING_ID = "UA-179141332-1";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  // console.log('GA pageView url: ', url);
  if (typeof window !== 'undefined') {
    // console.log('pageView window{} exists: ', window);
    window && window.gtag && window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// export const event = ({ action, category, label, value }) => {
//   window.gtag('event', action, {
//     event_category: category,
//     event_label: label,
//     value: value,
//   })
// }