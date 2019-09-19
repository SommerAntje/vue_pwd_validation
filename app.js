Vue.component('password-form', {
    template: `
    <form @submit.prevent="onSubmit">
      <h1>Vue Password Strength Validation</h1>
      <label class="frmLabel" for="password">Password</label>
      <input placeholder="Enter your password" name="password" class="frmField" type="password" @input="password_check" v-model="message"/>
      <p class="frmValidation" :class="{'frmValidation--passed' :message.length > 7}"><i class="frmIcon fas" :class="message.length > 7 ? 'fa-check' : 'fa-times'"></i> Longer than 7 characters</p>
      <p class="frmValidation" :class="{'frmValidation--passed' :has_uppercase }"><i class="frmIcon fas" :class="has_uppercase ? 'fa-check' : 'fa-times'"></i> Has a capital letter</p>
      <p class="frmValidation" :class="{'frmValidation--passed' :has_lowercase }"><i class="frmIcon fas" :class="has_lowercase ? 'fa-check' : 'fa-times'"></i> Has a lowercase letter</p>
      <p class="frmValidation" :class="{'frmValidation--passed' :has_number }"><i class="frmIcon fas" :class="has_number ? 'fa-check' : 'fa-times'"></i> Has a number</p>
      <p class="frmValidation" :class="{'frmValidation--passed' :has_special }"><i class="frmIcon fas" :class="has_special ? 'fa-check' : 'fa-times'"></i> Has a special character</p>
    </form>
  `,
    data() {
        return {
            message: '',
            has_number: false,
            has_lowercase: false,
            has_uppercase: false,
            has_special: false
        }
    },
    methods: {
        password_check: function() {
            this.has_number = /\d/.test(this.message);
            this.has_lowercase = /[a-z]/.test(this.message);
            this.has_uppercase = /[A-Z]/.test(this.message);
            this.has_special = /[!@#\$%\^\&*\)\(+=._-]/.test(this.message);
        }
    }
})

let app = new Vue({
    el: '#app'
});