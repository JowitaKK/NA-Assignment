
const UsersStore = {
  debug: process.env.NODE_ENV === "development",
  state: {
    users: {
      "Lorenzo James": {
        avatar: "lorenzo-james.png"
      }, 
      "Emanuele De Pellegrin": {
        avatar: "emanuele-de-pellegrin.png"
      }
    },
  },
};

export default UsersStore;
