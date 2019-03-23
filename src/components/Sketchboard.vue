<template >
  <div class="sketchboard default-border default-shadow" v-if="isSketchboardOpen">
    <div class="sketchboard-header">
      <h4>Sketchboard</h4>
    </div>
    <div class="sketchboard-content"></div>
  </div>
</template>

<style>
.sketchboard {
  min-width: 50%;
  margin-top: 16px;
  margin-left: 3%;
  margin-right: auto;
}
@media screen and (max-width: 1200px) {
  .sketchboard {
    min-width: 70%;
  }
}
@media screen and (max-width: 800px) {
  .sketchboard {
    min-width: 80%;
  }
}
.sketchboard-header h4 {
  text-align: center;
  margin-bottom: 0px;
}
.sketchboard-content {
  height: 480px;
  background-color: white;
}
</style>

<script>
import Sketchboard from "../store/SketchboardStore";

export default {
  name: "sketchboard",
  data: () => {
    return {
      privateState: {},
      sketchboard: Sketchboard.state
    };
  },
  computed: {
    isSketchboardOpen: function() {
      return this.sketchboard.isOpen;
    }
  }
};
</script>
