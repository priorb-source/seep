<script setup>
import { cn } from '@/lib/utils'

const props = defineProps()
</script>

<template>
  <tr
    :class="
      cn(
        'transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
        props.class
      )
    "
  >
    <slot />
  </tr>
</template>
