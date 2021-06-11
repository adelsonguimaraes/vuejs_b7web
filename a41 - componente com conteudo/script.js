Vue.component('aviso', {
	template: `
		<div class="aviso">
			<slot></slot>
		</div>
	`
});

let postagem = {
	props: ['titulo', 'corpo'],
	template: `
		<div>
		<h2><slot name="titulo"></slot></h2>
		<p><slot name="corpo"></slot></p>
		</div>
	` 
}

let conteudo = new Vue({
	el: '#conteudo',
	data: {
		
	},
	components: {
		postagem
	}
});