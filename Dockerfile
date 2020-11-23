FROM node:14.15.1

LABEL Pavel PK Kaminsky

WORKDIR /app
COPY *.json /app/
RUN yarn

ADD src /app/src

CMD ["bash"]
