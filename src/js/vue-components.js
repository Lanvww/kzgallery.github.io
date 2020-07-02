Vue.component('kz-footer', {
    template: `<footer style="text-align:center">
   &copy; 2020 Katudio
   </footer>`
});

Vue.component('friend-list', {
    props: ['names', 'title'],
    template: `
<div>
    <h2>{{title}}</h2>
    <table class="pure-table-striped">
        <thead><th>Guest #</th><th>Guest Name</th></thead>
        <tr is="friend-list-row" v-for="(name,index) in names" v-bind:name="name" v-bind:index="index"></tr>
    </table>
</div>`
});

Vue.component('kz-slogan', {
    props: ['slogan'],
    template: `<div class="slogan noselect">
            <p>{{slogan}}</p>
            <p>{{slogan}}</p>
            <p>{{slogan}}</p>
            <p>{{slogan}}</p>
            <p>{{slogan}}</p>
            <p>{{slogan}}</p>
            <p>{{slogan}}</p>
            <p>{{slogan}}</p>
            <p>{{slogan}}</p>
            <p>{{slogan}}</p>
            <p>{{slogan}}</p>
            <ul class="menu noselect">
                <li>ART</li>
                <li><a href="../../self.html">SELF</a></li>
            </ul>
    </div>`
});
