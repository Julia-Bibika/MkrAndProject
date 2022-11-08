<template>
  <div>
    <div>
      <h1>Фільтр:</h1>
      <label>
        P.I.B
        <input type="text" v-model="searchPib" />
      </label>
    </div>
    <div>
      <h1>Сортування</h1>
      <label>
        Сортувати за :
        <select v-model="sortValues">
          <option value="pib">П.І.Б</option>
          <option value="yearOfBirth">Рік народження</option>
          <option value="cellPhoneNumber">Номер стільникового телефону</option>
          <option value="mobilePhone">Мобільного</option>
        </select>
      </label>
    </div>
    <my-phone-item
      v-for="phone in filteredPhones"
      :phone="phone"
      :key="phone.id"
      @remove="$emit('remove', phone)"
    />
  </div>
</template>

<script>
import MyPhoneItem from "@/components/PhoneItem/index.vue";
export default {
  name:'MyPhoneList',
  components: {
    MyPhoneItem,
  },
  data() {
    return {
      searchPib: null,
      sortValues: null,
    };
  },
  props: {
    phones: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    filteredPhones() {
      let list = this.phones;
      if (this.searchPib)
        list = this.phones.filter((item) =>
          item.pib.startsWith(this.searchPib)
        );
      if (this.sortValues) {
        list.sort((item1, item2) => {
          let val1 = item1[this.sortValues];
          let val2 = item2[this.sortValues];
          if (typeof val1 === "string") {
            val1 = val1.toUpperCase();
            val2 = val2.toUpperCase();
          }
          if (val1 === val2) return 0;
          if (val1 > val2) return 1;
          return -1;
        });
      }

      return list;
    },
  },
};
</script>

<style scoped></style>
