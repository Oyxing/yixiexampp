/**
 * Created by jacksoft on 16/10/22.
 */
let cartData={
  "status":1,
  "result":{
    "totalMoney":59,
    "list":[
      {
        "productId":"600100002115",
        "productName":"黄鹤楼香烟",
        "productPrice":19,
        "productQuentity":1,
        "productImage":"img/goods-1.jpg",
        "parts":[
          {
            "partsId":"10001",
            "partsName":"打火机"
          }
        ]
      },
      {
        "productId":"600100002120",
        "productName":"加多宝",
        "productPrice":8,
        "productQuentity":5,
        "productImage":"img/goods-2.jpg",
        "parts":[
          {
            "partsId":"20001",
            "partsName":"吸管"
          }
        ]
      }
    ]
  },
  "message":""
}
window.vm = new Vue({
	el:'#app',
	data:{
		showModal:false,
		productList:[],
		totalMoney:0,
		checkAll:false,
		currentProduct:''
	},
	mounted: function () {
		var _this = this;
		this.cartView();
	},
	filters: {
		formatMoney: function (value,quentity) {
			if(!quentity)quentity=1;
			return "¥ "+(value*quentity).toFixed(2) +"元";
		}
	},
	methods:{
		cartView: function () {
			// this.getDate("data/cartData.json").then(response=>{
				var res = cartData;
				if(res && res.status=="1"){
					this.productList = res.result.list;
					this.calcTotalMoney();
				}
			// });
		},
		selectAll: function (isCheck) {
			this.checkAll=isCheck;
			this.productList.forEach(function (item) {
				if(typeof item.checked == "undefined"){
					Vue.set(item,"checked",isCheck);
				}else{
					item.checked = isCheck;
				}
			})
			this.calcTotalMoney();
		},
		selectedProduct: function (product) {
			if(typeof product.checked == "undefined"){
				//Vue.set(product,"checked",true);
				this.$set(product,"checked",true);
			}else{
				product.checked = !product.checked;
			}
			this.calcTotalMoney();
			this.isCheckAll();
		},
		isCheckAll: function () {
			let flag = true;
			this.productList.forEach(function (item) {
				if(!item.checked){
					flag = false;
				}
			})
			if(flag){
				this.checkAll = true;
			}else{
				this.checkAll = false;
			}

		},
		calcTotalMoney: function () {
			let totalMoney = 0;
			this.productList.forEach(function (item) {
				if(item.checked){
					totalMoney+=item.productPrice*item.productQuentity;
				}
			});
			this.totalMoney = totalMoney;
		},
		changeMoney: function (product,way) {
			if(way>0){
				product.productQuentity++;
			}else{
				product.productQuentity--;
				if(product.productQuentity<=1){
					product.productQuentity=1;
				}
			}
			this.calcTotalMoney();
		},
		delConfirm: function (product) {
			this.showModal = true;
			this.currentProduct = product;
		},
		delCurrentProduct: function () {
			this.showModal = false;
			var index = this.productList.indexOf(this.currentProduct);
			this.productList.splice(index,1);
		}
	}
});