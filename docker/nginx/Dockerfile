FROM alpine:3.8

MAINTAINER Vincent Composieux <vincent.composieux@gmail.com>

RUN apk add --update nginx
RUN rm -rf /var/cache/apk/* && rm -rf /tmp/* && rm -f /etc/nginx/conf.d/default.conf

ADD nginx.conf /etc/nginx/
ADD symfony.conf /etc/nginx/conf.d/

RUN adduser -D -g '' -G www-data www-data

CMD nginx

EXPOSE 80
EXPOSE 443
