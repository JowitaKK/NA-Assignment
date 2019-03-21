const ChatStore = {
  debug: process.env.NODE_ENV === "development",
  state: {
    users: null,
    messages: null
  },
  startChat(username) {
    console.log("chat staretd")
    if (this.debug) {
      console.log("added to the chat", username);
    }
    if (this.state.users === null) {
      this.state.users = [username]
    } else {
      if (this.state.users.includes(username) === false) {
        this.state.users.push(username)
      }

    }
  },
  finishChat() {
    if (this.debug) {
      console.log("close chat");
    }
    this.state.users = null;
  }
};

export default ChatStore;