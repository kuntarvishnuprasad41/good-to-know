# Creating the postgres in Docker


``` 
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres

```

### Connecting it via terminal

``` 
docker exec -it my-postgres psql -U postgres
```


