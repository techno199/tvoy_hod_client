#!/usr/bin/env bash

if [[ ! -f ".env" ]]; then
  echo "заполните переменные окружения ва файле .env"
  exit 1
fi

source .env
export $(cut -d= -f1 .env)

if [ -z "${DOCKER_NGINX_PORT}" ]; then
  NGINX_PORT=8080
  while [[ $(sudo lsof -i:$NGINX_PORT | wc -l) -gt 0 ]]; do ((NGINX_PORT++)); done

  echo "DOCKER_NGINX_PORT=${NGINX_PORT}" >>.env
fi

if [ -z "${DOCKER_NGINX_SSL_PORT}" ]; then
  NGINX_SSL_PORT=9080
  while [[ $(sudo lsof -i:$NGINX_SSL_PORT | wc -l) -gt 0 ]]; do ((NGINX_SSL_PORT++)); done

  echo "DOCKER_NGINX_SSL_PORT=${NGINX_SSL_PORT}" >>.env
fi


if [ -z "${DOCKER_NODE_PORT}" ]; then
  NODE_PORT=3000
  while [[ $(sudo lsof -i:$NODE_PORT | wc -l) -gt 0 ]]; do ((NODE_PORT++)); done

  echo "DOCKER_NODE_PORT=${NODE_PORT}" >>.env
fi

source .env
export $(cut -d= -f1 .env)

export DOLLAR='$'

CONF_FILE=''
if [[ "${APP_ENV}" == "prod" ]]; then
  CONF_FILE='.prod'
fi

if [[ "${USE_SSL}" == "1" ]]; then
  NG_CONFIG=symfony.ssl.conf.template
else
  NG_CONFIG="symfony.conf${CONF_FILE}.template"
fi

envsubst <./docker/nginx/${NG_CONFIG} >./docker/nginx/symfony.conf

DOCKER_FILE="docker-compose.yml"
if [[ "${APP_ENV}" == "dev" ]]; then
    DOCKER_FILE="docker-compose-develope.yml"
fi

source .env

if [[ "$USER" == "jenkins" ]]; then
  docker-compose -f ${DOCKER_FILE} build --force
  docker-compose -f ${DOCKER_FILE} up -d
  docker-compose -f ${DOCKER_FILE} exec -T front_nginx chmod -R 0777 /var/tmp/nginx/
  docker-compose -f ${DOCKER_FILE} exec -T nodejs yarn install
else
  sudo docker-compose -f ${DOCKER_FILE} build --force
  sudo docker-compose -f ${DOCKER_FILE} up -d
  sudo docker-compose -f ${DOCKER_FILE} exec -T front_nginx chmod -R 0777 /var/tmp/nginx/
  sudo docker-compose -f ${DOCKER_FILE} exec -T nodejs yarn install
fi
