

const SettingsStore = {
  debug: process.env.NODE_ENV === "development",
  state: {
    me: 'Jowita Knap',
    avatar: "logo.png"
  },
};

export default SettingsStore;
