# Minimal test Dockerfile - simplest possible Next.js deployment
FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Copy all source files
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Set PORT and start
ENV PORT=3000
ENV NODE_ENV=production

# Use next start with PORT
CMD sh -c "next start -p ${PORT:-3000}"

