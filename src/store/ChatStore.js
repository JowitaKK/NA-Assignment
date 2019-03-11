import axios from "axios";
import MockAdapter from "axios-mock-adapter";

if (process.env.NODE_ENV === "development") {
  const mock = new MockAdapter(axios);

  mock
    .onGet("/messages", { params: { username: "Lorenzo James" } })
    .reply(200, [
      { id: 1, message: "Hi Jowita, It is Lorenzo", from: "Lorenzo James" },
      { id: 2, message: "What up", from: "Jowita Knap" },
      { id: 3, message: "Its very late I want to go home", from: "Lorenzo James" },
    ]);
    
  mock
    .onGet("/messages", { params: { username: "Emanuele De Pellegrin" } })
    .reply(200, [
        { id: 1, message: "Hi Jowita, It is Emanuele", from: "Emanuele De Pellegrin"},
        { id: 2, message: "What up Emanuele", from: "Jowita Knap" },
        { id: 3, message: "I cannot talk now", from: "Emanuele De Pellegrin" },
      ]);
}

const ChatStore = {
  debug: process.env.NODE_ENV === "development",
  state: {
    username: null,
    messages: null
  },
  loadMessages(username) {
    axios
      .get("/messages", { params: { username: username } })
      .then(response => {
        if (this.debug) {
          console.log("Loaded messages for", username, response.data);
        }
        this.state.messages = response.data;
      });
  },
  startChat(username) {
    if (this.debug) {
      console.log("started chat with", username);
    }
    this.state.username = username;
  },
  finishChat() {
    if (this.debug) {
      console.log("close chat");
    }
    this.state.username = null;
  }
};

export default ChatStore;
