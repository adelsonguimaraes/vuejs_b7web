let app = new Vue({
	el:'#app',
	data:{
		nome: 'Adelson'
	},
	computed: {
		nomeInvertido: function () {
			return this.nome.split('').reverse().join('');
		}
	}
});