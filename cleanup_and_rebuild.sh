#!/bin/bash

echo "Cleaning up the project..."

# Remove node_modules and package-lock.json
echo "Removing node_modules and package-lock.json..."
rm -rf node_modules package-lock.json

# Optionally clear npm cache
echo "Clearing npm cache..."
npm cache clean --force

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

# Start the development server
echo "Starting the development server..."
npm run dev

echo "Cleanup and rebuild complete."
