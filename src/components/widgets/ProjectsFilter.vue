<script setup>
import {ref} from 'vue'
import WidgetTitle from "./WidgetTitle.vue";
import Multiselect from '@vueform/multiselect'

defineProps({
  title: {
    type: String,
    required: true
  },
  selectOptions: {
    type: Array,
    required: true
  }, 
  selectMultiple: {
    type: Boolean,
    required: false,
    default: false
  }
})

const selected = ref([])
const fromDate = ref('')
const toDate = ref('')
</script>

<template>
<section class="filters">
  <WidgetTitle :title="title" :align="'left'" :color="'var(--color-heading-alt)'"/>
  <div class="projects">
    <template v-if="selectMultiple">
      <Multiselect     
        v-model="selected"
        placeholder="Select"
        mode="multiple"
        :groups="true"
        :searchable="true"
        :close-on-select="false"
        :options="selectOptions"
      />
    </template>
    <template v-else>
      <Multiselect
        v-model="selected"
        placeholder="Select"
        :searchable="true"
        :close-on-select="true"
        :options="selectOptions"
      />
    </template>
  </div>
  <div class="timespan">
    <div class="from">
      <label>From:</label>
      <!-- <input type="date"> -->
      <Datepicker 
        v-model="fromDate"
        :format="'dd MM yyyy'"
        :autoApply="true"
        :enableTimePicker="false"
        :noSwipe="false"
        :clearable="false"
        :transitions="true"
        :hideInputIcon="true"
        monthNameFormat="long"
        inputClassName="dp-input"
        menuClassName="dp-menu"
        calendarClassName="dp-calendar"
        calendarCellClassName="dp-cell"
        @update:modelValue="$emit('onFromDateChange', this)"
      />
    </div>
    <div class="to">
      <label>To:</label>
      <Datepicker 
        v-model="toDate"
        :format="'dd MM yyyy'"
        :autoApply="true"
        :enableTimePicker="false"
        :noSwipe="false"
        :clearable="false"
        :transitions="true"
        :hideInputIcon="true"
        monthNameFormat="long"
        inputClassName="dp-input"
        menuClassName="dp-menu"
        calendarClassName="dp-calendar"
        calendarCellClassName="dp-cell"
        @update:modelValue="$emit('onToDateChange', this)"
      />
    </div>
  </div>
</section>
</template>

<style lang="scss" scoped>
.filters {
  .projects {
    // style guide https://www.npmjs.com/package/@vueform/multiselect#styling-with-css-vars
    --ms-font-size: 1.8rem;
    --ms-line-height: 1.6;
    --ms-bg: #ffffff;
    --ms-border-color: var(--color-border);
    --ms-radius: 2rem;
    --ms-placeholder-color: var(--color-text-soft);
    --ms-dropdown-bg: #ffffff;
    --ms-ring-width: 0px;
    --ms-ring-color: var(--color-primary);
    --ms-py: 0.5rem;
    --ms-px: 2rem;
    --ms-max-height: 40rem;

    --ms-dropdown-radius: 2rem;
    --ms-dropdown-border-color: var(--color-border);

    --ms-group-label-bg: #ffffff;
    --ms-group-label-color:  var(--color-text);
    --ms-group-label-bg-pointed: #ffffff;
    --ms-group-label-color-pointed: var(--color-text);
    --ms-group-label-line-height: 1.6;
    --ms-group-label-py: 0.5rem;
    --ms-group-label-px: 1.5rem;

    --ms-option-font-size: 1.8rem;
    --ms-option-line-height: 1.6;
    --ms-option-bg-pointed: #FFFFFF;
    --ms-option-color-pointed: var(--color-primary);
    --ms-option-bg-selected: var(--color-secondary);
    --ms-option-color-selected: #FFFFFF;  
    --ms-option-bg-selected-pointed: var(--color-secondary);
    --ms-option-color-selected-pointed: #FFFFFF;
    --ms-option-bg-selected-disabled: #FFFFFF;
    --ms-option-color-selected-disabled: #D1FAE5;
    --ms-option-py: .5rem;
    --ms-option-px: 2rem;
  }

  .timespan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 4rem;
    margin-top: 2rem;

    .from, 
    .to {
      display: flex;
      gap: 1rem;
      flex: 1 1 0;
    }

    .from {
      padding-right: 2rem;
    }
    .to {
      padding-left: 2rem;
    }
    
    label {
      color: var(--c-pink);
    }
    
    input {}
  }
}

// hack to style select box
// not all properties are available as vars
:deep(.multiselect-group-label) {
  span {
    font-size: 1.8rem;
    font-weight: 700;
  }
}
</style>