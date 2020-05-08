<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <carousel :photos="carouselPics" />
      <scrollSlider :photos="scrollSliderPics" />
      <h1 class="title text-center mb-7 mt-9">Recent Projects</h1>
      <v-row class="my-5">
        <homepageCard v-for="(item, index) in homepageCardsPics" :item="item" :key="index" />
      </v-row>
      <h1 class="title text-center mb-7 mt-9">Latest News</h1>
      <sliderWindow :photos="scrollWindowPics" />
      <fAQList />
    </v-flex>
  </v-layout>
</template>

<script>
import Carousel from "~/components/shared/Carousel";
import ScrollSlider from "~/components/shared/ScrollSlider";
import HomepageCard from "~/components/shared/HomepageCard";
import SliderWindow from "~/components/shared/SliderWindow";
import FAQList from "~/components/shared/FAQList";

// import axios from "axios";

export default {
  components: {
    Carousel,
    ScrollSlider,
    HomepageCard,
    SliderWindow,
    FAQList
  },
  data() {
    return {
      photos: {},
      videos: {
        carousel: [],
        scrollSlide: []
      },
      searchBar: ""
    };
  },
  props: ["test"],
  mounted() {
    this.updatePageImages("space");
    console.log("index mounted");
  },
  updated() {
    console.log("index update");
  },
  computed: {
    searchTerm() {
      return this.$store.state.search.searchQuery;
    },
    carouselPics() {
      return this.$store.state.search.photos.carousel;
    },
    scrollSliderPics() {
      return this.$store.state.search.photos.scrollSlider;
    },
    homepageCardsPics() {
      return this.$store.state.search.photos.homepageCards;
    },
    scrollWindowPics() {
      return this.$store.state.search.photos.scrollWindow;
    }
  },

  methods: {
    updatePageImages(query) {
      this.$store.dispatch("search/fetchImages", query);
    }
  }
};
</script>
