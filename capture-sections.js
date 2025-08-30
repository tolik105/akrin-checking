const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function capturePageSections() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800 });
  
  try {
    await page.goto('https://www.eiresystems.com/it-consulting-project-management/', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Wait for page to fully load
    await new Promise(resolve => setTimeout(resolve, 3000));

    const screenshotDir = '/Users/roma/Downloads/AKRIN-team/screenshots/eiresystems-sections';
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }

    // Define sections to capture
    const sections = [
      {
        name: '1-hero-section',
        selector: 'header, .hero-section, .page-header, [class*="hero"], [class*="banner"]'
      },
      {
        name: '2-it-infrastructure-pm',
        selector: '[class*="infrastructure"], .content-section:first-of-type'
      },
      {
        name: '3-office-relocation',
        selector: '[class*="relocation"], [class*="office"]'
      },
      {
        name: '4-data-center-builds',
        selector: '[class*="data-center"], [class*="datacenter"]'
      },
      {
        name: '5-business-continuity',
        selector: '[class*="continuity"], [class*="disaster"]'
      },
      {
        name: '6-business-analysis',
        selector: '[class*="analysis"], [class*="strategic"]'
      },
      {
        name: '7-migrations',
        selector: '[class*="migration"], [class*="technology"]'
      },
      {
        name: '8-footer',
        selector: 'footer, [class*="footer"]'
      }
    ];

    // Take full page screenshot first
    await page.screenshot({
      path: path.join(screenshotDir, '0-full-page.png'),
      fullPage: true
    });

    // Try to capture individual sections
    for (const section of sections) {
      try {
        const element = await page.$(section.selector);
        if (element) {
          await element.screenshot({
            path: path.join(screenshotDir, `${section.name}.png`)
          });
          console.log(`Captured: ${section.name}`);
        } else {
          console.log(`Section not found: ${section.name}`);
        }
      } catch (error) {
        console.log(`Error capturing ${section.name}:`, error.message);
      }
    }

    // Capture sections by scrolling and taking viewport screenshots
    const viewportHeight = 800;
    const fullHeight = await page.evaluate(() => document.body.scrollHeight);
    let currentPosition = 0;
    let sectionNumber = 1;

    while (currentPosition < fullHeight) {
      await page.evaluate((y) => window.scrollTo(0, y), currentPosition);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      await page.screenshot({
        path: path.join(screenshotDir, `section-${sectionNumber}-viewport.png`),
        clip: {
          x: 0,
          y: 0,
          width: 1200,
          height: Math.min(viewportHeight, fullHeight - currentPosition)
        }
      });
      
      currentPosition += viewportHeight * 0.8; // 20% overlap
      sectionNumber++;
      
      if (sectionNumber > 10) break; // Prevent infinite loop
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

capturePageSections();