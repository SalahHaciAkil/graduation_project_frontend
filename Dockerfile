# dockerfile for Next.js

FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm cache clean --force
RUN npm install
# Bundle app source
COPY . .

RUN npm run build

# Run the app
CMD ["npm", "start"]