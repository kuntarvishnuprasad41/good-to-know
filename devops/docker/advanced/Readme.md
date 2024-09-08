## Layers in Docker
 Something like Cabbage, Layer by layer

Layers are reusable and cached and immutable. 

## Layers in practice

### Example given

### Caching
Lets say we have multiple applications with similar docker config. 
If we make a change to the base image, we don't need to rebuild all the images.
We can just rebuild the base image and the changes will be reflected in all the images that use it

For example node:20 and WORKDIR is same for all apps in your docker env, then both of them can be cached and reused, instead of downloading it from registery again and again. 
```
FROM node:20

WORKDIR /app

COPY . .

RUN npm install
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]
```

We can optimize this like 

```
FROM node:20

WORKDIR /app

COPY package* .
COPY ./prisma .

RUN npm install
RUN npx prisma generate


COPY . .
RUN npm run build


EXPOSE 3000

CMD ["node", "dist/index.js"]

```




