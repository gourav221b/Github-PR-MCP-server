# Generated by https://smithery.ai. See: https://smithery.ai/docs/config#dockerfile
FROM node:lts-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --ignore-scripts

# Copy the rest of the files
COPY . .

# Build the project
RUN npm run build

# Expose a port if necessary, but MCP server uses stdio so this might not be needed

# Run the server
CMD ["npm", "start"]
