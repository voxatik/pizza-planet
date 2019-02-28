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
                        <td colspan="3"><strong>{{item.name}}</strong></td>
                    </tr>
                    <tr v-for="(option, index) in item.options" :key="index">
                        <td>{{option.size}}"</td>
                        <td>{{option.price}}</td>
                        <td><button class="btn btn-sm btn-outline-success" @click="addItem(item, option)">+</button></td>
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
                            <button class="btn btn-sm btn-light" @click="increment(item.item)">+</button>
                        </td>
                        <td>
                            {{item.item}}"
                        </td>
                        <td>{{item.total.toFixed(2)}}</td>
                    </tr>
                </tbody>
                <tfoot v-if="orderTotal > 0" class="tfood-dark">
                    <tr>
                        <td></td>
                        <td><strong>Order Total:</strong></td>
                        <td><strong>{{orderTotal}}</strong></td>
                    </tr>
                </tfoot>
            </table>
            <button v-if="orderTotal > 0" 
                    type="button" 
                    class="btn btn-primary btn-block"
                    @click="placeOrder"
            >
                Place Order
            </button>
        </div>
    </div>
</template>

<script>
import { menuColRef } from '@/firebase'

export default {
    data() {
        return {
            menu: {},
            basket: {}
        }
    },
    methods: {
        addItem(item, option) {
            let itemName = `${item.name} ${option.size}`
            if((! this.basket[itemName])) {
                this.$set(this.basket, itemName, {
                    quantity: 1, 
                    item: `${itemName}`,
                    name: item.name,
                    size: parseInt(option.size),
                    price: parseFloat(option.price), 
                    total: parseFloat(option.price)
                })
            } else  {
                this.increment(itemName)
            }
        },
        increment(key) {
            this.basket[key].quantity++
            this.basket[key].total += this.basket[key].price
        },
        decrement(key) {
            if(this.basket[key].quantity === 1) {
                this.$delete(this.basket, key)
                return
            }
            this.basket[key].quantity--
            this.basket[key].total -= this.basket[key].price
        },
        placeOrder() {
            //todo store order in firebase db
        },
        async getMenu() {
            try {
                let snapshot = await menuColRef.get()
                snapshot.forEach((doc) => {
                    this.$set(this.menu, doc.id, doc.data())
                })
            } catch(error) {

            }
        }
    },
    computed: {
        orderTotal() {
            if(this.basket === {}) return

            return Object.entries(this.basket)
                .reduce((total, value) => {
                    return total + value[1].total
                }, 0)
                .toFixed(2)
        }
    },
    created() {
        this.getMenu()
    }
}
</script>

<style>

</style>
