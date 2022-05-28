# ---- Base ----
FROM node:12.8.1-slim AS base
#Копируем файлы внутрь докер контейнера
COPY . ./
#Компилируем реакт приложение в статические файлы
RUN npm run build


# ---- Production ----
FROM nginx

#Копируем из предыдущего контейнера скомпилированные файлы в дирректорию
COPY --from=base /build /usr/share/nginx/html/
