## Steps to Build and Run the Docker Container

### Step 1
Create the `Dockerfile`:
- Use a lightweight base image.
- Install dependencies.
- Copy the application code.
- Specify the command to run the application.

### Step 2
Build the Docker image:
```sh
docker build -t <name> .
```

### Step 3
Run the Docker container:
```sh
docker run -dt <imageid>
```

### Step 4
Verify the container is running properly and check its logs:
```sh
docker logs <containerid>
```