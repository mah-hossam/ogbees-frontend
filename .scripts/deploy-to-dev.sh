#!/bin/bash

set -e

echo "Deployment started ..."

# update codebase
git fetch origin development
git reset --hard origin/development

APP_NAME="ogbees"

(pm2 stop $APP_NAME) || true

APP_DIR="/var/www/html/ogbees-frontend"

cd "$APP_DIR" || { echo "Directory not found: $APP_DIR"; exit 1; }

# Install npm dependencies
echo "Installing npm dependencies..."
npm install --legacy-peer-deps

echo "Starting the app with PM2..."
pm2 start "npm run start" --name "$APP_NAME"

# Save the PM2 process list and corresponding environments
pm2 save

# Display the status of PM2 processes
pm2 status