<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <router-link
              :to="{ name: 'ThreadShow', params: { id: thread.id } }"
              >{{ thread.title }}</router-link
            >
          </p>
          <p class="text-faded text-xsmall">
            By <a href="profile.html">{{ threadUser(thread.userId).name }}</a
            >, {{ thread.publishedAt }}.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">
            {{ thread.posts.length }}
            {{ thread.posts.length > 1 ? "replies" : "reply" }}
          </p>

          <img
            class="avatar-medium"
            :src="threadUser(thread.userId).avatar"
            alt=""
          />

          <div>
            <p class="text-xsmall">
              <a href="profile.html">{{ threadUser(thread.userId).name }}</a>
            </p>
            <p class="text-xsmall text-faded">2 hours ago</p>
          </div>
        </div>
      </div>
    </div>

    <div class="pagination">
      <button class="btn-circle" disabled>
        <i class="fa fa-angle-left"></i>
      </button>
      1 of 3
      <button class="btn-circle"><i class="fa fa-angle-right"></i></button>
    </div>
  </div>
  <Dialog />
</template>

<script setup>
import SourceDate from "@/data.json";
import { ref } from "vue";
import Dialog from "./Dialog.vue";
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
