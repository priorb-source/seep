<script setup>
import { computed } from 'vue'
import { SelectSeparator } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <SelectSeparator v-bind="delegatedProps" :class="cn('-mx-1 my-1 h-px bg-muted', props.class)" />
</template>
