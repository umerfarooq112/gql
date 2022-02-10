const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");

async function StartServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  const uri =
    "mongodb+srv://umer:Helloworld@cluster0.qr6pp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  mongoose.connect(uri);
  mongoose.connection
    .once("open", () => {
      console.log("connected");
    })
    .on("error", (error) => {
      console.log(error);
    });
  // const client = new MongoClient(uri);
  // await client.connect();

  apolloServer.applyMiddleware({ app, path: "/apis" });

  app.listen(4001, () => {
    console.log("server started listenig on port 4001");
  });
}
console.log("first");

StartServer();
