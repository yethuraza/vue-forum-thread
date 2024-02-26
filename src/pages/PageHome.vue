<template>
  <div><h1>Welcome to the Forum</h1></div>
  <thread-list />
</template>
<script setup>
import SourceDate from "@/data.json";
import ThreadList from "../components/ThreadList.vue";
import { ref } from "vue";
const threads = ref(SourceDate.threads);
const posts = ref(SourceDate.posts);
const users = ref(SourceDate.users);

function threadPost(id) {
  return posts.value.find((p) => p.id === id);
}
function threadUser(id) {
  return users.value.find((u) => u.id === id);
}
function threadPostUser(id) {
  return users.value.find((u) => u.id === id);
}
</script>
