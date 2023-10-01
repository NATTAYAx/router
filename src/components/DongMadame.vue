<script setup>
import { ref, computed } from "vue";

// Define your shop list data
const shopList = ref([
  { name: "Keep in touch", table_Num: 0, img: "https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/331972356_533268055539465_3792130442034699663_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeERPp5kHSZPylEKtNK7ZTw4TrN_xP5EkdBOs3_E_kSR0PyDbpVlkxGE7mjENc6IEDAGWNjTzaghNgI_tiOqSkYQ&_nc_ohc=0SzDhTt0hoEAX_VfqQm&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfALR81x5uhmXTWtvTxiZF7RHdYA2L8NJ2-OLqmhIv4c_g&oe=65153B2E" },
  { name: "Forest Bake", table_Num: 0, img: "https://www.bkkmenu.com/files/2018/03/ForestBake-7.jpg" },
  { name: "Dong Madame", table_Num: 0, img: "https://www.topchiangmai.com/wp-content/uploads/2019/06/Dong-Madame-%E0%B8%94%E0%B8%87%E0%B8%A1%E0%B8%B2%E0%B8%94%E0%B8%B2%E0%B8%A1-1.jpg" },
  { name: "Cheevit Cheeva", table_Num: 0, img: "https://www.bkkmenu.com/files/2018/09/CheevitCheevaTheCircle-1-1005x670.jpg" },
  { name: "Wabi Cha", table_Num: 0, img: "https://scontent.fbkk29-7.fna.fbcdn.net/v/t1.6435-9/49658202_1049050941943607_4141408698905919488_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHc4bgs37qY42gHLcrEhoAMTfliGmmR_hBN-WIaaZH-EBkbaXhFFLYfQpsjkbbjGhq28AGfukjamVdRpXoOSQe1&_nc_ohc=M2tCoe-Rli4AX9bmp5N&_nc_ht=scontent.fbkk29-7.fna&oh=00_AfADOLucQxlHxLTMXXROjKtmAFJ58q0IpLqRadoaTcD3yg&oe=652BF608" },
  { name: "Mao Coffee", table_Num: 0, img: "https://travelalotthailand.files.wordpress.com/2017/11/cover9.jpg" },
]);
</script>

<template>
  <div class="container">
    <div v-for="(shop, index) in shopList" :key="index">
      <router-link :to="'/shop/' + shop.id">
        <img :src="shop.img" alt="Shop Photo" class="shop-photo" />
        <h3>{{ shop.name }}</h3>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.shop-photo {
  width: 200px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
}
</style>