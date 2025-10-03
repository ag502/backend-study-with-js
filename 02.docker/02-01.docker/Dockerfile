# 1. 운영체제 설치
# FROM ubuntu:22.04
# 2. nodejs 설치
# RUN sudo apt install nodejs
# 3. yarn 설치
# RUN sudo npm install -g yarn

# 1 ~ 3. 운영체제 설치, node, yarn 설치
FROM node:14

# 4. index.js 파일 복사
COPY ./index.js /index.js

# 5. 실행
CMD node index.js