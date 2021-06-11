let postagem = {
	props: ['titulo', 'corpo'],
	data: function () {
		return {
			exemplo: 'algum'
		}
	},
	template: '<div><h2>{{titulo}}</h2><p>{{corpo}}</p><span>{{exemplo}}</span></div>'
}

let conteudo = new Vue({
	el: '#conteudo',
	data: {
		
	},
	components: {
		postagem
	}
});