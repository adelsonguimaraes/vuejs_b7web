Vue.component('menu-superior', {
	data: function () {
		return {
			texto: 'Texto qualquer'
		}
	},
	template: '<button>{{texto}}</button>'
});

let app = new Vue({
	el:'#app',
	data:{
		
	}
});