# AKRIN Website Assets

This folder contains all the essential assets required for the AKRIN website project.

## Directory Structure

### `/logos`
Contains all logo variations:
- `akrin-logo.svg` - Main AKRIN logo
- `Akrin-header.svg` - Header version of logo
- `better-logo-transparent.svg` - Transparent logo variant
- `Container -- 2.svg` - Container graphic
- `Mask group.svg` - Mask group graphic

### `/favicons`
All favicon files for different platforms:
- `favicon.svg` - SVG favicon
- `favicon-newassets.svg` - Alternative favicon design
- `favicon-16x16.png` - 16x16 favicon
- `favicon-32x32.png` - 32x32 favicon
- `favicon-96x96.png` - 96x96 favicon
- `favicon-192x192.png` - 192x192 favicon
- `favicon-512x512.png` - 512x512 favicon
- `apple-touch-icon.png` - Apple touch icon
- `apple-touch-icon-120x120.png` - 120x120 Apple icon
- `apple-touch-icon-152x152.png` - 152x152 Apple icon

### `/videos`
Video assets for the website:
- `akr_A_loop.mp4` - AKRIN logo animation loop
- `akrin_hyper_realistic_video.mp4` - Hyper-realistic video
- `last.mp4` - Last video
- `new-server.mp4` - New server video
- `server rack.mp4` - Server rack video
- `server.mp4` - Server video
- `test.mp4` - Test video

### `/images`
General images and graphics:
- `background test.svg` - Background test graphic
- `hero-background.svg` - Hero section background
- `grid.svg` - Grid pattern
- `og-image.png` - Open Graph image
- `og-image.svg` - Open Graph image (SVG)

### `/fonts`
Web fonts:
- `Inter-VariableFont_slnt,wght.ttf` - Inter variable font
- `Inter.var.woff2` - Inter WOFF2 format
- `Lora-VariableFont_wght.ttf` - Lora variable font
- `Lora.var.woff2` - Lora WOFF2 format

### `/brand`
Brand-specific assets:
- `akrin-colors.css` - AKRIN brand colors CSS
- `hero.png` - Hero section image
- `for bacground.png` - Background image

### Root Files
- `manifest.json` - PWA manifest file

## Usage Notes

1. **Logos**: Use SVG versions when possible for scalability
2. **Favicons**: All sizes are provided for different devices and platforms
3. **Videos**: Ensure proper compression for web performance
4. **Fonts**: Variable fonts are used for flexibility and performance
5. **Images**: SVG preferred for graphics, PNG for photos

## Migration Notes

These assets have been organized from various locations in the project:
- Previously in `/public`, `/newassets`, and other directories
- Now centralized for easier management and deployment
- Update import paths in code when referencing these assets