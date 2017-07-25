<template>
  <div>
      达人
       <div v-for="item in data.content"><img :src='item.url'/></div> 
  </div>
</template>

<script>
  import jsonp from 'jsonp'
  export default {
    name: 'Zine',
    data () {
      return {
        data: {}
      }
    },
    created () {
      this.getJsonp()
    },
    methods: {
      getJsonp () {
        axios.get('http://is.snssdk.com/api/news/feed/v51/?category=news_society')
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
        // jsonp('http://is.snssdk.com/api/news/feed/v51/?category=news_society', null, function (err, data) {
        //   if (err) {
        //     console.error(err.message)
        //     console.log('错误')
        //   } else {
        //     console.log(data.data)
        //   .then((data) => {
        //     this.data = data.data
        //   })
        //   }
        // })
      }
    }
  }
</script>
