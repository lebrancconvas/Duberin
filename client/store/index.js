export const state = () => ({
  wishLists: [],
  carts: []
});

export const mutations = {
  set_cart(state, item) {
    state.carts.push(item);
    console.log(`Item: ${item}`);
  }
};
