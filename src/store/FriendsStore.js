

const FriendsStore = {
  debug: process.env.NODE_ENV === "development",
  state: {
    friends: {
      "Lorenzo James": {
        avatar: "../assets/lorenzo-james.png"
      }, 
      "Emanuele De Pellegrin": {
        avatar: "../assets/emanuele-de-pellegrin.png"
      }
    },
    me: 'Jowita Knap',
    avatar: ""
  },
};

export default FriendsStore;
