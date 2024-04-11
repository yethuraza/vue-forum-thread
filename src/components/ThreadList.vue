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
              <Button label="Help" severity="help" @click="visible = true" />
            </p>
            <p class="text-xsmall text-faded">2 hours ago</p>
          </div>
        </div>

        <Dialog
          v-model:visible="visible"
          modal
          header="Edit Profile"
          :style="{ width: '25rem' }"
        >
          <span class="p-text-secondary block mb-5"
            >Update your information.</span
          >
          <div class="flex align-items-center gap-3 mb-3">
            <label for="username" class="font-semibold w-6rem">Username</label>
            <InputText id="username" class="flex-auto" autocomplete="off" />
          </div>
          <div class="flex align-items-center gap-3 mb-5">
            <label for="email" class="font-semibold w-6rem">Email</label>
            <InputText id="email" class="flex-auto" autocomplete="off" />
          </div>
          <div class="flex justify-content-end gap-2">
            <Button
              type="button"
              label="Cancel"
              severity="secondary"
              @click="visible = false"
            ></Button>
            <Button
              type="button"
              label="Save"
              @click="visible = false"
            ></Button>
          </div>
        </Dialog>
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
  <!-- <Button label="Help" severity="help" @click="visible = true" /> -->
</template>

<script setup>
import SourceDate from "@/data.json";
import { ref } from "vue";
const threads = ref(SourceDate.threads);
const posts = ref(SourceDate.posts);
const users = ref(SourceDate.users);
const visible = ref(false);
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
