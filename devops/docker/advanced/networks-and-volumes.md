## Networks and volumes


Containers are transitory, 
if you kill a container after storing data, the data goes. 

If you want to keep the data in containers across the restarts we need to use volumes .

And to communicate between 2 containers we need networks. 


## Volumes 
Volumes are directories that are shared between containers. They are not part of the container, they are 
outside of the container. They are stored on the host machine. They are not deleted when the container reloads.

### How to attach a volume or directory ?

```
docker volume create volume_name
```

while starting the docker container
```
docker run -d -p 8080:8080 --name my_container -v volume_name:/data/db
```

example
```
docker run -v volume_name:/data/db -p 27017:27017 mongo
```

## Networks
Networks are used to communicate between containers. They are not part of the container, they are outside
of the container. They are stored on the host machine. They are not deleted when the container reload



