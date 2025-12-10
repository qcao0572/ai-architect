# Minimal test Dockerfile - simplest possible Next.js deployment
FROM node:18-alpine

WORKDIR /app

# Copy package files and install ALL dependencies (needed for build)
COPY package.json package-lock.json* ./
RUN npm ci

# Copy all source files
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Set NODE_ENV (PORT will be set by Koyeb at runtime)
ENV NODE_ENV=production

# Next.js automatically reads PORT from process.env.PORT
# Use npm start to ensure proper environment variable handling
# Koyeb sets PORT automatically, and Next.js will use it
CMD sh -c "PORT=${PORT:-3000} npm start"

