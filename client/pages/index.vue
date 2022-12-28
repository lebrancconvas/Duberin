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
        <Input id="searchbox" v-model="searchAnime" placeholder="Search Your Favorite Anime..." @keypress.enter="searchHandle" />
        <Button type="primary" icon="ios-search" @click="searchHandle">Search</Button>
      </Form>
    </div>
   </section>
   <section id="display-section">
    <div v-for="anime in results" id="anime-list-section" :key="anime.mal_id" :title="anime.title">
      <Card id="anime-list" style="width:300px">
        <template #title>
          <h3>
            {{ anime.title }}
          </h3>
        </template>
        <div>
          <img :src="anime.images.jpg.image_url" :alt="anime.title" />
        </div>
        <div id="action">
          <Button type="primary" @click="addToWishlist">Wishlist</Button>
          <Button type="warning" @click="addToCart">Add to Cart</Button>
          <div id="modal">
            <Modal v-model="modal" title="Alert" @on-ok="ok" @on-cancel="cancel">
              <p>Add to Cart Success !</p>
            </Modal>
          </div>
        </div>
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
        hover: true,
        modal: false
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
      ok() {
        console.log("OK!");
        this.modal = false;
      },
      cancel() {
        console.log("Cancel!");
        this.modal = false;
      },
      addToCart() {
        this.modal = true;
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
  }

  #anime-list-section {
    display: grid;
    grid-template: repeat(3, 1fr);
  }

  #anime-list {
    margin: 20px;
    padding: 10px;
    width: 50%;
    cursor: pointer;
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 1px 1px 1px 1px rgb(23, 21, 68);
  }
</style>
