<template>
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <h3>New Pizza</h3>
        </div>
        <div class="col-md-8 offset-md-2 mt-2">
            <div class="form-group row">
                <div class="col-md-3 col-form-label">
                    <label for="">Name</label>
                </div>
                <div class="col-md-9">
                    <input class="form-control" 
                           type="text" 
                           name="name" 
                           placeholder="eg. Pepperoni"
                           v-model="form.name">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-3 col-form-label">
                    <label for="">Description</label>
                </div>
                <div class="col-md-9">
                    <textarea class="form-control" 
                              rows="3" 
                              name="description"
                              placeholder="eg. A delicious tomato based pizza with mozzorella cheese"
                              v-model="form.description">
                    </textarea>
                </div>
            </div>
            <div class="form-group row" v-for="(option, index) in form.options" :key="index">
                <div class="col-md-3 col-form-label">
                    <label>Options {{ index + 1}}</label>
                </div>
                <div class="col-md-9">
                    <div class="form-group row">
                        <div class="col-md-6">
                            <label for="">Size</label>
                            <input class="form-control" type="text" name="options[].size" v-model.number="option.size">
                        </div>
                        <div class="col-md-6">
                            <label for="">Price</label>
                            <input class="form-control" type="text" name="options[].price" v-model.number="option.price">
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary btn-block" type="button" @click="addToMenu">Add to Menu</button>
            </div>
        </div>
    </div>
</template>

<script>
import { menuColRef } from '@/firebase'
export default {
    name: "NewPizzaPage",
    data() {
        return {
            form: {
                name: "",
                description: "",
                options: [
                    {size: null, price: null},
                    {size: null, price: null}
                ]
            }
        }
    },
    methods: {
        async addToMenu() {
            try {
                let ref = await menuColRef.add(this.form)
                //notify user item added to menu
                this.clearForm()
            } catch (error) {
                //todo notify user of error
            }
        },
        clearForm() {
            this.form = {
                name: "",
                description: "",
                options: [
                    {size: null, price: null},
                    {size: null, price: null}
                ]
            }
        }
    }
}
</script>
