<template>
  <div class="cards-container">
    <div class="card" v-for="card in cardCollection" :key="card.id">
      <img :src="card.url" alt="Avatar" />
      <div class="card-body">
        <h4>
          <b>{{ card.title }}</b>
        </h4>
        <p>{{ card.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card-component",
  data() {
    return {
      cardCollection: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGriPSivpoMqzlrJ3nDSVlRKOh2Wpxz5JlA&usqp=CAU",
          title: "harry",
          content: "griff",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGriPSivpoMqzlrJ3nDSVlRKOh2Wpxz5JlA&usqp=CAU",
          title: "ron",
          content: "rav",
        },
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGriPSivpoMqzlrJ3nDSVlRKOh2Wpxz5JlA&usqp=CAU",
          title: "hermonie",
          content: "slither",
        },
      ],
    };
  },
};
</script>

<style lang="scss"> 
.cards-container {
    display:flex;
    justify-content: center;
    align-items: center;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: max-content;
  margin: 10px;
  /* On mouse-over, add a deeper shadow */
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  /* Add some padding inside the card container */
  &-body {
    padding: 2px 16px;
  }
}
</style>
