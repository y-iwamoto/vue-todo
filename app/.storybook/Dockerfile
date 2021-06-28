# Select reference image
FROM node:14.15.3-alpine

# Create app directory
WORKDIR /app

COPY ../package*.json ./

RUN npm install
# Copy project files into the docker image
COPY ../. .

# Make port 3001 available
EXPOSE 3001

# run storybook app
CMD ["npm", "run", "storybook"]