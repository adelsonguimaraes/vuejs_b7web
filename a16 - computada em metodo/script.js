let app = new Vue({
	el:'#app',
	data:{
		nome: 'Adelson',
		numero:5
	},
	computed: {
		aleatorio: function () {
			let al = Math.floor(Math.random()*100);
			return this.numero + " + " +al+ " = " + (this.numero + al);
		}
	},
	methods: {
		nomeInvertido: function () {
			return this.nome.split('').reverse().join('');
		},
		aleatorioFuncao: function () {
			let al = Math.floor(Math.random()*100);
			return this.numero + " + " +al+ " = " + (this.numero + al);
		}
	}
});