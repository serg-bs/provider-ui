# ---- Base ----
FROM node:12.8.1-slim AS base

WORKDIR /

COPY . ./
RUN npm run build


# ---- Release ----
FROM nginx
#ARG appVersion
#ARG buildDatetime
#ARG commit
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=base /build /usr/share/nginx/html/
