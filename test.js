let generator = require('./signature-generator');

let jwt = generator.jwtTokenGenerator({
  "typ": "jwt", "alg": "HS256"}, 
  {"userId": 1}
);

console.log(jwt);