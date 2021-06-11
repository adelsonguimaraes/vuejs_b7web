let inputComent = {
	props: ['feed'],
	data:function() {
		return {
			mensagem: '',
		}
	},
	methods: {
		enviar: function (feed) {
			feed.mensagens.push(this.mensagem);
			this.mensagem = '';
		}
	},
	template:`
		<div class="box-input">
			<form @submit.prevent="enviar(feed)">
				<input type="text" v-model.trim="mensagem">
			</form>
		</div>
	`
}

let feed = {
	data:function() {
		return {
			feeds: [
				{
					id: 1,
					img: 'https://img-21.ccm2.net/PkaZDNxdEAAPe5nx_394Q1bLgm4=/500x/5319836089a8425fb2f2e9977cd4a04e/ccm-faq/fotosfocate_unsplash.jpg',
					mensagens: [
						'mensagem 1',
						'mensagem 2',
						'mensagem 3'
					],
					curtida: false,
					curtidas: 10,
				},
				{
					id: 2,
					img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHbn3co8GJLWfvzQMhyuXFur20edse7jJog&usqp=CAU',
					mensagens: [
						'bonito!!!',
						'lindo!!',
						'eu gostei!!'
					],
					curtida: false,
					curtidas: 20
				}
			]
		}
	},
	methods: {
		like: function (feed) {
			if (!feed.curtida) {
				feed.curtidas++;
			}else {
				feed.curtidas--;
			}
			feed.curtida = !feed.curtida;
		}
	},
	components: {
		inputComent
	},
	template:`
		<div class="feed">
			<div class="box" v-for="feed in feeds">
				<div class="img">
					<img :src="feed.img">
				</div>
				<div class="box-right">
					<div class="chat">
						<p v-for="msg in feed.mensagens">
							{{ msg }}
						</p>
					</div>
					<div class="control">
						<button @click="like(feed)" :class="{'curtida': feed.curtida}">♥</button> <br>
						<small>{{feed.curtidas}} curtidadas</small>
					</div>
					<inputComent :feed="feed"/>
				</div>
			</div>
		</div>
	`
};

let app = new Vue({
	el:'#app',
	data: {
	},
	components: {
		feed
	},
	methods: {
	}
});