import ENDPOINTS from "./endpoints";

const BASE_URL = 'http://localhost:3300';

class Api {
  constructor(baseUrl, endpoints) {
    this.baseUrl = baseUrl;
    this.endpoints = endpoints;
  }

  async generateRequest(endpoint, data) {
    const {method, uri, body, headers} = this.endpoints[endpoint];

    // return fetch(`${this.baseUrl}${uri}`, {method, body: data});
    return fetch(`${this.baseUrl}${uri}`, {method, body, headers});
  }

  async fetch(endpoint, data) {
    const response = await this.generateRequest(endpoint, data);

    return response.json();
  }
}

export default new Api(BASE_URL, ENDPOINTS)