FROM node:14 as node

WORKDIR /app

COPY package-lock.json .
COPY package.json .

RUN npm install --verbose

COPY . .

# Copy .env.staging to .env BEFORE build
# RUN cp .env.staging .env


# RUN echo "VUE_APP_API_URL=https://apisuper.development.agentcis.com" > .env.production
# RUN echo "NODE_ENV=staging" >> .env.production
# RUN echo "VUE_APP_WEBSITE_URL=https://superadmin.development.agentcis.com" >> .env.production
# RUN echo "VUE_APP_AGENTCISAPP_URL=staging.agentcis.com" >> .env.production


RUN npm run build

FROM nginx as frontend_server

COPY --from=node /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]