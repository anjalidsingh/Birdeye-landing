const fs = require('fs');
const path = require('path');
const https = require('https');

// Define image sources directly in the script
const serviceImages = {
  aerialPhotography: {
    url: "https://images.unsplash.com/photo-1506947411487-a56738267384",
    query: "drone aerial photography"
  },
  mapping3D: {
    url: "https://images.unsplash.com/photo-1494894194458-0174142560c0",
    query: "drone mapping terrain"
  },
  inspection: {
    url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece",
    query: "drone inspection"
  },
  realEstate: {
    url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    query: "drone real estate"
  },
  events: {
    url: "https://images.unsplash.com/photo-1551972251-12070d63502a",
    query: "drone event"
  },
  agriculture: {
    url: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff",
    query: "drone agriculture"
  }
};

const portfolioImages = {
  architecture: [
    {
      url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90",
      query: "drone city architecture"
    }
  ],
  realEstate: [
    {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      query: "luxury home drone"
    }
  ],
  nature: [
    {
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      query: "drone nature"
    }
  ]
};

const blogImages = {
  guide: {
    url: "https://images.unsplash.com/photo-1524143986875-3b098d78b363",
    query: "drone pilot camera"
  },
  buying: {
    url: "https://images.unsplash.com/photo-1508614589041-895b88991e3e",
    query: "drone equipment"
  },
  maintenance: {
    url: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60",
    query: "drone repair"
  }
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const writeStream = fs.createWriteStream(filepath);
        response.pipe(writeStream);
        writeStream.on('finish', () => {
          writeStream.close();
          resolve();
        });
      } else {
        reject(`Failed to download ${url}: ${response.statusCode}`);
      }
    }).on('error', reject);
  });
};

const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

async function downloadAllImages() {
  const publicDir = path.join(__dirname, '../public');
  const directories = ['services', 'portfolio', 'blog'].map(dir => 
    path.join(publicDir, 'images', dir)
  );

  // Create directories
  directories.forEach(ensureDirectoryExists);

  // Download service images
  for (const [key, image] of Object.entries(serviceImages)) {
    const filepath = path.join(publicDir, 'images', 'services', `${key}.jpg`);
    console.log(`Downloading service image: ${key}`);
    await downloadImage(image.url, filepath);
  }

  // Download portfolio images
  for (const [category, images] of Object.entries(portfolioImages)) {
    const categoryDir = path.join(publicDir, 'images', 'portfolio', category);
    ensureDirectoryExists(categoryDir);
    
    for (let i = 0; i < images.length; i++) {
      const filepath = path.join(categoryDir, `${i + 1}.jpg`);
      console.log(`Downloading portfolio image: ${category}/${i + 1}`);
      await downloadImage(images[i].url, filepath);
    }
  }

  // Download blog images
  for (const [key, image] of Object.entries(blogImages)) {
    const filepath = path.join(publicDir, 'images', 'blog', `${key}.jpg`);
    console.log(`Downloading blog image: ${key}`);
    await downloadImage(image.url, filepath);
  }

  console.log('All images downloaded successfully!');
}

downloadAllImages().catch(console.error);
