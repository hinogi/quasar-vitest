<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

  setup() {
    return {
      isDialogOpen: false,
    }
  }
})
</script>

<template>
  <q-dialog v-model="isDialogOpen">
    <q-card>
      <q-card-section>Custom dialog which should be tested</q-card-section>
    </q-card>
  </q-dialog>
</template>
