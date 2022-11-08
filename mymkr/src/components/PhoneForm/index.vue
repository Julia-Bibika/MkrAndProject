<template>
  <div>
    <h4>Додати Номер</h4>
    <label>
      PIB:
      <input type="text" v-model="phone.pib" />
    </label>
    <label>
      yearOfBirth:
      <input type="text" v-model="phone.yearOfBirth" />
    </label>
    <label>
      cellPhoneNumber:
      <input type="text" v-model="phone.cellPhoneNumber" />
    </label>
    <label>
      mobilePhone:
      <input type="text" v-model="phone.mobilePhone" />
    </label>
    <button @click="createPhone">Додати магазин</button>
  </div>
</template>

<script>
export default {
  name:"MyPhoneForm",
  data() {
    return {
      phone: {
        pib: "",
        yearOfBirth: "",
        cellPhoneNumber: "",
        mobilePhone: "",
      },
    };
  },
  methods: {
    createPhone() {
      this.phone.id = Date.now();
      this.$emit("create", this.phone);
      this.phone = {
        pib: this.pib,
        yearOfBirth: this.yearOfBirth,
        cellPhoneNumber: this.cellPhoneNumber,
        mobilePhone: this.mobilePhone,
      };
    },
  },
};
</script>

<style lang="less" scoped></style>
