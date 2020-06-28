function WriteCookie() {
    var now = new Date();
    now.setMonth(now.getMonth() + 1);

    cookievalue = escape(
        document.myform.cook.value) + ";";

    document.cookie = "name" + cookievalue;

    document.cookie = "expires=" + now.toUTCString() + ";"

    alert("Cookie create...");
    alert("The value of cookie: " + cookievalue);
    alert("Expiry Data iss: " + now);
}