<template lang="html">
  <div>
   <header>
    <div id="web-title">
      <h1>Duberin | Anime Store</h1>
    </div>
    <div id="web-bio">
      <h2>The Best Anime Store for Enjoyer</h2>
    </div>
   </header>
   <section id="search-section">
    <div>
      <h3>Searching Your Anime...</h3>
    </div>
    <div id="search-form">
      <Form>
        <Input id="searchbox" v-model="searchAnime" placeholder="Search Your Favorite Anime..." />
        <Button type="primary" icon="ios-search" @click="searchHandle">Search</Button>
      </Form>
    </div>
   </section>
   <section id="display-section">
    <div>
      <Card style="width:100%">
        <template #title>
            Anime List
        </template>
        <p v-for="anime in results" :key="anime.mal_id">
            <a :href="anime.url" target="_blank">{{ anime.title }}</a>
        </p>
    </Card>
    </div>
   </section>
  </div>
</template>

<script lang="js">
  import axios from 'axios';
  export default {
    data() {
      return {
        searchAnime: "",
        results: [],
        title: "Untitled",
        isLoaded: false,
        border: true,
        hover: true
      }
    },
    methods: {
      searchHandle() {
        const url = `https://api.jikan.moe/v4/anime?q=${this.searchAnime}&sfw`;
        axios.get(url)
          .then(res => {
            this.results = res.data.data;
            this.isLoaded = true;
          })
          .catch(err => {
            console.error(err);
            console.log("[ERROR] API Fetching Error.");
          })
      },
      addToCart() {
        console.log(`Add ${this.title} to Cart.`);
      },
      addToWishlist() {
        console.log(`Add ${this.title} to Wishlist.`);
      }
    }
  }
</script>

<style lang="css" scoped>
  * {
    text-align: center;
  }

  #search-section {
    margin: 20px;
    text-align: center;
  }

  #searchbox {
    width: 30%;
  }

  #display-section {
    text-align: center;
    display: grid;
    grid-template: repeat(3, 1fr);
  }

  #manga-list-section {
  }

  #manga-list {
    margin: 50px;
    padding: 10px;
    width: 30%;
    cursor: pointer;
    border: 1px solid black;
  }
</style>
