Vue.component('contador', {
	template: '<button>Clicou x vezes</button>'
});

let menuSuperior = {
	template: '<span>MENU</span>'
}

let header = new Vue({
	el:'#header',
	data:{
		title: 'Aula 39 - Componente global vs local'
	},
	components:{
		'menu-superior':menuSuperior
	}
});

let sidebar = new Vue({
	el: '#sidebar',
	data: {
		item: 'Alguma coisa'
	}
});