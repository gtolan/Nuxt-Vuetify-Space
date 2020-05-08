import axios from "axios";

export const state = () => ({
    searchQuery: 'space',
    photos: {
        carousel: [],
        scrollSlider: [],
        homepageCards: [],
        scrollWindow: []
      },
})

export const getters = {
  
    currentSearchQuery(state) {
      if (state.user && state.user.searchQuery) return state.user.searchQuery
      else return null
    }
  }

  export const actions = {  
    fetchImages({commit, state}, searchTerm) {
        console.log('[STORE ACTIONS] - fetch-images--setSearchQuery')

        const instance = axios.create({
            baseURL: "https://api.pexels.com/"
          });
    
          // Alter defaults header options
          instance.defaults.headers.common["Authorization"] =
            "563492ad6f917000010000014d75737b669f4b318873533b8fa10802";
    
          //Assign images to each section
        
          let url = `v1/search?query=${searchTerm}&per_page=20&page=1`;
          instance.get(url).then(res => {
            let carouselPics = res.data.photos.slice(0, 4);
            let scrollWindowPics = res.data.photos.slice(5, 8);
            let homepageCardsPics = res.data.photos.slice(9, 12);
            let scrollSliderPics = res.data.photos.slice(12);
            console.log(res, "PICS")
            commit('setSearchPhotos', {a:'carousel', b:carouselPics})
            commit('setSearchPhotos', {a:'scrollWindow', b:scrollWindowPics})
            commit('setSearchPhotos', {a:'homepageCards', b:homepageCardsPics})
            commit('setSearchPhotos', {a:'scrollSlider', b:scrollSliderPics})
          });    
      },



    setSearchQuery({commit}, searchTerm) {
      console.log('[STORE ACTIONS] - setSearchQuery')
      commit('setSearchQuery', searchTerm)
    }  
  }
  export const mutations = {
    setSearchQuery (state, searchTerm) {
      console.log('[STORE MUTATIONS] - changeSearchTerm:', searchTerm)
      state.searchQuery = searchTerm;
    },
    setSearchQuery (state, searchTerm) {
        console.log('[STORE MUTATIONS] - changeSearchTerm:', searchTerm)
       state.searchQuery = searchTerm;
    },
    setSearchPhotos (state, itemsObj) {
        console.log('[STORE MUTATIONS] - setPhotos:',state, itemsObj)
        if(!state.photos[itemsObj.a]) return;
        state.photos[itemsObj.a] = itemsObj.b
    },

  }