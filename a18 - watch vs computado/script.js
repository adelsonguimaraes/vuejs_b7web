let app = new Vue({
	el:'#app',
	data:{
		primeiroNome: '',
		segundoNome: ''
	},
	computed: {
		nomeCompleto: function () {
			return this.primeiroNome + ' ' + this.segundoNome;
		}
	}
});