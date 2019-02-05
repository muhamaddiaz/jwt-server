let generator = require('./signature-generator');

let jwt = generator.jwtTokenGenerator(
  {
    "typ": "jwt", "alg": "HS256"
  }, 
  {
    "userId": 1,
    "name": "Muhamad Diaz",
    "hobby": "Drawing",
    "age": 21
  }
);

console.log(jwt);