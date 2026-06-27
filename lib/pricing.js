export const pricingData = {
  websiteDevelopment: [
    { service: "Landing Page", price: "3,999", type: "One-Time" },
    { service: "Portfolio Website", price: "5,999", type: "One-Time" },
    { service: "Business Website (5-8 Pages)", price: "9,999", type: "One-Time" },
    { service: "Premium Business Website", price: "14,999", type: "One-Time" },
    { service: "Website Redesign", price: "Starting at 15,999", type: "One-Time" },
    { service: "E-commerce Website", price: "19,999+", type: "One-Time" },
    { service: "Monthly Website Maintenance", price: "999", type: "Monthly" }
  ],
  
  socialMediaPackages: [
    {
      name: "Launch",
      price: "2,999",
      description: "Perfect for new businesses.",
      features: ["1 Social Platform", "8 Posts", "Basic Captions", "Content Scheduling", "Monthly Report"],
      isPopular: false
    },
    {
      name: "Growth",
      price: "5,999",
      description: "Most Popular.",
      features: ["2 Social Platforms", "16 Posts", "2 Reels", "Caption & Hashtag Strategy", "Monthly Content Calendar", "Monthly Analytics Report"],
      isPopular: true
    },
    {
      name: "Scale",
      price: "9,999",
      description: "For scaling businesses.",
      features: ["3 Social Platforms", "24 Posts", "4 Reels", "Stories", "Community Management (Basic)", "Monthly Strategy Meeting", "Weekly Performance Report"],
      isPopular: false
    }
  ],

  seoPackages: [
    {
      name: "Basic SEO",
      price: "2,999",
      features: ["Technical Audit", "On-Page SEO", "Keyword Research", "Google Search Console", "Analytics Setup"]
    },
    {
      name: "Pro SEO",
      price: "5,999",
      features: ["Everything in Basic", "Local SEO", "Speed Optimization", "Monthly SEO Report", "Competitor Analysis", "Content Suggestions"],
      isPopular: true
    },
    {
      name: "Premium SEO",
      price: "9,999",
      features: ["Everything in Pro", "Full Technical SEO", "Advanced Local SEO", "Blog Optimization", "Landing Page Optimization", "Monthly Strategy Call"]
    }
  ],

  adsManagement: [
    { service: "Setup Only", price: "2,999", details: "Campaign Setup, Audience Research, Pixel/Conversion Tracking, Initial Optimization" },
    { service: "Google Ads", price: "3,999", details: "Monthly Management (Ad spend separate)" },
    { service: "Meta Ads", price: "3,999", details: "Monthly Management (Ad spend separate)" },
    { service: "Google + Meta Ads", price: "6,999", details: "Monthly Management (Ad spend separate)" }
  ]
};
