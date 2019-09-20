Vue.component('password-form', {
    template: `
    <form @submit.prevent="onSubmit">
      <h1>Vue Password Strength Validation</h1>
      <label class="frmLabel" for="password">Password <i @click="password_toggle" class="frmInputIcon fas" :class="[passwordVisibility]"></i></label>
      <input :placeholder="[placeholder]" name="password" class="frmField" :type="passwordFieldType" @input="password_check" v-model="password"/>
      <p class="frmValidation" :class="{'frmValidation--passed' :password.length > 7}"><i class="frmIcon fas" :class="password.length > 7 ? 'fa-check' : 'fa-times'"></i> Longer than 7 characters</p>
      <p class="frmValidation" :class="{'frmValidation--passed' :has_uppercase }"><i class="frmIcon fas" :class="has_uppercase ? 'fa-check' : 'fa-times'"></i> Has a capital letter</p>
      <p class="frmValidation" :class="{'frmValidation--passed' :has_lowercase }"><i class="frmIcon fas" :class="has_lowercase ? 'fa-check' : 'fa-times'"></i> Has a lowercase letter</p>
      <p class="frmValidation" :class="{'frmValidation--passed' :has_number }"><i class="frmIcon fas" :class="has_number ? 'fa-check' : 'fa-times'"></i> Has a number</p>
      <p class="frmValidation" :class="{'frmValidation--passed' :has_special }"><i class="frmIcon fas" :class="has_special ? 'fa-check' : 'fa-times'"></i> Has a special character</p>
    </form>
  `,
    data() {
        return {
            password: '',
            passwordFieldType: 'password',
            is_visible: false,
            has_number: false,
            has_lowercase: false,
            has_uppercase: false,
            has_special: false,
            show_password: false
        }
    },
    computed: {
        placeholder() {
            return 'Enter your password'
        },
        passwordVisibility() {
            return this.is_visible ? 'fa-eye-slash' : 'fa-eye'
        }
    },
    methods: {
        password_check() {
            this.has_number = /\d/.test(this.password);
            this.has_lowercase = /[a-z]/.test(this.password);
            this.has_uppercase = /[A-Z]/.test(this.password);
            this.has_special = /[!@#\$%\^\&*\)\(+=._-]/.test(this.password);
        },
        password_toggle() {
            if (this.passwordFieldType === 'password') {
                this.passwordFieldType = 'text'
                this.is_visible = true
            } else {
                this.passwordFieldType = 'password'
                this.is_visible = false
            }
        }
    }
})

let app = new Vue({
    el: '#app'
});