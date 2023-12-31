const submitBtn = document.getElementById('submitBtn').addEventListener('click', function (e) {
        const form = document.getElementById('myform');
        const name = document.getElementById('name').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('confirmpassword').value;
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (name == "" && email == "" && username =="" && password == "" && confirmpassword == "") {
            alert("Please fill the form");
        }
        else if (name == "") {
            alert("Please enter your name");
        }
        else if (username == ""){
         alert("Please enter your username");
        }
        else if (email == "") {
            alert("Please enter your email");
        }
        else if (!validRegex.test(email)) {
            alert("Please enter a valid email");
        }
        else if (password == "") {
            alert("Please enter your password");
        }
        
        else if (passwordConfirm== "") {
            alert("Please enter your confirm password");
        }
        else if (passwordConfirm !== password) {
            alert("Password not match");
        }
        else if (password.length > 8 && passwordConfirm > 8) {
            alert("Password must be 8 character");
        }
        else {
            alert("Your form submitted successfully");
            form.submit();
        }
    } );
    const passwordEye = document.getElementById('passwordeye')
    passwordEye.addEventListener('click', function (e) {
        if (password.type == "password"){
                password.type = "text";
            passwordEye.classList.remove('fa-eye');
             passwordEye.classList.add('fa-eye-slash');
        }
        else {
            password.type = "password";
            passwordEye.classList.remove('fa-eye-slash');
            passwordEye.classList.add('fa-eye');
        }
    });
    const passwordEyeTwo = document.getElementById('passwordeye2')
    passwordEyeTwo.addEventListener('click', function (e) {
        if (confirmpassword.type == "password") {
            confirmpassword.type = "text";
            passwordEyeTwo.classList.remove('fa-eye');
            passwordEyeTwo.classList.add('fa-eye-slash');
        }
        else {
            confirmpassword.type = "password";
            passwordEyeTwo.classList.remove('fa-eye-slash');
            passwordEyeTwo.classList.add('fa-eye');
        }
    });