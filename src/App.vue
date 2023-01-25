<script setup>
import { computed, onMounted } from "vue";
import { RouterView, useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuth } from "@/stores/auth.js";
import MainHeader from "@/components/layout/MainHeader.vue";

const { session } = storeToRefs(useAuth());
// if (!session.value && useRouter().currentRoute.value.name !== "login") {
//   redirect to login
//   window.location.href = '/login';
//   session.value = true;
// }
// const currentRoute = computed(() => useRouter().currentRoute.value.path);
// if (currentRoute !== "/login") {
//   // ignoring for now to build dashboard
//   session.value = true
// } else {
//   session.value = false
// }
// console.log("session", session.value);
const route = useRoute()
const router = useRouter()

onMounted(async () => {
  await router.isReady() 
  console.log('route.path', route.name)
  if (route.name === "login") {
    session.value = false
  } else {
    session.value = true
  }
})

</script>

<template>
  <template v-if="session">
    <MainHeader />
    <main>
      <RouterView />
    </main>
  </template>
  <template v-else>
    <RouterView />
  </template>
</template>

<style scoped></style>

<style lang="scss">
@import "./assets/scss/reset";
@import "./assets/scss/fonts";
@import "./assets/scss/base";
@import "./assets/scss/form";

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  //padding: 0 4rem;

  & > header {
    flex: 0 0 13rem;
    padding: 2rem 4rem;
  }

  & > main {
    flex: 1;
    gap: 2rem;
    padding: 0 4rem 4rem 4rem;
    //height: calc(100vh - 4rem);
    overflow: hidden;
  }
}
</style>
