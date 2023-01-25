<script setup>
import LoadingState from "@/components/atoms/LoadingState.vue";

defineProps({
  cssClass: {
    type: String,
    required: false,
    default: "",
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <section class="widget" :class="cssClass">
    <LoadingState v-if="loading" />
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
  </section>
</template>


<style lang="scss">
@import "@/assets/scss/mixins/borders";
@import "@/assets/scss/mixins/padding";
@import "@/assets/scss/mixins/transitions";

.widget {
  @include border-rounded;
  @include padding-component;
  @include transition;

  position: relative;
  background-color: var(--color-background);
  box-shadow: 0px 0px 20px -16px var(--color-text);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;

  & > header,
  & > main {
    display: flex;
    gap: 4rem;

    &:empty {
      display: none;
    }
  }

  & > header {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex: 0 0 0;

    h2 {
      font-size: 2.1rem;
      font-weight: 600;
    }
  }

  & > main {
    flex: 1 1 auto;
    overflow: auto;
  }
}
</style>
