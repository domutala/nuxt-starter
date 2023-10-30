<script setup lang="ts">
import { IFormtypes } from '~/models';

const formTypes: IFormtypes = {
  name: {
    type: 'text',
    attributes: {
      max: 250,
      min: 2,
      placeholder: 'Votre prénom',
      minlength: 3,
      maxlength: 5,
    },
  },
  lastName: { type: 'text', attributes: { placeholder: 'Nom' } },
  age: {
    type: 'number',
    attributes: { placeholder: 'Votre age', required: true, min: 18, step: 1 },
  },
  premium: { type: 'boolean' },
  countries: {
    type: 'choice',
    selctOptions: [
      { text: 'Sénégal', value: 'sn' },
      { text: 'Gambie', value: 'ga' },
      { text: 'Maroc', value: 'ma' },
    ],
    attributes: { placeholder: 'Votre pays' },
  },
};

const datas = ref({});
</script>

<template>
  <div>
    <form action="">
      {{ datas }}
      <div v-for="(formType, f) in formTypes" :key="f">
        <input
          v-if="formType.type === 'text'"
          type="text"
          v-bind="formType.attributes"
          v-model="datas[f]"
        />

        <input
          v-else-if="formType.type === 'number'"
          type="number"
          v-bind="formType.attributes"
          v-model="datas[f]"
        />

        <input
          v-else-if="formType.type === 'boolean'"
          type="checkbox"
          v-bind="formType.attributes"
          v-model="datas[f]"
        />
      </div>

      <button>submit</button>
    </form>
    <!-- <component v-for="formType, f in formTypes" :key="f" :is="formType.type === 'text' "></component> -->
    <NuxtWelcome />
  </div>
</template>
