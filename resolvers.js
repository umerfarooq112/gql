const { json } = require("express");
const Post = require("./models/Post");
const resolvers = {
  Query: {
    hello: () => {
      console.log("first");
      return "umer";
    },
    getAllPosts: async () => {
      console.log("posts is new here");
      try {
        return await Post.find();
      } catch (e) {
        console.log(e);
      }
    },
    findPost: async (parent, args, context) => {
      return await Post.findById(args.id);
      //  args;
    },
  },
  Mutation: {
    createPosts: async (parent, { input }, context) => {
      console.log(input);

      try {
        const post = new Post({
          title: input.title,
          description: input.description,
        });
        await post.save();
        return post;
      } catch (e) {
        console.log(e);
      }
    },
    deletePost: async (parent, args, context, info) => {
      await Post.findByIdAndDelete(args.id);
      return "Deleted";
    },
    updatePost: async (parent, args, context) => {
      console.log(args);
      const { id } = args;

      const { title, description } = args.post;
      const post = await Post.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );
      return post;
    },
  },
};

module.exports = resolvers;
