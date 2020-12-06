
 $(document).on("load",function(){
      $(window).on("load",function(){
            if (document.body.scrollTop <20){
                $("#keterangan-scroll").fadeToggle("fast");
                $("#question1").fadeIn("slow");
                $("#scrollbawah").fadeIn("slow");
                $("#question2").fadeOut("slow");
                $("#solusi").fadeOut("slow");
                $("#textjadwal").fadeOut("slow");
                $("#Daftar").fadeOut("slow");
                $("#kotak-bg").fadeOut("slow");
                $("#footer").fadeOut("slow");
                $("#logoawal").fadeOut("fast");}
                else if (document.body.scrollTop < 80) {
                    $("#scrollbawah").fadeIn("slow");
                    $("#question1").fadeOut("slow");
                    $("#question2").fadeIn("slow");
                    $("#solusi").fadeOut("slow");
                    $("#textjadwal").fadeOut("slow");
                    $("#Daftar").fadeOut("slow");
                    $("#kotak-bg").fadeOut("slow");
                    $("#footer").fadeOut("slow");
                    $("#logoawal").fadeOut("fast");
                } else if (document.body.scrollTop > 85) {
                    $("#scrollbawah").fadeOut("slow");
                    $("#question2").fadeOut("slow");
                    $("#solusi").fadeIn("slow");
                    $("#textjadwal").fadeIn("slow");
                    $("#Daftar").fadeIn("slow");
                    $("#kotak-bg").fadeIn("slow");
                    $("#footer").fadeIn("slow");
                    $("#keterangan-scroll").fadeOut("fast");
                    $("#logoawal").fadeIn("slow");        
                }
            });
        });

        $(window).ready(function(){
            if(window.innerWidth<800){
                $("#footer").css("margin-left","33%");
                $("#footer").css("font-size","x-small");
                $("#keterangan-scroll").css("font-size","20px");
                $(".btn").css("margin-top","100px");
                $("#logoawal").css("width","277px");
                $("#logoawal").css("height","240px");
                $("#solusi").css("font-size","5px");
                $("#solusi").css("margin-top","30px");
                $("#solusi").css("margin-left","33px");
                $("#solusi1").css("font-size","28px");
                $("#solusi2").css("font-size","28px");
                $("#solusi3").css("font-size","28px");
                $("#solusi1").css("margin-left","20px");
                $("#solusi2").css("margin-left","20px");
                $("#solusi3").css("margin-left","20px");
                $(".btn").css("margin-left","33%");
                $(".btn").css("margin-top","20px");
                $("#question1").css("margin-left","20px");
                $("#question2").css("margin-left","20px");
                $("#question1").css("font-size","40px");
                $("#question2").css("font-size","33px");
                $("#scrollbawah").css("margin-top","400px");
                $("#keterangan-scroll").css("margin-top","400px");
                $("#scrollbawah").css("margin-left","20%");
                $("#keterangan-scroll").css("margin-left","1%");
            };
            });
 

$(MediaDevices).on("scroll",function () {
    if (document.documentElement.scrollTop <20){
        $("#keterangan-scroll").fadeToggle("fast");
        $("#question1").fadeIn("slow");
        $("#scrollbawah").fadeIn("slow");
        $("#question2").fadeOut("slow");
        $("#solusi").fadeOut("slow");
        $("#textjadwal").fadeOut("slow");
        $("#Daftar").fadeOut("slow");
        $("#kotak-bg").fadeOut("slow");
        $("#footer").fadeOut("slow");
        $("#logoawal").fadeOut("fast");
}else if (document.documentElement.scrollTop < 80) {
            $("#scrollbawah").fadeIn("slow");
            $("#question1").fadeOut("slow");
            $("#question2").fadeIn("slow");
            $("#solusi").fadeOut("slow");
            $("#textjadwal").fadeOut("slow");
            $("#Daftar").fadeOut("slow");
            $("#kotak-bg").fadeOut("slow");
            $("#footer").fadeOut("slow");
            $("#logoawal").fadeOut("fast");
            
        } else if (document.documentElement.scrollTop > 300) {
            $("#scrollbawah").fadeOut("slow");
            $("#question2").fadeOut("slow");
            $("#solusi").fadeIn("slow");
            $("#textjadwal").fadeIn("slow");
            $("#Daftar").fadeIn("slow");
            $("#kotak-bg").fadeIn("slow");
            $("#footer").fadeIn("slow");
            $("#keterangan-scroll").fadeOut("fast");
            $("#logoawal").fadeIn("slow");
            
            
        }
    });

    $.ajax({
        //...stuff...
        cache: false,
        headers: { "cache-control": "no-cache" },
        //...more stuff...
    });

    $(document).on("load",function () {
        $.ajaxSetup({ cache: false });
    });