<template>
  <div class="post-list" v-for="post in posts" :key="post.id">
    <div class="post">
      <div class="user-info">
        <a href="profile.html#profile-details" class="user-name">{{
          threadPostUser(post.userId).name
        }}</a>

        <a href="profile.html#profile-details">
          <img
            class="avatar-large"
            :src="threadPostUser(post.userId).avatar"
            alt=""
          />
        </a>

        <p class="desktop-only text-small">122 posts</p>

        <p class="desktop-only text-small">50 threads</p>

        <span class="online desktop-only">Online</span>
      </div>

      <div class="post-content">
        <div>
          <p>{{ post.text }}</p>
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
</template>

<script setup>
import SourceDate from "@/data.json";
import { computed, ref } from "vue";

const props = defineProps({
  posts: {
    required: true,
    type: Array,
  },
});
const users = ref(SourceDate.users);

function threadPostUser(id) {
  return users.value.find((u) => u.id === id);
}
</script>
