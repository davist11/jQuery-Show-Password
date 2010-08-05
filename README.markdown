Adds a link to toggle the masking of a password input field.

### Some Simple CSS:
<pre>.forms li {
  position: relative;
}
.show-password-link {
  display: block;
  position: absolute;
  z-index: 11;
}
.password-showing {
  position: absolute;
  z-index: 10;
}</pre>

### Example Usage with Defaults:
<pre>$(':password').showPassword({
  linkClass: 'show-password-link', //Class to use for the toggle link
  linkText: 'Show', //Text for the link
  showPasswordInputClass: 'password-showing', //Class for the text input that will show the password
  linkRightOffset: 0, //Offset from the right of the parent
  linkTopOffset: 0 //Offset from the top of the parent
});</pre>
