# use an official Node runtime as a parent image
FROM node:22.10
LABEL authors="paulkirchhoff"

# Set the working directory to /app
WORKDIR /app

# Copy the package and package-lock.json to the working directory
COPY ./package*.json ./

# Install the dependencies
RUN npm install

# Copy the remaining application files to the working directories
COPY . .

# build the application
RUN npm run build

# Expose the port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
