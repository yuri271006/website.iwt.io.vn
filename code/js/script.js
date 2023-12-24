function root(){
    //root.call
    {
        $("[CallPage='./page/user/index.php']").click(()=>{
            $("#app").load("./page/user/index.php");
            $("#app").css({"opacity" : "60%"});
            setTimeout(()=>{$("#app").css({"opacity" : "100%"});}, 400)
            $("#CallApp").removeClass("active");
            $("[CallPage='./page/user/index.php']").addClass("active");
            // $("itText[CallText='qwe']").text("Trang cá nhân");
            // window.location="./page/user/index.php";
        })
    }
    //root.load
    {
        $(window).scroll(function(){
            if($(window).scrollTop()==$(document).height()-$(window).height()){
                //
            //    alert("a")
            }
        });
    }
    //root.func.post
    {
        {
            $(".itSpan5viewphp").hide();
            $("#post").hide();
            $(".subSever-post").hide();
            $(".app-item-fixed div p").click(()=>{ 
                $(".subSever-post").toggle(100);
                var act = $(".app-item-fixed div p").attr("data-toggle");
                if(act == "true"){
                    $("#post").height(360);
                    $(".app-item-fixed div p").attr("data-toggle", "false");
                    $(".app-item-fixed div p").text($(".app-item-fixed div p").attr("data-act"));
                    $("#post").show(400);
                    $(".itSpan5viewphp").show(400);
                }else{
                    $("#post").height(20);
                    $(".app-item-fixed div p").attr("data-toggle", "true");
                    $(".app-item-fixed div p").text($(".app-item-fixed div p").attr("data-dis"));
                    $("#post").hide(250);
                    $(".itSpan5viewphp").hide(250);
                    $("#post").val("");
                    $(".itSpan5viewphp").html("Đã nhập <itShow>0</itShow>/1000 kí tự");

                }
            });
        }
        {
            //Đang làm việc
            $("#post").keyup(()=>{ 
                var i = $("#post").val().length;
                {
                    if(i == 1000){
                        $(".itSpan5viewphp").text("Vượt giới hạn bài đăng!");
                    }
                    else{
                        $(".itSpan5viewphp").html("Đã nhập <itShow>0</itShow>/1000 kí tự");
                        $(".itSpan5viewphp itshow").text(i);
                    }
                }
            });
        }
    }
}