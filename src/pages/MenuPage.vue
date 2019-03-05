<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <table class="table table-hover">
        <thead class="thead-light">
          <tr>
            <th>Size</th>
            <th>Price</th>
            <th>Add to basket</th>
          </tr>
        </thead>
        <tbody template v-for="(item, k) in menu" :key="k">
          <tr>
            <td colspan="3">
              <strong>{{item.name}}</strong>
            </td>
          </tr>
          <tr v-for="(option, index) in item.options" :key="index">
            <td>{{option.size}}"</td>
            <td>{{option.price}}</td>
            <td>
              <button class="btn btn-sm btn-outline-success" @click="addItem(item, option)">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-sm-12 col-md-6">
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th>Quantity</th>
            <th>Item</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in basket" :key="index">
            <td>
              <button class="btn btn-sm btn-light" @click="decrement(item.item)">-</button>
              {{item.quantity}}
              <button
                class="btn btn-sm btn-light"
                @click="increment(item.item)"
              >+</button>
            </td>
            <td>{{item.item}}"</td>
            <td>{{total(item).toFixed(2)}}</td>
          </tr>
        </tbody>
        <tbody v-if="orderPlaced">
          <tr>
            <td colspan="3">{{ orderStatus }}</td>
          </tr>
        </tbody>
        <tfoot v-if="orderTotal > 0" class="tfoot-dark">
          <tr>
            <td></td>
            <td>
              <strong>Order Total:</strong>
            </td>
            <td>
              <strong>{{orderTotal.toFixed(2)}}</strong>
            </td>
          </tr>
        </tfoot>
      </table>
      <button
        v-if="orderTotal > 0"
        type="button"
        class="btn btn-primary btn-block"
        @click="createOrder"
      >Place Order</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
  name: 'MenuPage',
  data() {
    return {
      basket: {},
      orderStatus: null,
      orderPlaced: false
    };
  },
  methods: {
    ...mapActions("orders", ["placeOrder"]),
    addItem(item, option) {
      let itemName = `${item.name} ${option.size}`
      if (!this.basket[itemName]) {
        this.$set(this.basket, itemName, {
          quantity: 1,
          item: `${itemName}`,
          name: item.name,
          size: parseInt(option.size),
          price: parseFloat(option.price)
        });
      } else {
        this.increment(itemName);
      }
    },
    createOrder() {
      this.placeOrder(this.basketToArray())
      .then((id) => {
        this.basket = {}
        this.orderPlaced = true
        this.orderStatus = `Thanks you for your order. We will get started on it soon. Please take note of your order number: ${id}`
      })
      .catch((e) => {
       console.error(e)
      })
    },
    basketToArray() {
      return Object.entries(this.basket).map(value => value[1])
    },
    increment(key) {
      this.basket[key].quantity++
    },
    decrement(key) {
      if (this.basket[key].quantity === 1) {
        this.$delete(this.basket, key)
        return;
      }
      this.basket[key].quantity--
    },
    total(item) {
      return item.quantity * item.price
    }
  },
  computed: {
    ...mapState("menu", { menu: "items" }),
    orderTotal() {
      if (this.basket === {}) return;

      return Object.entries(this.basket)
        .reduce((total, value) => {
          return total + (value[1].quantity * value[1].price)
        }, 0)
    }
  }
}
</script>
