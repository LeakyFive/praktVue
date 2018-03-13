// Vue.component('useritem', {
//   template: `<tr>
//         <td> {{ item.id }}</td>
//         <td> {{ item.name }} </td>
//         <td> {{ item.login }} </td>
//         <td> {{ item.email }} </td>
//         <td> {{ item.age }} </td>
//         <td> {{ item.gender }} </td>
//         <td> {{ item.creationDate }} </td>
//     </tr>`,
//     props: {
//             item: {}
//         }
// })

// Vue.component('usertable', {
//   template: `<table>
//         <tr>
//             <td v-for="field in fields"> {{ field }}</td>
//         </tr>
//         <useritem v-for="item in source" v-bind:item="item"></useritem>
//     </table>`,
//     props: {
//     	source: Array,
//         fields: Array
//     }
// })


// var app = new Vue({
//   el: '#app',
//   data: {
//     users: [],
//     addUserForm: {
//     	name: "",
//     	login: "",
//     	email: "",
//     	age: 0,
//     	gender: ""
//     },
//     fields: [
//     	"ID", 
//     	"Name", 
//     	"Login",
//     	"Email", 
//     	"Age",
//     	"Gender",
//     	"Creation date"
//     ],
//     usersIds: 0,
//     sortAscName: true,
//     sortAscDate: true,
//   },
//   computed: {
//   		sortByName() {
//   			let result = this.users;
//   			let ascDesc = this.sortAsc ? 1 : -1;
//   			return result.sort((a, b) => ascDesc * a.name.localeCompare(b.name));
//   		},
//   		sortDate() {
//   			let result = this.users;
//   			let ascDesc = this.sortAscDate ? 1 : -1;
//   			this.sortAscDate = !this.sortAscDate;
//   			return this.items.sort((a, b) => {
//                 if (a.creationTime > b.creationTime) return -1;
//                 if (a.creationTime < b.creationTime) return 1;
//                 return 0;
//             })
//   		}
//   },
//   methods: {
//   		addUser: function () {
//   			let today = new Date();
//   			let yy = today.getFullYear();
//   			let mm = today.getMonth() + 1;
//   			let dd = today.getDate();
//   			let time = today.getTime();

//   			this.users.push({
//   				id: this.usersIds++,
//   				name: this.addUserForm.name,
//   				login: this.addUserForm.login,
//   				email: this.addUserForm.email,
//   				age: this.addUserForm.age,
//   				gender: this.addUserForm.gender,
//   				creationTime: time,
//   				creationDate: yy + '/' + mm +'/'+ dd,
//   			})
//   			console.log(this.users);
//   		},
//   		invertSort: function () {
//   			this.sortAscName = !this.sortAscName;
//   		},
//   		sortByDate: function () {
//   			this.sortAscDate = !this.sortAscDate;
//   		}
//   }
// })
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
            this.events.push(this.event)
        }
    }
})