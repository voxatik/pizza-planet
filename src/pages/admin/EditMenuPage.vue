<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>Edit Menu</h3>
    </div>
    <div class="col-sm-12 mt-2">
      <table class="table table-sm">
        <thead class="thead-light">
          <tr>
            <th colspan="4">Name</th>
          </tr>
          <tr>
            <th colspan="4">Description</th>
          </tr>
          <tr>
            <th></th>
            <th>Price</th>
            <th>Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="(item, key) in items" :key="key">
          <tr class="table-primary">
            <td colspan="3">{{item.name}}</td>
            <td>
              <button class="btn btn-sm btn-warning mr-1">Edit</button>
              <button class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
          <tr class="table-primary">
            <td colspan="4">{{item.description}}</td>
          </tr>
          <tr v-for="(option, index) in item.options" :key="index">
            <td>{{`Option ${index+1}`}}</td>
            <td>{{option.size}}"</td>
            <td>{{option.price}}</td>
            <td>
              <button class="btn btn-sm btn-outline-warning mr-1">Edit</button>
              <button class="btn btn-sm btn-outline-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "EditMenuPage",
  computed: {
    ...mapState('menu', ["items"])
  }
};
</script>
