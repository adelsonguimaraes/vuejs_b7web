let app = new Vue({
	el:'#app',
	data:{
		nomes: [
			'Adelson',
			'Raquel',
			'Pipoca',
			'Fernando'
		],
		busca: ''
	},
	computed: {
		nomesFiltrados: function () {
			return this.nomes.filter(function(nome) {
				if (this.busca.length>=0) {

					if (nome.toString().toLowerCase().indexOf(this.busca.toString().toLowerCase())>-1) {
						return true;
					}else{
						return false;
					}

				}else{
					return true;
				}
			}, this);
		}
	}
});