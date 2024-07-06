# Install base image
FROM node:alpine

# Define the working directory
WORKDIR /app

# Copy package.json over to image from this directory
COPY package.json ./

# Install the dependencies
RUN npm install

# Copy over all of our remianing source code
COPY ./ ./

# Command to run when the container starts up
CMD ["npm", "start"]