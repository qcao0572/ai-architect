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

# Use next start with PORT from environment
# Koyeb sets PORT automatically, so we read it from env
CMD sh -c "next start -p ${PORT:-3000}"

