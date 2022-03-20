const { RESTDataSource } = require("apollo-datasource-rest");

class ConduktorTestAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.restpoint.io/api/";
  }

  willSendRequest(request) {
    request.headers.set("x-endpoint-key", "6ab4cb4f206f4ad5897640fd88d0d641");
  }

  async getTopics() {
    const resp = await this.get("topics/");
    return resp.data;
  }

  async getTopic(topicId) {
    const resp = await this.get(`topics/${topicId}`);
    return resp.data;
  }

  async getConsumer(consumerId) {
    return await this.get(`consumer/${consumerId}`);
  }

  async addTopic(topic) {
    return this.post("topics", topic);
  }
}

module.exports = ConduktorTestAPI;
