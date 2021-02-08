const axios = require('axios');
const BASEURL = "http://api.sasaki.me:4444";

class ImageClient {
  constructor() {};

  async getImage(imageTag) {
    const res = await axios.get(BASEURL + `/${imageTag.toLowerCase()}`).catch(() => null);
    if(res === null) return null;
    else return res.data;
  }

  async getTags() {
    const res = await axios.get(BASEURL + `/endpoints`).catch(() => null);
    if(res === null) return null;
    else return res.data;
  }
}

module.exports = ImageClient;