const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get all topics"
    topics: [Topic]!
    "Fetch a specific topic, provided a topic's ID"
    topic(id: ID!): Topic
  }

  type Mutation {
    "Mutation to add a topic to the current list"
    addTopic(topicTitle: String!): AddTopicResponse!
  }

  type AddTopicResponse {
    "Similar to HTTP Status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly added topic after a successful mutation"
    topic: Topic
  }

  """
  A topic represents a category used to organize messages
  Producers write data to a topic then consumers read data from this topic
  """
  type Topic {
    id: ID!
    "The topic's title"
    title: String!
    "Determine if the topic was faved or not"
    starred: Boolean
    "A list of the data consumer for this topic"
    consumers: [Consumer]!
    "All the messages the topic has stored and published"
    datas: [TopicData]!
  }

  "A subscriber to Kafka topics who receive messages from them. "
  type Consumer {
    id: ID!
    "The consumers's title"
    title: String!
    "Indicates whether the consumer is active or not for data reading"
    isActive: Boolean!
  }

  type TopicData {
    timestamp: String!
    key: String
    content: String
  }
`;

module.exports = typeDefs;
