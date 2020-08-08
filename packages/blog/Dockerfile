FROM node:alpine

# Set working directory
WORKDIR /usr/app/blog

# Copy "package.json", "yarn.lock" and ".yarnrc" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package.json ./
COPY ./.yarnrc ./

# Install dependencies
RUN yarn

# Copy all files
COPY ./ ./

# Build app
RUN yarn build

# Expose the listening port
EXPOSE 3001

# Install PM2 globally
RUN npm install --global pm2

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Launch app with PM2
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]
