let app = new Vue({
	el:'#app',
	data:{
		nome: '',
		nomes: []
	},
	methods: {
		adicionar: function (nome) {
			if (nome.length<=0) return false;
			this.nomes.push(nome);
			this.nome = '';
		}
	}
});