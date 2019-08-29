Vue.component('password-form', {
    template: `
    <form @submit.prevent="onSubmit">
      <p>
        <label for="name">Name/E-mail:</label>
        <input id="name" v-model="name" placeholder="name or email">
      </p>
      <p>
        <label for="name">Password</label>
        <input id="password" v-model="password" placeholder="password">
      </p>
    </form>
  `,
    data() {
        return {
            name: null,
            password: null
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})