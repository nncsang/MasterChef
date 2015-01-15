/**
 * Created by Khoa on 1/12/2015.
 */
$(function() {
    var expiration = new Date();
    var days = 7;
    expiration.setTime(expiration.getTime()+(days*24*60*60*1000));

    var cookie = getCookie("loggedin");
    if(cookie == null || cookie == false){
        window.location.replace('login.html')
    }

    $('#logout').click(function() {
        setCookie("loggedin",false, expiration);

        if(getCookie("chkbx") == "remember-me"){
        } else {
            setCookie("usrname",'',expiration);
            setCookie("pass",'',expiration);
            setCookie("chkbx",'',expiration);
        }

    });
});