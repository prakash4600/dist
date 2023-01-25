<script setup>
import {ref} from 'vue'
import ProjectsFilter from '@/components/widgets/ProjectsFilter.vue';
import SummaryTotals from '@/components/widgets/SummaryTotals.vue';

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

const filterOptions = ref([
  {
    label: "Departments",
    options: ["Department - 01", "Department - 02"]
  },
  {
    label: "Business Units",
    options: ["SBU 1", "SBU 2"]
  },
  {
    label: "Projects",
    options: ["Project - 01", "Project - 02"]
  },
])
</script>

<template>
  <section class="filters-summary">
    <SummaryTotals :items="governanceData" :title="'Governance'"/>
    <SummaryTotals :items="adoptionData" :title="'Adoption'"/>
    <SummaryTotals :items="operationsData" :title="'Operations'"/>
    <ProjectsFilter :title="'Filter'" :selectOptions="filterOptions" :selectMultiple="true"/>
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