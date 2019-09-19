Vue.component('password-form', {
    template: `
    <form @submit.prevent="onSubmit">
      <h1>Vue Password Strength Indicator</h1>
      <label class="frmLabel" for="password">Password</label>
      <input placeholder="Enter your password" name="password" class="frmField" type="password" />
      <p class="frmValidation">Longer than 7 characters</p>
      <p class="frmValidation">Has a capital letter</p>
      <p class="frmValidation">Has a lowercase letter</p>
      <p class="frmValidation">Has a number</p>
      <p class="frmValidation">Has a special character</p>
    </form>
  `,
    data() {
        return {
            username: null,
            password: null
        }
    }
})

app = new Vue({
    el: '#app'
});