<template>
  <div>
    <my-phone-form @create="createPhone" />
    <my-phone-list :phones="phones" @remove="removePhone" />
  </div>
</template>

<script>
import MyPhoneForm from "@/components/PhoneForm/index.vue";
import MyPhoneList from "@/components/PhoneList/index.vue";
export default {
  name: "HomePage",
  components: {
    MyPhoneForm,
    MyPhoneList,
  },
  data() {
    return {
      phones: [
        {
          id: 1,
          pib: "Микола Мовчан Сергійович",
          yearOfBirth: "2003",
          cellPhoneNumber: "0998763192",
          mobilePhone: "0501275901",
        },
        {
          id: 2,
          pib: "Олександра Шевченко Іванівна",
          yearOfBirth: "2004",
          cellPhoneNumber: "0998745751",
          mobilePhone: "0501222001",
        },
      ],
    };
  },
  methods: {
    createPhone(phone) {
      this.phones.push(phone);
    },
    removePhone(phone) {
      this.phones = this.phones.filter((s) => s.id !== phone.id);
    },
  },
};
</script>
