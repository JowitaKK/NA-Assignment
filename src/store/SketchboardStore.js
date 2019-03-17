
const SketchboardStore = {
  debug: process.env.NODE_ENV === "development",
  state: {
    isOpen: false,
  },
  toggle() {
    if (this.debug) {
      console.log("toggle sketchboard", this.state.isOpen, 'to' , !this.state.isOpen);
    }
    this.state.isOpen = !this.state.isOpen;
  }
};

export default SketchboardStore;
