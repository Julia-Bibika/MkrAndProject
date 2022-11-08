<template>
  <div>
    <div class="item">
      <div><strong>П.І.Б</strong> : {{ phone.pib }}</div>
      <div><strong>Рік народження</strong> : {{ phone.yearOfBirth }}</div>
      <div>
        <strong>Номер стільникового телефону</strong> : {{ phone.cellPhoneNumber }}
      </div>
      <div>
        <strong>Мобільного телефону</strong> : {{ phone.mobilePhone }}
      </div>
    </div>
    <button @click="$emit('remove', phone)">Delete</button>
  </div>
</template>

<script>
export default {
  name:"MyPhoneItem",
  props: {
    phone: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
.item {
  margin: 10px;
}
</style>
