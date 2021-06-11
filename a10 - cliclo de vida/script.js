let app = new Vue({
    el:'#app',
    data: {
        nome: 'Adelson'
    },
    beforeCreate: function() {
        console.warn('antes de criar o elemento');
    },
    created: function () {
        console.warn('depois de criar e antes de renderizar o elemento');
    },
    beforeMount: function () {
        console.warn('antes de renderizar o elemento');
    },
    mounted: function () {
        console.warn('depois de renderizar o elemento');
    },
    beforeUpdate: function () {
        console.warn('antes de modificar o elemento');
    },
    updated: function () {
        console.warn('depois de modificar o elemento');
    },
    beforeDestroy: function () {
        console.warn('antes de destruir o elemento');
    },
    destroyed: function () {
        console.warn('depois de destruir o elemento');
    }
});