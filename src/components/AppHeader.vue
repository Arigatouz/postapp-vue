<template>
  <div class="app-header bg-blue-600 p-4 ">
    <div class="flex justify-around items-center">
      <div class="Logo bg-white rounded-full p-1 ">
        <img src="../assets/img/Gaming-logo.png" alt="" />
      </div>
      <ul id="nav" class="flex justify-around w-1/3  text-orange-300">
        <router-link to="/" tag="li">
          <a v-bold class="text-2xl hover:text-white text-gray-400">Home</a>
        </router-link>
        <router-link to="/about" tag="li">
          <a v-bold class="text-2xl hover:text-white text-gray-400">About</a>
        </router-link>
        <router-link to="/blogs" tag="li">
          <a v-bold class="text-2xl hover:text-white text-gray-400">Blogs</a>
        </router-link>
      </ul>
      <ul class="flex w-1/4 items-center">
        <li><input type="text" class="rounded-md w-500px h-10 px-2 " /></li>
        <li>
          <a href="#"
            ><i
              class="ml-3 focus  text-3xl text-blue-800 hover:text-gray-900 fas fa-search"
            ></i
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>
