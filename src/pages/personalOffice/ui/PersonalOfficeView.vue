<template>
  <div :class="styles.officeWrapper">
    <div :class="styles.filterWrapper">

    </div>
    <DataView :value="products" paginator :layout="layout" :rows="6" :class="styles.size">
      <template #header>
        <div>
          <DataViewLayoutOptions v-model="layout" />
        </div>
      </template>

      <template #list="slotProps">
        <div :class="styles.listItemsWrapper">
          <template v-for="product in slotProps.items" :key="product.name">
            <Card :class="styles.listItemWrapper">
              <span>{{ product.name }}</span>
              <span>{{ product.info1 }}</span>
              <span>{{ product.info2 }}</span>
              <span>{{ product.info3 }}</span>
            </Card>
          </template>
        </div>
      </template>

      <template #grid="slotProps">
        <div :class="styles.gridItemViewWrapper">
          <template v-for="product in slotProps.items" :key="product.name">
            <div :class="styles.gridItemWrapper">
              <span>{{ product.name }}</span>
              <span>{{ product.info1 }}</span>
              <span>{{ product.info2 }}</span>
              <span>{{ product.info3 }}</span>
            </div>
          </template>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import styles from './PersonalOffice.module.scss'
import { getCards } from '@/shared/api/getCards.js'

onMounted(async () => {
  await getCards().then((data) => (products.value = data.slice(0, 12)))
})

const products = ref()

const layout = ref('grid')
</script>