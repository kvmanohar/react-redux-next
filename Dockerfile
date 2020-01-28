FROM node:10-alpine

WORKDIR /usr/src/app

# install dependencies
COPY package*.json ./
RUN npm install

# copy source files
COPY . .

# build application
RUN npm run build

# run application
ENTRYPOINT ["npm", "start"]

# To run the docker in the terminal follow the below steps
# 1. cd into the folder where the docker file is
# 2. Build the docker image using the below command
#   docker build -t nameToTheImage .
# 3. Run the docker in detached mode and map the port 3000 to docker port 3000
#   docker run -p 3000:3000 -d nameToTheImage