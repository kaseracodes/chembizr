// local-server.js
import express from 'express';
import path from 'path';
import cors from 'cors';
import { SitemapStream, streamToPromise } from 'sitemap';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, orderBy, getDocs } from 'firebase/firestore'; // ✅ ADDED orderBy
import { fileURLToPath } from 'url';

// ES6 equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCPHFrCvy5OyQFxf_Cul6-529NuWkOyBfs",
  authDomain: "chembizr-13d5a.firebaseapp.com",
  projectId: "chembizr-13d5a",
  storageBucket: "chembizr-13d5a.appspot.com",
  messagingSenderId: "617645771031",
  appId: "1:617645771031:web:36215842114a7cecddcf52",
  measurementId: "G-SB711LNF6L"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Serve your React build
app.use(express.static('dist'));

// API route for sitemap
// API route for sitemap
app.get('/api/sitemap', async (req, res) => {
    try {
      console.log('🔥 Generating sitemap...');
      
      const sitemap = new SitemapStream({ 
        hostname: 'https://chembizr.com' // ✅ Updated to your actual domain
      });
      
      // Add static pages
      sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
      sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
      sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.7 });
      sitemap.write({ url: '/capabilities', changefreq: 'monthly', priority: 0.8 });
      sitemap.write({ url: '/careers', changefreq: 'weekly', priority: 0.6 });
      sitemap.write({ url: '/insights', changefreq: 'weekly', priority: 0.9 });
      
      // Get blogs from Firebase
      console.log('📡 Connecting to Firebase...');
      
      const blogsQuery = query(
        collection(db, 'blogs'), 
        orderBy('date', 'desc')
      );
      
      const blogsSnapshot = await getDocs(blogsQuery);
      console.log(`📄 Found ${blogsSnapshot.size} total blogs`);
      
      // Add each blog to sitemap with slugified URLs
      blogsSnapshot.forEach((doc) => {
        const data = doc.data();
        const blogId = data.id || doc.id;
        const title = data.heading || data.title || '';
        
        // ✅ Create slug from title (same logic as your frontend)
        const titleSlug = slugify(title);
        
        console.log(`➕ Adding blog: ${blogId} - ${title}`);
        console.log(`   URL: /insights/${titleSlug}/${blogId}`);
        
        // ✅ FIXED: Use your actual URL pattern
        sitemap.write({
          url: `/insights/${titleSlug}/${blogId}`, // Match your actual URL structure
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
      res.setHeader('Cache-Control', 'public, max-age=3600');
      
      console.log('✅ Sitemap generated successfully!');
      res.send(sitemapXML);
      
    } catch (error) {
      console.error('❌ Sitemap error:', error);
      res.status(500).json({ 
        error: 'Error generating sitemap',
        details: error.message 
      });
    }
  });
  
  // ✅ Slug generation function (add this before the app.get routes)
  function slugify(str) {
    if (!str) return '';
    
    return str
      .toLowerCase()                    // Convert to lowercase
      .trim()                          // Remove whitespace
      .replace(/[^\w\s-]/g, '')        // Remove special chars except word chars, spaces, hyphens
      .replace(/[\s_-]+/g, '-')        // Replace spaces, underscores, multiple hyphens with single hyphen
      .replace(/^-+|-+$/g, '');        // Remove leading/trailing hyphens
  }
  

// Sitemap.xml route
app.get('/sitemap.xml', (req, res) => {
  console.log('🔍 Sitemap.xml requested, redirecting to API...');
  res.redirect('/api/sitemap');
});

// ✅ FIXED: Express v5 compatible catch-all route
app.get('/*catchAll', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('\n🚀 Local Test Server Started!');
  console.log('================================');
  console.log(`⚛️  React App: http://localhost:${PORT}`);
  console.log(`📄 Sitemap: http://localhost:${PORT}/sitemap.xml`);
  console.log(`🔧 API Direct: http://localhost:${PORT}/api/sitemap`);
  console.log('================================');
  console.log('💡 This simulates exactly how Vercel will work!');
  console.log('\nPress Ctrl+C to stop the server');
});
