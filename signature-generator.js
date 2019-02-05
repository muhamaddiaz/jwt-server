const crypto = require('crypto');
const hash = crypto.createHash('sha256');
// const header = require('./header.json');
// const payload = require('./payload.json');

export default function jwtTokenGenerator(header, payload) {
  let headerString = JSON.stringify(header);
  let payloadString = JSON.stringify(payload);

  let headerBase64 = Buffer.from(headerString).toString('base64');
  let payloadBase64 = Buffer.from(payloadString).toString('base64');

  let headerPayload = `${headerBase64}.${payloadBase64}`;

  let signature = hash.update(headerPayload).digest('hex');

  let jwt = `${headerPayload}.${signature}`;

  return jwt;
}

