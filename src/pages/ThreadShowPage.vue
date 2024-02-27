<template>
  <div class="col-large push-top">
    <ul class="breadcrumbs">
      <li>
        <a href="#"><i class="fa fa-home fa-btn"></i>Home</a>
      </li>
      <li><a href="category.html">Discussions</a></li>
      <li class="active"><a href="#">Cooking</a></li>
    </ul>
    <div>
      <h2>{{ thread.title }}</h2>

      <p>
        By
        <a href="#" class="link-unstyled">{{
          threadUser(thread.userId).name
        }}</a
        >, 2 hours ago.
        <span
          style="float: right; margin-top: 2px"
          class="hide-mobile text-faded text-small"
          >3 replies by 3 contributors</span
        >
      </p>
      <PostList :posts="threads" />
    </div>
  </div>
</template>
<script setup>
import SourceDate from "@/data.json";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import PostList from "../components/PostList.vue";
console.log(SourceDate);
const route = useRoute();
const threads = ref(SourceDate.threads);
const thread = computed(() => {
  return threads.value.find((t) => t.id === route.params.id);
});
const users = ref(SourceDate.users);

function threadUser(id) {
  return users.value.find((u) => u.id === id);
}
</script>
