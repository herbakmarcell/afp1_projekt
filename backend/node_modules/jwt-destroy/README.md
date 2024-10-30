# JWT-Destroy: The Ultimate JWT Tool
JWT-Destroy is a powerful superset of the popular jsonwebtoken npm package. It provides seamless integration with jsonwebtoken's features, allowing you to effortlessly generate and verify tokens. Additionally, with manual token expiry capabilities, JWT-Destroy empowers you with precise control over token lifetimes.

## Installation
```bash
npm install jwt-destroy@latest  # Install the latest version
```

## Usage
```javascript

const {jwt} = require('jwt-destroy');

// Register a secret key
const Operation = new jwt('secret'); // secret is the secret key by default if not provided

// Generate a token
const token = Operation.generate({id: 1, name: 'John Doe'}, '1h'); // 1h is the expiry time by default if not provided

// Generate a Login token
const token = Operation.generateLoginToken({id: 1, name: 'John Doe'}, 5, '1h'); // 1h is the expiry time by default if not provided

// Verify a token
const payload = Operation.decode(token); // Returns the payload if the token is valid, else returns a object with error message

// Destroy a token
Operation.destroy(token); // Destroys the token if it is valid & return a new Destroyed JWT object, else returns a object with error message

```

## Async/Await
```javascript

const {jwt} = require('jwt-destroy');

// Register a secret key
const operation = new jwt('secret'); // secret is the secret key by default if not provided

// Generate a token

const token = await operation.generate({id: 1, name: 'John Doe'}, '1h'); // 1h is the expiry time by default if not provided

// Verify a token

const payload = await operation.decode(token); // Returns the payload if the token is valid, else returns a object with error message

// Destroy a token

const destroyedToken = await operation.destroy(token); // Destroys the token if it is valid & return a new Destroyed JWT object, else returns a object with error message

```

## Make sure to explore this package to its full potential by using this package in your projects. Happy Coding!