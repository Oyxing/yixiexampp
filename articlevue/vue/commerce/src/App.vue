<template>
    <div>
        <navbar> </navbar>
        <!-- router-link -->

        <!-- <router-view class="text-center" name="slider"></router-view> -->
        <router-view class="text-center"></router-view>
    </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  // import oldModule  from './assets/js/app.js'    
  // oldModule() 
  export default {
    name: 'app',
    data() {
      return {
          username: 'stark'
      }
      },
      components:{
        navbar:Navbar
      }
    }
</script>

<style>

</style>