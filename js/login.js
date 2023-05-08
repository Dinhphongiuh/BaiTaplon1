
var emailInput = document.querySelector("#txtEmail");
var pass = document.querySelector("#txtPassword");
var loginBtn = document.querySelector("#btnLogin");
var dangKyBtn = document.querySelector("#DangKy_Button");
var dangNhapBtn = document.querySelector("#DangNhap_Button")
var navbarUser = document.querySelector(".header__navbar-item.header__navbar-user");


function kiemTraTK()
{
    if (emailInput.value == "phongthcshp500@gmail.com" && pass.value == "123")
    {
        alert("Đăng nhập thành công");
        dangKyBtn.remove();
        dangNhapBtn.remove();
        navbarUser.classList.add("loginOK");
        document.querySelector(".close_modal").click()
    }   
    else
        alert("Tài khoản hoặc mật khẩu không chính xác");
}
