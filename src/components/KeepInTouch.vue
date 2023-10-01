<template>
  <div class="container">
    <h1>{{ route.params.name }} Details</h1>
    <img :src="shop.img" alt="https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/331972356_533268055539465_3792130442034699663_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeERPp5kHSZPylEKtNK7ZTw4TrN_xP5EkdBOs3_E_kSR0PyDbpVlkxGE7mjENc6IEDAGWNjTzaghNgI_tiOqSkYQ&_nc_ohc=0SzDhTt0hoEAX_VfqQm&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfALR81x5uhmXTWtvTxiZF7RHdYA2L8NJ2-OLqmhIv4c_g&oe=65153B2E" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const shopName = ref(route.params.name);

const shop = ref({
  name: 'Keep in Touch',
  img: 'https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/331972356_533268055539465_3792130442034699663_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeERPp5kHSZPylEKtNK7ZTw4TrN_xP5EkdBOs3_E_kSR0PyDbpVlkxGE7mjENc6IEDAGWNjTzaghNgI_tiOqSkYQ&_nc_ohc=0SzDhTt0hoEAX_VfqQm&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfALR81x5uhmXTWtvTxiZF7RHdYA2L8NJ2-OLqmhIv4c_g&oe=65153B2E',
});
</script>
