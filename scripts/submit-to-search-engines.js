import { get } from 'https';

// Configuration
const SITE_URL = 'https://www.greenplanttechnologies.in';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

// Function to ping search engines
async function submitSitemap() {
  // Ping Google
  const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  
  return new Promise((resolve, reject) => {
    get(googlePingUrl, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('Successfully submitted sitemap to Google');
          resolve();
        } else {
          console.log('Google:', data || `Status Code: ${res.statusCode}`);
          resolve();
        }
      });
    }).on('error', (e) => {
      console.error('Error submitting to Google:', e.message);
      reject(e);
    });
  });
}

// Main function
async function main() {
  console.log('\nTo submit your sitemap to search engines:');
  console.log('1. First, build your project:');
  console.log('   npm run build\n');
  console.log('2. Then submit your sitemap to Google Search Console:');
  console.log(`   Visit: https://search.google.com/search-console`);
  console.log('   - Add your property if not already added');
  console.log(`   - Go to Sitemaps`);
  console.log(`   - Enter 'sitemap.xml' and click 'Submit'\n');

  // Uncomment the following line to enable automatic submission
  // await submitSitemap();
}

// Run the main function
main().catch(console.error);
