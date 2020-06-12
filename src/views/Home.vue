<template>
  <div class="home">
    <div class="hero flex justify-center items-center mt-16 ">
      <div class="Description w-1/2 text-justify ml-10  ">
        <h1 v-bold class="description__title text-center text-5xl mb-12 capitalize  ">
          welcome to the Game solution
        </h1>
        <p class="description__paragraph text-lg text-justify font">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          eaque quod nesciunt, adipisci et quidem expedita tempora ipsa
          doloribus perspiciatis porro nostrum voluptatem ea veniam, optio
          asperiores fuga quis atque!
        </p>
      </div>
      <div class="hero__image   lg:w-1/2">
        <img
          class=" w-4/5 ml-32 "
          src="../assets/img/gaming-hero.svg"
          alt="hero_image"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>
