Vue.config.keyCodes.f2 = 113; // crinado um atalho para tecla f2

let app = new Vue({
	el:'#app',
	data:{
		contagem: 0	
	},
	methods:{
		teclou: function () {
			
				this.contagem++;
			
		},
		teclou2: function () {
			
			this.contagem+= 10;
		
		}
	}
});