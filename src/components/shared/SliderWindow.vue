<template>
  <v-card class="my-5">
    <v-window v-model="window">
      <v-window-item v-for="(n, index) in photos" :key="`card-${index}`">
        <v-card :img="n.src.landscape" color="transparent" height="200">
          <v-row
            class="fill-height white--text"
            align="center"
            justify="center"
            tag="v-card-text"
          >{{n.name}}Transparent themed, for background-imaged slides. Background color black added for demonstration purposes.</v-row>
        </v-card>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-space-between">
      <v-btn text @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-item-group v-model="window" class="text-center" mandatory>
        <v-item v-for="n in length" :key="`btn-${n}`" v-slot:default="{ active, toggle }">
          <v-btn :input-value="active" icon @click="toggle">
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
      <v-btn text @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SliderWindow",
  props: ["photos"],
  data() {
    return {
      length: 3,
      window: 0,
      showArrows: false,
      vertical: false,
      reverse: false,
      autorun: true,
      onboarding: 0
    };
  },
  created() {
    setInterval(() => {
      if (!this.autorun) return;
      if (++this.window >= this.length) this.window = 0;
    }, 4000);
    // console.log(rickAndM, "EM@");
  },
  methods: {
    next() {
      this.window = this.window + 1 === this.length ? 0 : this.window + 1;
    },
    prev() {
      this.window = this.window - 1 < 0 ? this.length - 1 : this.window - 1;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>