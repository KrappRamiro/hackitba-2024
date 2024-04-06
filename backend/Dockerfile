# Use the official Node.js image as base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN ["npm", "install"]

# Copy the rest of the application code
COPY . .

# Build TypeScript files
RUN ["npm", "run", "build"]

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start"]
