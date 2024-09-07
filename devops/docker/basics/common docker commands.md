## Common Docker Commands

 - 1. ``` docker images ``` : Shows all images in local
 - 2. ``` docker ps ``` : shows all running containers
 - 3. ``` docker run image ``` : Starts the container
 - 4. ``` docker run -d -p 27017:27017 image ``` : in background  with port mapped 
 - 5. ``` docker kill container_id ``` : to kill the running container 
 - 6. ``` docker rmi container_id ``` : to remove the container
 - 7. ``` docker rm container_id ``` : to remove the container
 - 8. ``` docker build ``` : to create your own container
 - . docker exec -it container_id bash : to enter the container
