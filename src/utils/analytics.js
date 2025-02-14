export const GA_MEASUREMENT_ID = "G-78QK5YWQGM"; // Your GA ID

// Function to track page views
export const trackPageView = (path) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
};

// Function to track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
