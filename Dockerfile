FROM mcr.microsoft.com/playwright:v1.33.0-jammy

WORKDIR /app

COPY . /app

RUN npm install

CMD ["npx", "playwright", "test"]