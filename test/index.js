const { ImageClient } = require('../src/index')
const client = new ImageClient();

(async () => {
  console.log(await client.getImage("stone"))
  console.log(await client.getTags());
})();