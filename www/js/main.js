// send bag function
$('#send-bag').click(function(event) {
    $('div.bug-message').text("Старт");
    bugReporter.login();
});

var bugReporter = {
    host : 'http://oss.fruct.org/bugzilla/jsonrpc.cgi'
}

bugReporter.login = function () {
    var login_params = {
        "method" : "User.login",
        "params" : JSON.stringify([{
        "login" :"scribo.bugs@oss.fruct.org",
        "password" : "bugsforfree"}])
    };
    
    $.ajax({
        data : login_params,
        url : bugReporter.host,
        type : 'POST',
        success : bugReporter.searchBug(data),
        error : function() {$('div.bug-message').text("error" + data.toString());
        $('div.bug-message').show();}
    });
}

bugReporter.searchBug = function(data) {
    var d = JSON.parse(data);
    $('div.bug-message').text(d);
    $('div.bug-message').show();
}