Vue.config.keyCodes = {
    5: 53
}
Vue.component('useritem', {
  template: `<tr>
        <td> {{ item.name }} </td>
        <td> {{ item.date }} </td>
        <td> {{ item.description }} </td>
        <td> {{ item.cost }} </td>
    </tr>`,
    props: {
            item: {}
        }
})

Vue.component('usertable', {
  template: `<table>
        <tr>
            <td v-for="field in fields"> {{ field }}</td>
        </tr>
        <useritem v-for="item in source" v-bind:item="item"></useritem>
    </table>`,
    props: {
        source: Array,
        fields: Array
    }
})

Vue.component('eventview', {
    template: `<div>
                <h4>Название события</h4>
                <p>{{ event.name }}</p>
                <h4>Дата события</h4>
                <p>{{ event.date }}</p>
                <h4>Описание события</h4>
                <p>{{ event.description }}</p>
                <h4>Цена события</h4>
                <p>{{ event.cost }}</p>
    </div>`,
    props: {
        event: {}
    }
})

var app = new Vue({
    el: '#app',
    data: {
        event: {
            name: "",
            date: "",
            description: "",
            cost: "",
        },
        events: [],
        fields: [
            "Имя",
            "Дата",
            "Описание",
            "Цена"
        ],
    },
    methods: {
        createEvent: function () {
            if (!!this.event.name && !!this.event.date && !!this.event.description && !!this.event.cost) {
                this.events.push({
                    name: this.event.name,
                    date: this.event.date,
                    description: this.event.description,
                    cost: this.event.cost
                });
                this.event = {}
            } else {
                alert('Заполните поля');
            }
        }
    }
})