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
      <p>
        <input type="submit" value="submit">
      </p>
    </form>
    <password-validation></password-validation>
  `,
    data() {
        return {
            username: null,
            password: null
        }
    }
})

Vue.component('password-validation', {
    template: `
      <ol>
        <li v-for="requirement in requirements">
          {{requirement.text}}
        </li>
      </ol>
  `,
    data() {
        return {
            requirements: [
                { text: 'A <b>lowercase letter</b>' },
                { text: 'A <b>capital (uppercase)</b> ' },
                { text: 'Minimum <b>8 characters</b>' },
                { text: 'A <b>number or special character</b>' },
            ]
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})