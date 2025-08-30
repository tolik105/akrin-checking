const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: { width: 1920, height: 1080 }
    });
    
    const page = await browser.newPage();
    
    // Navigate to the cloud infrastructure page
    await page.goto('http://localhost:3001/services/cloud-infrastructure', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    // Wait for the hero section to load
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Take a full page screenshot
    await page.screenshot({
      path: '/tmp/cloud_infrastructure_full_page.png',
      fullPage: true
    });
    
    // Try to find and screenshot just the hero section
    const heroElement = await page.$('.hero, [class*="hero"], section:first-child, .bg-gradient');
    if (heroElement) {
      await heroElement.screenshot({
        path: '/tmp/cloud_infrastructure_hero_section.png'
      });
      console.log('Hero section screenshot saved');
    } else {
      console.log('Hero section element not found, full page screenshot saved');
    }
    
    await browser.close();
    console.log('Screenshots completed successfully');
    
  } catch (error) {
    console.error('Screenshot failed:', error.message);
  }
})();