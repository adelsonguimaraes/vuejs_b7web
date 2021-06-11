let busca = {
	data: function () {
		return {
			busca:'',
			only_stock: false
		};
	},
	methods: {
		buscar: function () {
			this.$emit('buscar', {text:this.busca, only_stock:this.only_stock});
		}
	},
	template:`
		<div>
			<input type="text" placeholder="busca.." v-model="busca" @keyup="buscar"><br>
			<input type="checkbox" v-model="only_stock" @change="buscar"> Apenas em estoque <br>
		</div>
	`
};

let lista = {
	props: ['itens'],
	template:`
		<div>
			<table>
				<tr>
					<th>Nome</th>
					<th>Preço</th>
				</tr>

				<template v-for="cat in itens">
					<tr>
						<td colspan="2"><b>{{cat.nome}}</b></td>
					</tr>
					<tr v-for="p in cat.itens">
						<td v-if="p.estoque">{{p.nome}}</td>
						<td v-else style="color:red;">{{p.nome}}</td>
						<td>{{'$'+p.preco}}</td>
					</tr>
				</template>
			</table>
		</div>
	`
};

let app = new Vue({
	el:'#app',
	data: {
		exibidos: [],
		produtos : [
			{
				nome: 'Sporting Goods',
				itens: [
					{
						nome: 'Football',
						preco: 49.99,
						estoque: true
					},
					{
						nome: 'Baseball',
						preco: 9.99,
						estoque: true
					},
					{
						nome: 'Basketball',
						preco: 49.99,
						estoque: false
					}
				]
			},
			{
				nome: 'Eletronics',
				itens: [
					{
						nome: 'Ipod Touch',
						preco: 99.99,
						estoque: true
					},
					{
						nome: 'Iphone 5',
						preco: 399.99,
						estoque: false
					},
					{
						nome: 'Nexus 7',
						preco: 199.99,
						estoque: true
					}
				]
			}
		]
	},
	created: function () {
		this.exibidos = this.produtos;
	},
	components: {
		busca,
		lista
	},
	methods: {
		filtrar: function (p) {
			let novaLista= [];

			for (let i in this.produtos) {
				let produto = this.produtos[i];
				let novosItens = [];

				for (let w in produto.itens) {
					let item = produto.itens[w];
					let vai = true;

					if (p.only_stock && item.estoque==false) {
						vai = false;
					}

					if (p.text != '' && item.nome.toString().toLowerCase().indexOf(p.text.toString().toLowerCase())=== -1) {
						vai = false;
					}

					if(vai) novosItens.push(item);
				}

				if (novosItens.length>0) {
					novaLista.push({
						nome: produto.nome,
						itens: novosItens
					});
				}

			}

			this.exibidos = novaLista;
		}
	}
});