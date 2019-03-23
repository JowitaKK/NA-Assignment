
const ChatStore = {
  debug: process.env.NODE_ENV === "development",
  state: {
    messages: null
  },
};

export default ChatStore;