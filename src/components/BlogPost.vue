<template>
  <div>
    <div
      class=" w-full flex 
    rounded-lg border-l-4 
        border-r-4 border-t-4 border-b-4 border-teal-600 bg-gray-300 shadow-xl"
    >
      <div
        class="h-48 lg:h-auto  lg:w-1/3 flex-none bg-contain rounded-md rounded-r-none  text-center overflow-hidden"
        style="background-image: url('https://source.unsplash.com/random')"
        title="Woman holding a mug"
      ></div>
      <div class=" p-4 flex flex-col  justify-between  rounded-md ">
        <div class="mb-8">
          <p class="text-sm text-gray-600 flex items-center">
            <svg
              class="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
              />
            </svg>
            Member Only
            <strong class="pl-2"> {{ date }}</strong>
          </p>
          <div class="text-gray-900 font-bold text-xl mb-2">
            {{ title }}
          </div>
          <p class="text-gray-700 text-base">
            {{ content | shorten }}
          </p>
        </div>
        <div class="flex items-center gap-1 ">
          <img
            class="w-10 h-10 rounded-full mr-4 object-contain "
            src="https://randomuser.me/api/portraits/women/20.jpg"
            alt="Avatar of Jonathan Reinink"
          />
          <div class="text-sm">
            <p class="text-gray-900 leading-none font-semibold text-lg">
              {{ Author | uppercase }}
            </p>
            <p class="text-base text-gray-600 ">
              likes : {{ views }}
              <i
                class="hover  text-red-300 hover:text-red-700 text-xl fas fa-heart "
              ></i>
            </p>
            <p class="text-gray-600">
              category :<strong> {{ category }}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  data() {
    return {
      hoy: "hoy"
    };
  },
  filters: {
    uppercase: function(value) {
      return value.toUpperCase();
    }
  },
  props: ["title", "date", "content", "Author", "category", "views"]
};
</script>
