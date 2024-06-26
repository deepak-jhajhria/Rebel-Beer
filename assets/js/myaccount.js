    // <!-- =============== NAVBAR JAVASCRIPT ============= -->
    function openNav() {
        document.getElementById("navbar").classList.toggle("left-0");
        document.body.classList.toggle("overflow_hidden");
        document.querySelector(".menu").classList.toggle("cross");
    }

    // <!-- =============== TABS JAVASCRIPT ============= -->
    function showTab(tab) {
        const loginTab = document.getElementById('loginTab');
        const registerTab = document.getElementById('registerTab');
        const loginContent = document.getElementById('loginContent');
        const registerContent = document.getElementById('registerContent');

        if (tab === 'login') {
            loginTab.classList.add('active_tab');
            registerTab.classList.remove('active_tab');
            loginContent.classList.remove('hidden');
            registerContent.classList.add('hidden');
        } else {
            loginTab.classList.remove('active_tab');
            registerTab.classList.add('active_tab');
            loginContent.classList.add('hidden');
            registerContent.classList.remove('hidden');
        }
    }

    // <!-- =============== LOGINTAB JAVASCRIPT ============= -->

    function isValidEmailOrUsername(input) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const usernameRegex = /^[a-zA-Z0-9_]{5,}$/;
        return emailRegex.test(input) || usernameRegex.test(input);
    }

    function isValidPassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]{8,}$/;
        return passwordRegex.test(password);
    }

    function checkInputs() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const loginButton = document.getElementById('loginButton');

        if (isValidEmailOrUsername(email) && isValidPassword(password) && document.getElementById('custom-checkbox').checked) {
            loginButton.classList.remove('cursor-not-allowed');
            loginButton.classList.add('cursor-pointer');
            loginButton.disabled = false;
        } else {
            loginButton.classList.remove('cursor-pointer');
            loginButton.classList.add('cursor-not-allowed');
            loginButton.disabled = true;
        }

        const togglePassword = document.getElementById('togglePassword');
        if (password) {
            togglePassword.classList.remove('hidden');
        } else {
            togglePassword.classList.add('hidden');
        }
    }

    function handleLogin() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (isValidEmailOrUsername(email) && isValidPassword(password) && document.getElementById('custom-checkbox').checked) {
            alert('Login successful!'); // Replace this with actual login logic
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
            document.getElementById('custom-checkbox').checked = false;
            document.getElementById('loginButton').classList.remove('cursor-pointer');
            document.getElementById('loginButton').classList.add('cursor-not-allowed');
            document.getElementById('loginButton').disabled = true;
            document.getElementById('togglePassword').classList.add('hidden'); // Hide the eye icon
        }
    }

    function togglePasswordVisibility() {
        const passwordField = document.getElementById('password');
        const eyeClosed = document.getElementById('eyeClosed');
        const eyeOpen = document.getElementById('eyeOpen');

        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            eyeClosed.classList.add('hidden');
            eyeOpen.classList.remove('hidden');
        } else {
            passwordField.type = 'password';
            eyeOpen.classList.add('hidden');
            eyeClosed.classList.remove('hidden');
        }
    }

    document.getElementById('email').addEventListener('input', checkInputs);
    document.getElementById('password').addEventListener('input', checkInputs);

    document.getElementById('custom-checkbox').addEventListener('change', function () {
        if (this.checked) {
            checkInputs(); // Check inputs when checkbox is checked
        } else {
            document.getElementById('loginButton').classList.remove('cursor-pointer');
            document.getElementById('loginButton').classList.add('cursor-not-allowed');
            document.getElementById('loginButton').disabled = true;
        }
    });

    document.getElementById('togglePassword').addEventListener('click', togglePasswordVisibility);

    document.getElementById('loginButton').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission
        handleLogin();
    });

    // <!-- =============== REGISTED JAVASCRIPT ============= -->

    document.addEventListener('DOMContentLoaded', function () {
        const emailInput = document.getElementById('emailInput');
        const registerButton = document.getElementById('registerButton');

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }

        function toggleCursorStyle() {
            if (document.activeElement === emailInput) {
                registerButton.style.cursor = 'pointer';
            } else {
                registerButton.style.cursor = 'default';
            }
        }

        emailInput.addEventListener('focus', toggleCursorStyle);
        emailInput.addEventListener('blur', toggleCursorStyle);

        registerButton.addEventListener('click', function (event) {
            event.preventDefault();

            const email = emailInput.value.trim();
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                emailInput.focus();
                return;
            }

            // Simulate registration or processing logic here
            console.log(`Registering with email: ${email}`);

            // Clear the input field after successful registration
            emailInput.value = '';
        });
    });