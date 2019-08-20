# Hello Real World

Hello there, fellow coder! Now I'm going to walk you through solving this task!
Let's get started.

This is a template for Docker. Make sure you have that installed on your machine.

## Step 1: Docker image

The provided `Dockerfile` is left empty. You can use your favorite HTTP server to
complete this task, but for now, let's try an [nginx](https://hub.docker.com/_/nginx).

Add the following into `Dockerfile`

```
FROM nginx
```

## Step 2: Implement the required endpoint

The task asks to write a `/hello` endpoint, we can simply do that by
writing a file to the nginx served content. Use `-n` for `echo` to
omit the ending newline.

```
RUN echo -n "REAL WORLD" > /usr/share/nginx/html/hello
```

## Step 3: Read the config correctly

The most challenging part of this approach is to read the `PORT` config correctly.
After reading the official nginx image README, we can do the following
to replace the PORT config into nginx config before starting the server.

```
CMD /bin/bash -c 'sed -i "s/80/$PORT/" /etc/nginx/conf.d/default.conf && exec nginx -g "daemon off;"'
```

## Step 4: Test locally

It's always a good idea to run the example that the task gives.
Build your docker image first, like this:

```
docker build -t hello-real-world .
```

Then start it and provide it with the correct config

```
docker run --rm -it -e PORT=8080 -p 8080:8080 test
```

Now you should have a running nginx server with the required endpoint.
Run the following to make sure it works.

```
curl http://localhost:8080/hello
```

## Step 5: Submit for testing

You're ready! Let's do it!

```
real submit .
```

This will submit your code for testing, and a test result should show up
on both your CLI and the link printed when you run the command.

If you see `Bravo! Good job!`, that means yes!

## Volla!

Now you've solved your first task! Go get more and have fun!
