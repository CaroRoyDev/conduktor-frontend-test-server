const resolvers = {
  // ----------------------------- QUERY --------------------------------------
  Query: {
    // returns an array of Topics that will be used to populate Topics tab on the app
    topics: (_, __, { dataSources }) => {
      return dataSources.conduktorTestAPI.getTopics();
    },

    //get a single topic by ID
    topic: (_, { id }, { dataSources }) => {
      return dataSources.conduktorTestAPI.getTopic(id);
    },
  },

  // ----------------------------- MUTATION --------------------------------------
  Mutation: {
    addTopic: async (_, { topicTitle }, { dataSources }) => {
      try {
        const newTopic = await dataSources.conduktorTestAPI.addTopic({
          title: topicTitle,
        });

        return {
          code: 200,
          success: true,
          message: "Successfully added the new topic",
          topic: newTopic,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body.message,
          topic: null,
        };
      }
    },
  },

  // ----------------------------- RESOLVERS CHAIN --------------------------------------
  Topic: {
    consumers: async ({ consumers }, _, { dataSources }) => {
      const consumersList = [];
      for (const consumerId of consumers) {
        const consumer = await dataSources.conduktorTestAPI.getConsumer(
          consumerId
        );

        consumersList.push(consumer);
      }
      return consumersList;
    },
  },
};

module.exports = resolvers;
