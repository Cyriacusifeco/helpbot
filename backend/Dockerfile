# Container of the backend
FROM node:20-alpine3.17
WORKDIR /app
COPY . .
RUN npm install
RUN npm install bcrypt@5.0.0
EXPOSE 3000
CMD ["npm", "run", "dev"]
