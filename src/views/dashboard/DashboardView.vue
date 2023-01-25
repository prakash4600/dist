<script setup>
  import SummaryFilters from './SummaryFilters.vue';
  import BaseWidget from '../../components/widgets/BaseWidget.vue';
</script>

<template>
<div class="dashboard">
  <SummaryFilters />
  <div class="widgets top">
    <BaseWidget :cssClass="'devops'">
      <template #header>
        <h2>DevOps</h2>
      </template>
    </BaseWidget>
    <BaseWidget :cssClass="'finops'">
      <template #header>
        <h2>FinOps</h2>
      </template>
    </BaseWidget>
    <BaseWidget :cssClass="'itops'">
      <template #header>
        <h2>ITOps</h2>
      </template>
    </BaseWidget>
  </div>
  <div class="widgets bottom">
    <BaseWidget :cssClass="'cloudops'">
      <template #header>
        <h2>CloudOps</h2>
      </template>
    </BaseWidget>
    <BaseWidget :cssClass="'dataops'">
      <template #header>
        <h2>DataOps</h2>
      </template>
    </BaseWidget>
    <BaseWidget :cssClass="'secops'">
      <template #header>
        <h2>SecOps</h2>
      </template>
    </BaseWidget>
  </div>
</div>
</template>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;

  .widgets {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    justify-content: space-between;
    height: 100%;
    
    & > section {
      flex: 1 1 calc(100% / 3);

      &.devops, 
      &.itops {
        flex-basis: calc(100% / 4);
      } 

      &.finops {
        flex-basis: calc(100% / 2 + 3rem);
      }
    }
  }
}
</style>
