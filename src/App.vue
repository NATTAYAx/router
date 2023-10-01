<script setup>
import { ref, computed } from "vue";

// ตัวแปร
const shopList = ref([
  { id: 1, name: "Keep in touch", table_Num: 0, img: "https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/331972356_533268055539465_3792130442034699663_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeERPp5kHSZPylEKtNK7ZTw4TrN_xP5EkdBOs3_E_kSR0PyDbpVlkxGE7mjENc6IEDAGWNjTzaghNgI_tiOqSkYQ&_nc_ohc=0SzDhTt0hoEAX_VfqQm&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfALR81x5uhmXTWtvTxiZF7RHdYA2L8NJ2-OLqmhIv4c_g&oe=65153B2E" },
  { id: 2,name: "Forest Bake", table_Num: 0, img: "https://www.bkkmenu.com/files/2018/03/ForestBake-7.jpg" },
  { id: 3,name: "Dong Madame", table_Num: 0, img: "https://www.topchiangmai.com/wp-content/uploads/2019/06/Dong-Madame-%E0%B8%94%E0%B8%87%E0%B8%A1%E0%B8%B2%E0%B8%94%E0%B8%B2%E0%B8%A1-1.jpg" },
  { id: 4,name: "Cheevit Cheeva", table_Num: 0, img: "https://www.bkkmenu.com/files/2018/09/CheevitCheevaTheCircle-1-1005x670.jpg" },
  { id: 5,name: "Wabi Cha", table_Num: 0, img: "https://scontent.fbkk29-7.fna.fbcdn.net/v/t1.6435-9/49658202_1049050941943607_4141408698905919488_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHc4bgs37qY42gHLcrEhoAMTfliGmmR_hBN-WIaaZH-EBkbaXhFFLYfQpsjkbbjGhq28AGfukjamVdRpXoOSQe1&_nc_ohc=M2tCoe-Rli4AX9bmp5N&_nc_ht=scontent.fbkk29-7.fna&oh=00_AfADOLucQxlHxLTMXXROjKtmAFJ58q0IpLqRadoaTcD3yg&oe=652BF608" },
  { id: 6,name: "Mao Coffee", table_Num: 0, img: "https://travelalotthailand.files.wordpress.com/2017/11/cover9.jpg" },
]);

const bookingList = ref([]);
const customerName = ref('');
const telNum = ref('');
const table_nums = ref(new Array(shopList.value.length).fill(0));

function navigateToHomePage() {
  const currentUrl = window.location.href;
  window.location.href = currentUrl;
}

function booking(name, tableNum, shouldClearFields) {
  if (!isNaN(tableNum) && tableNum >= 1 && tableNum <= 10) {
    if (customerName.value.trim() === '' || telNum.value.trim() === '') {
      alert("กรุณากรอกชื่อลูกค้าและเบอร์โทรศัพท์");
    } else {
      const restaurant = shopList.value.find(item => item.name === name);
      if (restaurant) {
        restaurant.table_Num = tableNum;
        bookingList.value.push({ name: restaurant.name, table_Num: tableNum, customerName: customerName.value, telNum: telNum.value });

        if (shouldClearFields) {
          customerName.value = '';
          telNum.value = '';
        }
      }
    }
  } else {
    alert("กรุณาใส่จำนวนโต๊ะที่ต้องการจอง (ไม่เกิน 10)");
  }
}

function handleInput() {
  const customerNameInput = document.getElementById('customerName');
  const telNumInput = document.getElementById('telNum');
  customerNameInput.style.color = 'black';
  telNumInput.style.color = 'black';
}

const isInputValid = computed(() => {
  return customerName.value.trim() !== '' && telNum.value.trim() !== '';
});

</script>

<template>
  <div class="container">
    <div class="tab">
      <img src="https://png.pngtree.com/template/20191203/ourmid/pngtree-coffee-logo-design-vector-image_337940.jpg" alt="Logo" class="logo" @click="navigateToHomePage" />
      <span class="text" @click="navigateToHomePage">Coffee Cafe Company</span>
    </div>
    <br>
    <div class="p-3 m-0 border-0 bd-example m-0 border-0">
      <div class="text-center">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="(restaurant, index) in shopList" :key="index">
              <div class="card bg-dark text-white" style="width: 18rem;">
                <img :src="restaurant.img" class="card-img-top fixed-size-image" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{{ restaurant.name }}</h5>
                  <p class="card-text">
                    จำนวนจองโต๊ะ(สูงสุด 10)
                    <input type="number" v-model="table_nums[index]" min="1" max="10" />
                  </p>      
                  <a href="#" class="btn btn-primary" @click="booking(restaurant.name, table_nums[index])">จองโต๊ะ</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-9">
          <div class="input-group" id="InputGroup">
            <span class="input-group-text">ชื่อลูกค้า และ เบอร์โทรศัพท์</span>
            <input type="text" class="form-control" id="customerName" v-model="customerName" @input="handleInput" />
            <input type="text" class="form-control" id="telNum" v-model="telNum" maxlength="10" @input="handleInput" />
          </div>
        </div>
        <div class="col-md-2">
          <button class="btn btn-primary" @click="booking(restaurant.name, table_nums[index], false)">ยืนยัน</button>
        </div>
      </div>
    </div>
    <br>
    <table class="table table-dark table-hover" v-if="bookingList.length > 0">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ชื่อผู้จอง</th>
          <th scope="col">เบอร์โทรศัพท์</th>
          <th scope="col">รายชื่อร้านที่จอง</th>
          <th scope="col">จำนวนโต๊ะที่จอง</th>
          <th scope="col">วันที่และเวลาที่ต้องการจอง</th> 
        </tr>
      </thead>
      <tbody>
        <tr v-for="(booking, index) in bookingList" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ booking.customerName }}</td>
          <td>{{ booking.telNum }}</td>
          <td>{{ booking.name }}</td>
          <td>{{ booking.table_Num }}</td>
          <td>{{ booking.timestamp }}</td>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-primary">ตกลง</button>
    <router-link v-for="shop in shopList" :key="shop.id" :to="'/component/' + shop.name.toLowerCase().replace(/\s+/g, '-')">
      <img :src="shop.img" alt="Shop Image" />
      {{ shop.name }}
    </router-link>
  </div>
</template>