## BASE IMAGE

```
FROM node:16-alpine
or
FROM ubuntu:latest
```

## WORKING DIRECTORY

```
WORKDIR /app
```

## COPY OVER FILES
```
COPY . .
```

## RUN COMMANDS TO BUILD THE CODE
```
RUN npm install
RUN npm run build
RUN npx prisma studio
```

## EXPOSE a PORT
```
EXPOSE 3000
```

## CMD -> RUNS WHEN STARTING THE CONTAINER
```
CMD ["node", "src/index.js"]
```



## Docker ignore

create .dockerignore
just like gitignore ``` nopde_modules ```


## ENV 

```
docker run -e VAR_NAME=value image_name

```
You can also specify multiple environment variables by using multiple -e flags:

```
docker run -e VAR1=value1 -e VAR2=value2 my_docker_image
```


### Docker build 
``` 
docker build -t my-node-app .  
```

### Docker exec

Get into container

```
docker exec -it my_container bash
```

```
docker exec -it containerId /bin/bash
```


## Pushing image to docker hub 

