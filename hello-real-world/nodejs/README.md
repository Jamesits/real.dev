# Hello Real World

Hello there, fellow coder! Now I'm going to walk you through solving this task!
Let's get started.

This is a template for NodeJS and Express. Make sure NodeJS is installed
on your machine. Some helpful links:

- https://nodejs.org/en/download/
- https://nodejs.org/en/download/package-manager/

## Step 1: Install node_modules

This template comes with a `package.json` including used dependencies.
Install it with `npm install`. If you prefer `yarn`, that also works.

## Step 2: Make changes to `index.js`

Open `index.js` in your favorite editor. As you can see, an express
server is already created and working. We just need to implement the endpoint.

Replace the TODO comment with the following code:

```
app.use('/hello', (_, res) => res.end('REAL WORLD'));
```

## Step 3: Start the server

```
node index.js
```

This should start the server, and ready to test.

## Step 4: Test locally

It's always a good idea to run the example that the task gives. Run the following
to make sure it works. The output should be the same as given in the task description example.

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
