function app(){
    $("#app").load("./code/php/view.php");
}
function app_CallSever_user(){
    $("#app_CallSever_user").load("./code/php/user.php");
    $("#app_CallSever_user").css({"opacity": "40%"});
    setTimeout(()=>{
        $("#app_CallSever_user").css({"opacity": "100%"});
    },100)
}
function app_CallSever_menu() {
    $("#app_CallSever_menu").load("./code/php/menu.php");
    $("#app_CallSever_menu").css({"opacity": "40%"});
    setTimeout(()=>{
        $("#app_CallSever_menu").css({"opacity": "100%"});
    },100)
}
app_CallSever_menu();
app_CallSever_user();
app();