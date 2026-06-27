/**
 * Global Tracking & Conversion Analytics Hook Utility
 */

export function trackEvent(action, category, label = "", value = null) {
  if (typeof window !== "undefined") {
    // 1. Google Tag Manager dataLayer injection
    const dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: action,
      eventCategory: category,
      eventLabel: label,
      eventValue: value,
    });

    // 2. GA4 Global Site Tag injection
    if (window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }

    // 3. Dev log
    if (process.env.NODE_ENV === "development") {
      console.log(`📊 [TELEMETRY] ${action} | Cat: ${category} | Label: ${label} | Val: ${value}`);
    }
  }
}

export function trackFormSubmission(formId, success, details = "") {
  trackEvent(
    success ? "form_submission_success" : "form_submission_failure",
    "Conversions",
    `Form: ${formId} | ${details}`
  );
}

export function trackCTAClick(buttonId, location) {
  trackEvent("cta_click", "Engagement", `Button: ${buttonId} | Loc: ${location}`);
}

export function trackPhoneClick() {
  trackEvent("phone_contact_click", "Conversions", "Phone Click");
}

export function trackEmailClick() {
  trackEvent("email_contact_click", "Conversions", "Email Click");
}
