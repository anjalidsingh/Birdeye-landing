const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PORTFOLIO_DIR = path.join(__dirname, '../public/images/portfolio');
const SIZES = {
  card: { width: 800, height: 600 },
  modal: { width: 1200, height: 800 },
};

async function optimizeImage(inputPath, outputPath, size) {
  try {
    await sharp(inputPath)
      .resize(size.width, size.height, {
        fit: 'cover',
        position: 'center',
      })
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    console.log(`✓ Optimized: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Failed to optimize: ${path.basename(inputPath)}`, error);
  }
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
      const webpName = entry.name.replace(/\.[^.]+$/, '.webp');
      const outputPath = path.join(dir, webpName);
      
      // Create both card and modal sizes
      await optimizeImage(fullPath, outputPath.replace('.webp', '-card.webp'), SIZES.card);
      await optimizeImage(fullPath, outputPath.replace('.webp', '-modal.webp'), SIZES.modal);
    }
  }
}

// Add a simple fallback image
async function createFallbackImage() {
  const fallbackPath = path.join(PORTFOLIO_DIR, 'fallback.webp');
  
  await sharp({
    create: {
      width: 800,
      height: 600,
      channels: 4,
      background: { r: 24, g: 24, b: 27, alpha: 1 }
    }
  })
    .webp({ quality: 85 })
    .toFile(fallbackPath);
  
  console.log('✓ Created fallback image');
}

async function main() {
  console.log('🖼  Optimizing portfolio images...');
  await processDirectory(PORTFOLIO_DIR);
  await createFallbackImage();
  console.log('✨ Done!');
}

main().catch(console.error);
