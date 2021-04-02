#!/bin/bash

yarn install

if [ $1 = 'prod' ]
    then
        yarn install
        yarn run build
    else
        yarn install
	yarn run start
fi
