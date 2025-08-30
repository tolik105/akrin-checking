const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function captureSpecificSections() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 2000 }); // Taller viewport
  
  try {
    await page.goto('https://www.eiresystems.com/it-consulting-project-management/', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    await new Promise(resolve => setTimeout(resolve, 5000));

    const screenshotDir = '/Users/roma/Downloads/AKRIN-team/screenshots/eiresystems-sections';

    // Get full page height first
    const fullHeight = await page.evaluate(() => document.body.scrollHeight);
    console.log(`Full page height: ${fullHeight}`);

    // Take screenshots at different scroll positions with more content
    const scrollPositions = [
      { name: 'section-a-hero-and-start', scrollY: 0 },
      { name: 'section-b-infrastructure-full', scrollY: 800 },
      { name: 'section-c-office-relocation', scrollY: 1600 },
      { name: 'section-d-data-center', scrollY: 2400 },
      { name: 'section-e-business-continuity', scrollY: 3200 },
      { name: 'section-f-business-analysis', scrollY: 4000 },
      { name: 'section-g-migrations', scrollY: 4800 },
      { name: 'section-h-footer', scrollY: Math.max(fullHeight - 2000, 5600) }
    ];

    for (const section of scrollPositions) {
      try {
        await page.evaluate((y) => window.scrollTo(0, y), section.scrollY);
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        await page.screenshot({
          path: path.join(screenshotDir, `${section.name}.png`),
          fullPage: false
        });
        
        console.log(`Captured: ${section.name} at scroll ${section.scrollY}`);
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

captureSpecificSections();