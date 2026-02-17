#!/usr/bin/env node

/**
 * Image Compression Script
 * Compresses images in src/assets/portraits/ and src/assets/ directories
 * Creates compressed versions with _compressed suffix
 */

import { execSync } from 'child_process';
import { existsSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

// Configuration
const CONFIG = {
  quality: 85,           // JPEG/PNG quality (0-100) - increased for better quality
  maxWidth: 600,         // Max width for portraits - increased from 400
  maxWidthHero: 1600,    // Max width for hero background - increased from 1200
  outputSuffix: '_compressed',
  inputDirs: [
    'src/assets/portraits',
    'src/assets'
  ],
  outputDir: 'src/assets/compressed'
};

// Check if sharp is installed
function checkSharp() {
  try {
    require.resolve('sharp');
    return true;
  } catch {
    return false;
  }
}

// Install sharp if needed
function installSharp() {
  console.log('Installing sharp package...');
  try {
    execSync('npm install sharp --save-dev', { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error('Failed to install sharp:', error.message);
    return false;
  }
}

// Main compression function
async function compressImages() {
  // Dynamic import for sharp (ESM)
  const sharp = (await import('sharp')).default;
  
  // Create output directory
  if (!existsSync(CONFIG.outputDir)) {
    mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  const results = [];

  for (const inputDir of CONFIG.inputDirs) {
    if (!existsSync(inputDir)) {
      console.log(`Directory not found: ${inputDir}`);
      continue;
    }

    const files = readdirSync(inputDir);
    
    for (const file of files) {
      const inputPath = join(inputDir, file);
      const stats = statSync(inputPath);
      
      if (stats.isDirectory()) continue;
      
      const ext = extname(file).toLowerCase();
      if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;

      const isPortrait = inputDir.includes('portraits');
      const maxWidth = isPortrait ? CONFIG.maxWidth : CONFIG.maxWidthHero;
      const outputFileName = `${basename(file, ext)}${CONFIG.outputSuffix}.webp`;
      const outputPath = join(CONFIG.outputDir, outputFileName);

      try {
        const originalSize = stats.size;
        
        await sharp(inputPath)
          .resize(maxWidth, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ 
            quality: CONFIG.quality,
            effort: 6
          })
          .toFile(outputPath);

        const compressedSize = statSync(outputPath).size;
        const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);

        results.push({
          file,
          originalSize: (originalSize / 1024).toFixed(1) + ' KB',
          compressedSize: (compressedSize / 1024).toFixed(1) + ' KB',
          savings: savings + '%'
        });

        console.log(`✓ ${file} → ${outputFileName} (${savings}% smaller)`);
      } catch (error) {
        console.error(`✗ Failed to compress ${file}:`, error.message);
      }
    }
  }

  return results;
}

// Print summary
function printSummary(results) {
  console.log('\n' + '='.repeat(60));
  console.log('Compression Summary');
  console.log('='.repeat(60));
  
  if (results.length === 0) {
    console.log('No images were processed.');
    return;
  }

  let totalOriginal = 0;
  let totalCompressed = 0;

  results.forEach(r => {
    console.log(`${r.file}`);
    console.log(`  Original:   ${r.originalSize}`);
    console.log(`  Compressed: ${r.compressedSize}`);
    console.log(`  Savings:    ${r.savings}`);
    totalOriginal += parseFloat(r.originalSize);
    totalCompressed += parseFloat(r.compressedSize);
  });

  console.log('-'.repeat(60));
  console.log(`Total files: ${results.length}`);
  console.log(`Output directory: ${CONFIG.outputDir}`);
  console.log('='.repeat(60));
}

// Main execution
async function main() {
  console.log('Image Compression Script');
  console.log('='.repeat(60));

  if (!checkSharp()) {
    console.log('Sharp package not found.');
    if (!installSharp()) {
      process.exit(1);
    }
  }

  try {
    const results = await compressImages();
    printSummary(results);
    
    console.log('\nNext steps:');
    console.log('1. Review compressed images in:', CONFIG.outputDir);
    console.log('2. Replace original imports in components if satisfied');
    console.log('3. Or update image paths to use compressed versions');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
