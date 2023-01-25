<script setup>
import BaseWidget from "./BaseWidget.vue"
import WidgetTitle from "./WidgetTitle.vue";

const props = defineProps({
  items: {
    type: Array, // [{label: String, value: Int, color: String}]
    required: true,
    default: () => [],
  },
  title: {
    type: String,
    required: true
  },
  detailsUrl: {
    type: String,
    required: false,
    default: "#"
  }
})
</script>

<template>
  <article>
    <WidgetTitle :title="title" />
    <BaseWidget>
      <template #header>
        <a class="details-link" :href="detailsUrl"></a>
      </template>
      <template #main>
        <div v-for="item, index in items" 
          class="item"
          :key="item" 
          :style="'color: ' + item.color">
          <div class="total"> {{ item.value }} </div>
          <div class="label"> {{ item.label }} </div>
        </div>
      </template>
    </BaseWidget>
  </article>
</template>

<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;

  :deep(header) {
    .details-link {
      width: 2.25rem;
      height: 2.25rem;
      background-image: url(/icons/expand.svg);
      position: absolute;
      top: -.5rem;
      right: -.5rem;
    }
  }

  :deep(main) {
    display: flex;
    align-items: center;

    .item {
      flex: 1 1 0;
      text-align: center;
    }
  }
}
</style>