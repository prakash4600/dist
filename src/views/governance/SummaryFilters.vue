<script setup>
import ProjectsFilter from '@/components/widgets/ProjectsFilter.vue';
import SummaryTotals from '@/components/widgets/SummaryTotals.vue';

const projectsData = [
  { value: 3, label: "Initiated", color: "var(--c-blue)" }, 
  { value: 7, label: "Approved", color: "var(--c-green)" },
  { value: 7, label: "Completed", color: "var(--c-cyan)" },
]
const governanceData = [
  { value: 10, label: "Initiated" }, 
  { value: 5, label: "Approved" },
  { value: 5, label: "Completed" },
]
const adoptionData = [
  { value: 15, label: "Legacy" }, 
  { value: 13, label: "Data" },
  { value: 5, label: "Native" },
]
const operationsData = [
  { value: 15, label: "Assigned" }, 
  { value: 13, label: "Resolved" },
  { value: 5, label: "Completed" },
]
</script>

<template>
  <section class="filters-summary">

    <!-- <SummaryTotals :items="projectsData" /> -->
    <ProjectsFilter />
    <SummaryTotals :items="governanceData" :title="'Governance'"/>
    <SummaryTotals :items="adoptionData" :title="'Adoption'"/>
    <SummaryTotals :items="operationsData" :title="'Operations'"/>
  </section>
</template>

<style lang="scss" scoped>
.filters-summary {
  display: flex;
  gap: 3rem;

  & > * {
    flex: 1 1 0;
  }
}
</style>