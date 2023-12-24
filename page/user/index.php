<!--Khung cố định -->
<div class="app-item-fixed">
    <b><i class="fas fa-user"></i> Trang cá nhân</b>
    <div class="canvas"></div>
</div>
<!---->
<!--Tạo một hiển thị-->
<div class="app-item">
    <!--Phần thông tin một hiển thị-->
    <div class="app-item-info">
    <div class="app-item-media">
       
    </div>
        <center>
            <div class="i-caption FuncBtn">
            <p CallText="qwe">Tiếp tục với Iwanto</p>
            </div>
        </center>
    </div>
    <!--Phần hiển thị một phương tiện-->
    <!--Các mở rộng tùy chọn-->
    <div class="app-item-open">
        <div class="choose" DataCheck="login"><i class="fas fa-sign-in-alt"></i> <span title="Đăng nhập"></span></div>
        <div class="choose" DataCheck="signup"><i class="fas fa-user-plus"></i> <span title="Đăng kí"></span></div>
        <div class="choose" DataCheck="forget"><i class="fas fa-lock"></i> <span title="Quên?"></span></div>
    </div>
</div>
<!--Kết thúc một hiển thị-->
<style>

</style>
<script>
    $(".choose[DataCheck='login']").click(()=>{
        $("[CallText='qwe']").html("Đăng nhập");
    });
    $(".choose[DataCheck='signup']").click(()=>{
        $("[CallText='qwe']").html("Đăng kí");
    });
    $(".choose[DataCheck='forget']").click(()=>{
        $("[CallText='qwe']").html("Forget pass");
    });
</script>