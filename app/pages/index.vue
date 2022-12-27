<template lang="html">
  <div>
    <header>
      <h1>Manga Shop</h1>
      <section id="search-section">
        <h2>Search Your Favorite Manga...</h2>
        <Form id="search-form">
          <Input id="searchbox" v-model="searchManga" placeholder="Search Your Favorite Manga..." />
          <Button type="primary" icon="ios-search" @click="searchHandle">Search</Button>
        </Form>
      </section>
    </header>
    <div id="manga-list">
      <h2>List</h2>
      <div>
        <ul>
          <li v-for="manga in results" :key="manga.mal_id">
              {{ manga.title }}
              <div>
                <img :src="manga.images.jpg.image_url" alt="image" />
              </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
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
          .then((res) => {
            this.results = res.data.data;
          })
          .catch((err) => {
            console.error(err);
            console.log("[ERROR] API Fetching Error.")
          })
      }
    }
  }
</script>

<style lang="css" scoped>
  * {
    text-align: center;
  }

  #searchbox {
    width: 500px;
  }

  #manga-list {
    text-align: center;
    margin: 20px;
  }

  li {
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    border-radius: 8px;
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 1px 1px 1px 1px black;
    cursor: pointer;
  }
</style>
