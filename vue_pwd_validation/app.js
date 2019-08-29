Vue.component('password-form', {
    template: `
    <form @submit.prevent="onSubmit">
      <p>
        <label for="username">Name/E-mail:</label>
        <input  type="text" id="name" v-model="username" placeholder="name or email">
      </p>
      <p>
        <label for="name">Password</label>
        <input type="password" id="password" v-model="password" placeholder="password">
      </p>
    </form>
  `,
    data() {
        return {
            username: null,
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