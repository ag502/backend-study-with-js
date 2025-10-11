# 1. 운영체제 설치
# FROM ubuntu:22.04
# 2. nodejs 설치
# RUN sudo apt install nodejs
# 3. yarn 설치
# RUN sudo npm install -g yarn

# 1 ~ 3. 운영체제 설치, node, yarn 설치
FROM node:18

RUN npm install -g pnpm

# 4. backend 폴더 복사
RUN mkdir myfolder

# 5. node_modules의 캐시 유지를 위해 먼저 복사 후 설치
COPY ./package.json /myfolder/
COPY ./pnpm-lock.yaml /myfolder/

# 6. myfolder 폴더로 이동
WORKDIR /myfolder/
RUN pnpm install

COPY . /myfolder/

# 7. 실행
CMD pnpm run start