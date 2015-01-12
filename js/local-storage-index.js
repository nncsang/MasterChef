/**
 * Created by Khoa on 1/12/2015.
 */
$(function() {

    if(localStorage.loggedin == "false"){
        window.location.replace('/login.html')
    }

    $('#logout').click(function() {
        localStorage.loggedin = false;
        if (localStorage.chkbx == "remember-me") {
        } else {
            localStorage.usrname = '';
            localStorage.pass = '';
            localStorage.chkbx = '';
        }
    });
});