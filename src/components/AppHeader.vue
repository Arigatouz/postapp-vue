<template>
  <div class="app-header bg-blue-900 p-4 ">
    <div class="flex justify-between items-center">
      <div class="Logo bg-white rounded-full p-1 " >
        <img src="../assets/img/Gaming-logo.png" alt="">
         </div>
      <ul id="nav" class="flex justify-around w-1/3  text-orange-300">
        <router-link to="/" tag="li"> <a>Home</a> </router-link>
        |
        <router-link to="/about" tag="li"> <a>About</a> </router-link>
        |
        <router-link to="/blogs" tag="li"> <a>Blogs</a> </router-link>
 
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
