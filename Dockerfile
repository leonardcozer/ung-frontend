FROM nginx:alpine

# Copy site files to nginx html directory
COPY . /usr/share/nginx/html

# Expose nginx port
EXPOSE 80

# Use default nginx CMD