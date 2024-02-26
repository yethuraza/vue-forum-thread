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

      <div class="post-list" v-for="post in thread.posts" :key="post">
        <div class="post">
          <div class="user-info">
            <a href="profile.html#profile-details" class="user-name">{{
              threadPostUser(threadPost(post).userId).name
            }}</a>

            <a href="profile.html#profile-details">
              <img
                class="avatar-large"
                :src="threadPostUser(threadPost(post).userId).avatar"
                alt=""
              />
            </a>

            <p class="desktop-only text-small">107 posts</p>

            <p class="desktop-only text-small">23 threads</p>

            <span class="online desktop-only">online</span>
          </div>

          <div class="post-content">
            <div>
              <p>{{ threadPost(post).text }}</p>
            </div>
            <a
              href="#"
              style="margin-left: auto"
              class="link-unstyled"
              title="Make a change"
              ><i class="fa fa-pencil"></i
            ></a>
          </div>

          <div class="post-date text-faded">6 hours ago</div>

          <div class="reactions">
            <ul>
              <li>💡</li>
              <li>❤️</li>
              <li>👎</li>
              <li>👍</li>
              <li>👌</li>
            </ul>
            <button class="btn-xsmall"><span class="emoji">❤️</span>️ 3</button>
            <button class="btn-xsmall active-reaction">
              <span class="emoji">👌️</span>️ 1
            </button>
            <button class="btn-xsmall">
              + <i class="fa fa-smile-o emoji"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import SourceDate from "@/data.json";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
console.log(SourceDate);
const route = useRoute();
const threads = ref(SourceDate.threads);
const thread = computed(() => {
  return threads.value.find((t) => t.id === route.params.id);
});
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
