# Why Docker?

  1. Container Orchestration 
  2. Running processes in isolated environments
  3. Portability and reproducibility


## Containerization 
It is a mini environment like network, server and more depending softwares which is needed by your application. Which helps consistant running of applications with dependancies

## Why Containers ?
Everyone has these problems 
1. Different OSs
2. Process of running gets complex (Like steps)
3. Dependancies grow complex as project grows

## Docker Engine 
  Allows developers to package applications into containers
  Container lets you get app src + OS libraries and dependencies required to run the code

## Docker CLI 
  It is CLI used to do docker operations

## Docker Registery
  A hub where popular docker images are stored. 

### Docker Image
  Lightweight standalone executable package 

  ```
  docker images
  ```

### Docker Container
  A running instance of a docker image.

 ```
  docker ps
  ```


## Port Mapping

```
docker run -p 8080:80 myimage
```

8080 -> Port of your system, 80 port of docker container



- [Common Docker Commands](common%20docker%20commands.md)
