let app = new Vue({
	el:'#app',
	data:{
		contagem: 0	
	},
	methods:{
		algo: function () {
			this.contagem++;
		}
	}
});