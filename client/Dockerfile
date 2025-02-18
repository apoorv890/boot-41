# Use an official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if exists) to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that your React app runs on
EXPOSE 3000

# Start the React development server
CMD ["npm", "run", "dev"]
