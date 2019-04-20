<template>

<div>
  <div class="example">
      {{ msg }}
  </div>
      <div>

          <div v-for="item in list" :key="item.id" @click="goTo(item)">
              {{item.name}}
          </div>


      </div>

<div class="red">============</div>


<router-view></router-view>

  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello world!",
      list: [
        {
          id: "1",
          name: "c1",
          path:'c1'
        },
        {
          id: "2",
          name: "c2",
          path:'c2'
        },
        {
          id: "3",
          name: "Switch",
          path:'Switch'

        }
      ]
    };
  },
  methods:{
      goTo(item){
          this.$router.push(item.path)
      }
  }
};
</script>

<style>
.example {
  color: red;
}
</style>