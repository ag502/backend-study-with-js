# 1. 운영체제 설치
# FROM ubuntu:22.04
# 2. nodejs 설치
# RUN sudo apt install nodejs
# 3. yarn 설치
# RUN sudo npm install -g yarn

# 1 ~ 3. 운영체제 설치, node, yarn 설치
FROM node:18

# 4. backend 폴더 복사
RUN mkdir myfolder
COPY . /myfolder/

# 5. myfolder 폴더로 이동
WORKDIR /myfolder/

# 6. 모듈 설치
RUN yarn install

# 5. 실행
CMD yarn start