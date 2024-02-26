<script setup>
import styles from './CreateProject.module.scss'
import InputText from 'primevue/inputtext'
import MultiSelect from 'primevue/multiselect'
import Dropdown from 'primevue/dropdown'
import Chips from 'primevue/chips'
import InputSwitch from 'primevue/inputswitch'
import Button from 'primevue/button'

import { ref } from 'vue'

const errors = ref({
  projectName: false,
  customer: false,
  taskType: false,
  qualification: false,
  appelation: false,
  moderation: false,
  tags: false
})

const projectName = ref('')
const customer = ref('')
const taskType = ref('')
const qualification = ref('')
const appelation = ref(false)
const moderation = ref(false)
const tags = ref([])

const qList = ref(['поиск', 'сравнение', 'сбор'])
const cList = ref(['ВТБ', 'Альфа', 'Брендпул'])
const tList = ref(['Тип1', 'Тип2', 'Тип3'])

const handleSendBtn = () => {
  if (projectName.value.length === 0){
    errors.value.projectName = true;
  }

  console.log(
    projectName.value,
    customer.value,
    taskType.value,
    qualification.value,
    appelation.value,
    moderation.value,
    tags.value
  )
}
</script>

<template>
  <div :class="styles.officeWrapper">
    <div :class="styles.formWrapper">
      <div :class="styles.inputWrapper">
        <label for="projectName"> Название проекта </label>

        <InputText id="projectName" invalid v-model="projectName" />
        <small id="projectName error" v-if="errors.projectName">error</small>
      </div>

      <hr />

      <div :class="styles.multipleInputWrapper">
        <div :class="styles.inputWrapper">
          <label> Заказчик </label>

          <Dropdown v-model="customer" :options="cList" placeholder="Выберите заказчика" />
        </div>

        <div :class="styles.inputWrapper">
          <label> Тип задач </label>

          <Dropdown v-model="taskType" :options="tList" placeholder="Выберите тип задачи" />
        </div>
      </div>

      <div :class="styles.inputWrapper">
        <label> Необходимая квалификация </label>

        <MultiSelect
          v-model="qualification"
          :options="qList"
          display="chip"
          placeholder="Выберите необходимые квалификации"
        />
      </div>

      <hr />

      <div :class="styles.multipleInputWrapper">
        <div :class="styles.switchWrapper">
          <InputSwitch inputId="appelation" v-model="appelation" />
          <label for="appelation">Возможность аппеляции</label>
        </div>

        <div :class="styles.switchWrapper">
          <InputSwitch inputId="moderation" v-model="moderation" />
          <label for="moderation">Модерация</label>
        </div>
      </div>

      <hr />

      <div :class="styles.inputWrapper">
        <label>Теги</label>
        <Chips v-model="tags" separator="," :pt="{ container: styles.chipsWrapper }" />
      </div>
      <Button label="Создать проект" @click="handleSendBtn" />
    </div>

    <div :class="styles.instructionWrapper">instruction</div>
  </div>
</template>
