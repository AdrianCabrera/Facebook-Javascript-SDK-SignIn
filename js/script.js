/**
 * Load Facebook SDK and init Facebook buttons
 */
(function init(){

        initFacebookButtons();

        // Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        window.fbAsyncInit = initFacebook;
    }
)();

/**
 * Init login and logout buttons
 * 
 */
function initFacebookButtons(){
    var loginBtn = document.getElementById('login_btn');
    var logoutBtn = document.getElementById('logout_btn');
    loginBtn.style.display = "none";
    logoutBtn.style.display = "none";
    loginBtn.addEventListener("click", function () {
        login();
    });
    logoutBtn.addEventListener("click", function () {
        logout();
    });

}

/**
 * Init FB SDK and check login state
 * 
 */
function initFacebook(){
    FB.init({
        appId: 'APP_ID',
        cookie: true,
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.12'
    });
    checkLoginState();
}

/**
 * Check the user's Facebook login status
 * 
 */
function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

/**
 * Process logged user and/or toggle login/logout buttons
 * 
 * @param {Object} response 
 */
function statusChangeCallback(response) {
    if (response.status === 'connected') {
        getUserInfo();
        showLogin(false);
    } else if (response.status === 'not_authorized') {
        document.getElementById('status').innerHTML = 'Please log into this app.';
        showLogin(true);
    } else {
        document.getElementById('status').innerHTML = 'Please log into Facebook.';
        showLogin(true);
    }
}

/**
 * Get Facebook user's info
 * 
 */
function getUserInfo() {
    FB.api('/me', function (response) {
        document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!';
    });
}

/**
 * Log in from the app
 * 
 */
function login() {
   FB.login(function(){
        checkLoginState();
    });
}

/**
 * Logout from the app
 * 
 */
function logout() {
    FB.logout(function (response) {
        checkLoginState();
    });
}

/**
 * Toogle the login / logout buttons
 * 
 * @param {Bool} show Toggle the buttons, true = show login, false = show logout
 */
function showLogin(show){
    var loginBtn = document.getElementById('login_btn');
    var logoutBtn = document.getElementById('logout_btn');
    loginBtn.style.display = (show == true) ? "block" : "none" ;
    logoutBtn.style.display = (show == true) ? "none" : "block" ;
}