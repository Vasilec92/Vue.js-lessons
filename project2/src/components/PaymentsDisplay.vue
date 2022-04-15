<template>
  <div class="hello">
    <div>
      <table id="customers">
        <tr>
          <th>Date</th>
          <th>Category</th>
          <th>Value</th>
          <th>Actions</th>
        </tr>
        <tr v-for="(item, idx) in items" :key="idx">
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.value }}</td>
          <td class="action" @click="onClickContextItem($event, item, idx)">
            ...
          </td>
          <td v-if="open"><EditPaymentForm :item="item" /></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import EditPaymentForm from "../components/EditPaymentForm.vue";
export default {
  name: "PaymentsDisplay",
  components: { EditPaymentForm },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    ...mapMutations({
      delate: "delateDataToPaymentsList",
    }),
    editItem(item) {
      console.log(item);
    },
    deleteItem(id) {
      console.log(id);
      this.delate(id);
    },
    onClickContextItem(event, item) {
      const items = [
        {
          text: "Edit",
          action: () => {
            this.editItem(item);
            this.open = true;
          },
        },
        {
          text: "Delete",
          action: () => {
            this.deleteItem(item.id);
          },
        },
      ];
      this.$contextMenu.show({ event, items });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
.action {
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}
</style>
