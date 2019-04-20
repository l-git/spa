<template>
<div>
  <div class="example">{{ msg }}</div>

  <div @click="getData">click me to get data</div>

<div class="block">
  
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>

</div>

</template>

<script>

import api from '@/api/index.js'



export default {
    
  data () {
    return {
      msg: 'c22222'
    }
  },
  methods:{
    getData(){
      var that=this
      var param={}
      api.getData(param).then(function(response){

        var data=response.data
        console.log(data)

      })


    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>