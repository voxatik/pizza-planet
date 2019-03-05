<template>
  <div class="row">
    <div class="col-md-12">
      <h3>Manage Orders ({{ordersCount}})</h3>
      <table class="table table-sm table-hover" v-for="order in getOrders" :key="order.id">
        <thead class="thead-light">
          <tr>
            <th colspan="4">Order # {{ order.id }}</th>
          </tr>
          <tr>
            <th></th>
            <th>Quantity</th>
            <th>Item Name</th>
            <th>Item Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in getItems(order)" :key="index">
            <td></td>
            <td>{{item.quantity}}</td>
            <td>{{item.item}}</td>
            <td>New</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="bg-dark text-white">
            <td></td>
            <td>Order Status</td>
            <td></td>
            <td>Open</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'OrdersPage',

  data() {
    return {

    }
  },
  methods:{
    getItems(order) {
      return order.order || order.items
    }
  },
  computed: {
    ...mapGetters('orders', ['ordersCount', 'getOrders'])
  }
}
</script>

<style>
</style>
