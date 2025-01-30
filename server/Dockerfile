# Base image: Choose a Node.js image for your backend (e.g., node:16).
# Dependencies: Ensure all backend dependencies (like Express, models, etc.) are installed.
# Port configuration: If you are deploying on Heroku, you’ll likely need to set the backend to listen on the port specified by the PORT environment variable (Heroku uses dynamic ports).

# Use a lightweight Node.js image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package files first (for better build caching)
# Ensures that npm install is only re-run when dependencies change, improving build speed.
COPY package.json package-lock.json ./

# Set environment to production for optimised installs
# Speeds up dependency installation and improve performance.
ENV NODE_ENV=production

# Install dependencies
# npm ci is faster and ensures a clean install of dependencies
RUN npm ci --only=production

# Copy the rest of the application files
COPY . .

# Set environment variable for port
# Maps port 5050 on your host (your Mac) to port 5000 inside the container.
ENV PORT=5050
EXPOSE 5050

# Start the application
# Executes the start command from package.json
CMD ["npm", "start"]

# docker build -t my-backend .
# docker run -p 5050:5050 my-backend
