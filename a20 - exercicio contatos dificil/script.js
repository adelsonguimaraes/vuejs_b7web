let app = new Vue({
	el:'#app',
	data:{
		nome: '',
		nomes: [],
		msg: '',
		time: null,
		pronto: false
	},
	computed: {
		totalTexto: function () {
			return 'Total de Nomes: ' + this.nomes.length;
		}
	},
	methods: {
		addNome: function () {
			if (this.nome.length<2) return false;
			this.nomes.push(this.nome);
			this.nome = '';
			this.pronto = false;
		},
		ficarPronto: function () {
			this.msg = '';
			if (this.nome.length > 2) this.pronto = true;
		}
	},
	watch:{
		nome: function () {
			if (this.time!=null) clearTimeout(this.time);
			
			if (this.nome == '') return false;
			this.msg = "Digitando...";
			this.pronto = false;
			this.time = setTimeout(this.ficarPronto, 1000);
		}
	}
});