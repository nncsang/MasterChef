/**
 * Created by Khoa on 1/12/2015.
 */
$(function() {
    var expiration = new Date();
    var days = 7;
    expiration.setTime(expiration.getTime()+(days*24*60*60*1000));

    setCookie("loggedin", false, expiration);

    if(getCookie("chkbx") && getCookie("chkbx") != ''){
        $('#remember_me').attr('checked', 'checked');
        $('#username').val(getCookie('usrname'));
        $('#pass').val(getCookie('pass'));
    } else {
        $('#remember_me').removeAttr('checked');
        $('#username').val('');
        $('#pass').val('');
    }

    $('#remember_me').click(function() {

        if ($('#remember_me').is(':checked')) {
            // save username and password

            setCookie("usrname",$('#username').val(),expiration);
            setCookie("pass",$('#pass').val(),expiration);
            setCookie("chkbx",$('#remember_me').val(),expiration);
        } else {

            setCookie("usrname",'',expiration);
            setCookie("pass",'',expiration);
            setCookie("chkbx",'',expiration);
        }
    });

    $('#submit').click(function(){
        setCookie("loggedin",true,expiration);
        window.location.replace('/MasterChef/index.html')
    });
});