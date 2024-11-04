# Use an official Node.js image as a build stage
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy project files and build the Vue.js application
COPY . .
RUN npm run build

# Production stage to serve built assets with a lightweight web server
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Configure Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
