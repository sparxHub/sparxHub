#!/bin/bash

# Exit immediately if any command fails
set -e

echo "🚀 Starting deployment process..."

# Step 1: Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out

# Step 2: Set Environment Variable for PostCSS
export NEXT_PUBLIC_ASSET_PREFIX="/sparxHub"

# Step 3: Build & Export in One Step
echo "🔨 Building and exporting project with ASSET_PREFIX=${NEXT_PUBLIC_ASSET_PREFIX}..."
NEXT_EXPORT=true npm run export

# Step 4: Add .nojekyll to prevent GitHub Pages issues
echo "🛑 Adding .nojekyll..."
touch out/.nojekyll

# Step 5: Deploy using gh-pages
echo "📡 Deploying to GitHub Pages..."
npx gh-pages -d out --branch gh-pages --dotfiles

echo "✅ Deployment complete! Your site is live on GitHub Pages."
