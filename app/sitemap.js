export default function sitemap() {
  const baseUrl = "https://growthagency.com";
  
  const routes = ["", "/pricing", "/services", "/industries", "/about", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: "weekly",
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  return routes;
}
