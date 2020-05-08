<template>
  <div>
    <v-sheet class="mx-auto my-4" elevation="8">
      <v-slide-group
        v-model="model"
        class="pa-4"
        :prev-icon="prevIcon ? 'mdi-minus' : undefined"
        :next-icon="nextIcon ? 'mdi-plus' : undefined"
        :multiple="multiple"
        :mandatory="mandatory"
        :show-arrows="showArrows"
        :center-active="centerActive"
      >
        <v-slide-item v-for="(n,index) in photos" :key="`n-${index}`">
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4 overflow-hidden"
            height="200"
            width="100"
            @click="openLightbox(n)"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <img :src="n.src.portrait" class="d-flex full-size" />
                <v-icon v-if="active" color="white" size="48" v-text="'mdi-close-circle-outline'"></v-icon>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
      <lightbox :modalOpen="modalOpen" :imageData="imageData" :toggleModal="handleToggleModal" />
    </v-sheet>
  </div>
</template>

<script>
import Lightbox from "./Lightbox";
export default {
  components: { Lightbox },
  name: "ScrollSlider",
  props: ["photos"],
  data() {
    return {
      model: null,
      multiple: false,
      mandatory: false,
      showArrows: true,
      prevIcon: false,
      nextIcon: false,
      centerActive: false,
      modalOpen: false,
      imageData: null,
      active: false
    };
  },
  methods: {
    openLightbox(imageData) {
      console.log("openModal");
      this.modalOpen = true;
      this.imageData = imageData;
    },
    handleToggleModal() {
      console.log("handle toggle modal");
      this.modalOpen ? (this.modalOpen = false) : (this.modalOpen = true);
    }
  }
};
</script>

<style lang="scss" scoped>
img.full-size {
  width: 100%;
  height: 100%;
}
</style>