
const FriendsStore = {
  debug: process.env.NODE_ENV === "development",
  state: {
    friends: {
      "Lorenzo James": {
        avatar: "lorenzo-james.png"
      }, 
      "Emanuele De Pellegrin": {
        avatar: "emanuele-de-pellegrin.png"
      }
    },
  },
};

export default FriendsStore;
