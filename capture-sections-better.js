const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function capturePageSections() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1000 });
  
  try {
    await page.goto('https://www.eiresystems.com/it-consulting-project-management/', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    await new Promise(resolve => setTimeout(resolve, 3000));

    const screenshotDir = '/Users/roma/Downloads/AKRIN-team/screenshots/eiresystems-sections';

    // Define specific scroll positions for each section
    const sections = [
      { name: '1-hero-section', scrollY: 0, height: 600 },
      { name: '2-it-infrastructure', scrollY: 600, height: 800 },
      { name: '3-office-relocation', scrollY: 1400, height: 600 },
      { name: '4-data-center', scrollY: 2000, height: 800 },
      { name: '5-business-continuity', scrollY: 2800, height: 800 },
      { name: '6-business-analysis', scrollY: 3600, height: 600 },
      { name: '7-migrations', scrollY: 4200, height: 600 },
      { name: '8-footer', scrollY: 4800, height: 400 }
    ];

    for (const section of sections) {
      try {
        // Scroll to the specific position
        await page.evaluate((y) => window.scrollTo(0, y), section.scrollY);
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Take screenshot
        await page.screenshot({
          path: path.join(screenshotDir, `${section.name}.png`),
          clip: {
            x: 0,
            y: 0,
            width: 1400,
            height: section.height
          }
        });
        
        console.log(`Captured: ${section.name} at scroll position ${section.scrollY}`);
      } catch (error) {
        console.log(`Error capturing ${section.name}:`, error.message);
      }
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

capturePageSections();