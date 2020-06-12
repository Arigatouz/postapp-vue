<template>
  <div>
    <main class="container mx-auto ">
      <h1 class="text-5xl m-10 text-center font-hairline font-bold capitalize">
        welcome to the blogs page
      </h1>
      <div class="Blogs flex-row  ">
        <BlogPost
          class="mb-12"
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :date="post.date"
          :content="post.content"
          :Author="post.Author"
          :category="post.category"
          :views="post.views"
        />
      </div>
      <div class="sidebar">
        <SideBar />
      </div>
    </main>
  </div>
</template>

<script>
import jsonPosts from "../json/posts.json";
import BlogPost from "../components/BlogPost.vue";
import SideBar from "../components/SideBar.vue";

export default {
  name: "Blogs",
  data() {
    return {
      posts: jsonPosts,
    };
  },
  components: {
    BlogPost,
    SideBar,
  },
};
</script>
