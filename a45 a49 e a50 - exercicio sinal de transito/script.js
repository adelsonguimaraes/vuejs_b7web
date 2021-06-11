let luz = {
	props: ['cor'],
	template: `
		<div class="luz" :class="cor">
		</div>
	`
};

Vue.component('sinal', {
	props: ['status'],
	components: {
		luz
	},
	template:`
		<div class="sinal">
			<template v-if="status == 'vermelha'">
				<luz cor="luz--vermelha"/>
				<luz />
				<luz />
			</template>

			<template v-else-if="status == 'amarela'">
				<luz />
				<luz cor="luz--amarela"/>
				<luz />
			</template>

			<template v-else-if="status == 'verde'">
				<luz />
				<luz />
				<luz cor="luz--verde"/>
			</template>
		</div>
	`
});

let app = new Vue({
	el:'#app',
	data: {
		sinalStatus: 'vermelha'
	},
	methods: {
		liberar: function () {
			this.sinalStatus = 'verde';
		},
		fechar: function () {
			let control = this;
			control.sinalStatus = 'amarela';
			
			setTimeout(() => {
				control.sinalStatus = 'vermelha';
			}, 2000);
		},
	}
});