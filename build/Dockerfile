FROM node:latest as build

USER root

RUN apt-get update

WORKDIR /satiscribe

COPY ../SatiscribeFrontEnd/package.json ./package.json
COPY ../SatiscribeFrontEnd/package-lock.json ./package-lock.json

RUN npm install