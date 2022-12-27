<template lang="html">
  <div>
   <header>
    <div id="web-title">
      <h1>Duberin | Manga Store</h1>
    </div>
    <div id="web-bio">
      <h2>The Best Manga Store for Enjoyer</h2>
    </div>
   </header>
   <section id="search-section">
    <div>
      <h3>Searching Your Manga...</h3>
    </div>
    <div id="search-form">
      <Form>
        <Input id="searchbox" v-model="searchManga" placeholder="Search Your Favorite Manga..." />
        <Button type="primary" icon="ios-search" @click="searchHandle">Search</Button>
      </Form>
    </div>
   </section>
   <section id="display-section">
    <div v-for="manga in results" :key="manga.mal_id">
      <ul id="manga-list-section">
        <li id="manga-list">
          <h3>{{ manga.title }}</h3>
          <div>
            <img :src="manga.images.jpg.image_url" alt="manga image" />
          </div>
        </li>
      </ul>
    </div>
   </section>
  </div>
</template>

<script lang="js">
  import axios from 'axios';
  export default {
    data() {
      return {
        searchManga: "",
        results: []
      }
    },
    methods: {
      searchHandle() {
        const url = `https://api.jikan.moe/v4/anime?q=${this.searchManga}&sfw`;
        axios.get(url)
          .then(res => {
            this.results = res.data.data;
          })
          .catch(err => {
            console.error(err);
            console.log("[ERROR] API Fetching Error.");
          })
      }
    }
  }
</script>

<style lang="css" scoped>
  header {
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
  }

  #manga-list-section {

  }

  #manga-list {
    margin: 20px;
  }
</style>
