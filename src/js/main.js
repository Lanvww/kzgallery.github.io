let app = new Vue({
    el: '#root',
    data: {
        title: `以人為本`,
        slogan: "BE HUMAN FOR HUMANS",
        names: ["Adam", "Betty", "Charlie", "Doris"],
    },
    methods: {
        addName() {
            if (!this.newName) return;
            this.names.push(this.newName);
            this.newName = "";
        }
    }
});
init();

function init() {
}