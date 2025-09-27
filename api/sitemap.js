// api/sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, query, orderBy, getDocs } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCPHFrCvy5OyQFxf_Cul6-529NuWkOyBfs",
  authDomain: "chembizr-13d5a.firebaseapp.com",
  projectId: "chembizr-13d5a",
  storageBucket: "chembizr-13d5a.appspot.com",
  messagingSenderId: "617645771031",
  appId: "1:617645771031:web:36215842114a7cecddcf52",
  measurementId: "G-SB711LNF6L"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Slug generation function
function slugify(str) {
  if (!str) return '';
  
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default async function handler(req, res) {
  try {
    const sitemap = new SitemapStream({ 
      hostname: 'https://chembizr.com' // Your actual domain
    });
    
    // Add static pages
    sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
    sitemap.write({ url: '/about-us', changefreq: 'monthly', priority: 0.8 });
    sitemap.write({ url: '/industries', changefreq: 'monthly', priority: 0.8 });
    sitemap.write({ url: '/capabilities', changefreq: 'monthly', priority: 0.8 });
    sitemap.write({ url: '/careers', changefreq: 'weekly', priority: 0.6 });
    sitemap.write({ url: '/insights', changefreq: 'weekly', priority: 0.9 });
    sitemap.write({ url: '/news', changefreq: 'daily', priority: 0.9 });
    sitemap.write({ url: '/events', changefreq: 'weekly', priority: 0.9 });
    sitemap.write({ url: '/food-nutrition-and-beverages', changefreq: 'monthly', priority: 0.6 });
    sitemap.write({ url: '/specialty-polymers', changefreq: 'monthly', priority: 0.6 });
    sitemap.write({ url: '/petro-chemicals-and-downstream', changefreq: 'monthly', priority: 0.6 });
    sitemap.write({ url: '/clean-energy-and-storage', changefreq: 'monthly', priority: 0.6 });
    sitemap.write({ url: '/mobility', changefreq: 'monthly', priority: 0.6 });
    sitemap.write({ url: '/personal-care-and-cosmetics', changefreq: 'monthly', priority: 0.6 });
    
    // Get blogs
    const blogsQuery = query(
      collection(db, 'blogs'), 
      orderBy('date', 'desc')
    );
    
    const blogsSnapshot = await getDocs(blogsQuery);
    
    blogsSnapshot.forEach((doc) => {
      const data = doc.data();
      const blogId = data.id || doc.id;
      const title = data.heading || data.title || '';
      const titleSlug = slugify(title);
      
      sitemap.write({
        url: `/insights/${titleSlug}/${blogId}`,
        lastmod: data.date ? 
          new Date(data.date).toISOString() : 
          new Date().toISOString(),
        changefreq: 'weekly',
        priority: data.isspotlight === 'true' ? 0.8 : 0.6
      });
    });
    
    sitemap.end();
    const sitemapXML = await streamToPromise(sitemap);
    
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    
    res.status(200).send(sitemapXML);
    
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.status(500).json({ error: 'Error generating sitemap' });
  }
}
