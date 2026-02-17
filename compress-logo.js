#!/usr/bin/env node

/**
 * Logo Compression Script
 * Compresses logo.png from public/ directory with high quality settings
 */

import { execSync } from 'child_process';
import { existsSync, mkdirSync, statSync } from 'fs';
import { join } from 'path';

// Configuration
const CONFIG = {
  inputFile: 'public/logo.png',
  outputFile: 'public/logo_compressed.webp',
  quality: 90,
  maxWidth: 300,
  maxHeight: 300
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
async function compressLogo() {
  const sharp = (await import('sharp')).default;
  
  if (!existsSync(CONFIG.inputFile)) {
    console.error(`Logo file not found: ${CONFIG.inputFile}`);
    process.exit(1);
  }

  const originalSize = statSync(CONFIG.inputFile).size;
  
  await sharp(CONFIG.inputFile)
    .resize(CONFIG.maxWidth, CONFIG.maxHeight, {
      withoutEnlargement: true,
      fit: 'inside'
    })
    .webp({
      quality: CONFIG.quality,
      effort: 6
    })
    .toFile(CONFIG.outputFile);

  const compressedSize = statSync(CONFIG.outputFile).size;
  const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);

  console.log('✓ Logo compressed successfully');
  console.log(`  Original:   ${(originalSize / 1024).toFixed(1)} KB`);
  console.log(`  Compressed: ${(compressedSize / 1024).toFixed(1)} KB`);
  console.log(`  Savings:    ${savings}%`);
  console.log(`  Output:     ${CONFIG.outputFile}`);
}

// Main execution
async function main() {
  console.log('Logo Compression Script');
  console.log('='.repeat(40));

  if (!checkSharp()) {
    if (!installSharp()) {
      process.exit(1);
    }
  }

  try {
    await compressLogo();
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
