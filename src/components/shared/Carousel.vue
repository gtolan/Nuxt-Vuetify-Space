<template>
  <div>
    <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(slide, i) in photos" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row
            class="fill-height slide-container"
            align="center"
            justify="center"
            :style="{backgroundImage:'url(' + slide.src.landscape + ')'}"
          >
            <!-- <video class="slide-video" controls width="250">
              <source :src="videos[i].video_files[0].link" type="video/mp4" />Sorry, your browser doesn't support embedded videos.
            </video>-->
            <div class="display-3">
              <h1 class="slide-title--text title">{{slide.photographer}}</h1>
              <!-- <img :src="slide.src.landscape" /> -->
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: ["photos"],
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
};
</script>

<style lang="scss" scoped>
.slide-container {
  position: relative;
  .slide-title--text {
    position: absolute;
    left: 2rem;
    margin-top: 5rem;
  }
}
</style>