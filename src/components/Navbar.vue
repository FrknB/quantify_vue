<template>
  <section class="header">
    <div class="nav-logo">
        <a href="index.html"><img src="../assets/img/main_logo.png" alt=""></a>
    </div>   
    <div class="nav-links">
        <a href="#">Piyasalar</a>
        <a href="#">Al-Sat</a>
        <a href="#">Finans</a>
        <a href="#">NFT</a>
        <a href="#">Kurumsal</a>
        <div class="log-items">
            <a href="#">Giriş Yap</a>
            <a href="#" id="signup">Kayıt Ol</a>
            <span class="material-symbols-outlined">language</span>
        </div>
    </div>
    <div class="toggle">
        <span class="material-symbols-outlined" id="toggle">menu</span>
    </div>
</section>
</template>

<script>
export default {
  mounted() {
    let toggle = document.getElementById('toggle');
        toggle.addEventListener ('click', () =>{
            const navbarItems = document.querySelector('.nav-links');
            const logItems = document.querySelector('.log-items');
            navbarItems.classList.toggle('active');
            logItems.classList.toggle('active');
        });
  }
}
</script>

<style>
/* HEADER START */
.header{
  width: 100%;
  padding: 0 90px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1A1A1A;
  font-size: 14px;
  font-weight: 400;
  position: relative;
}
.nav-logo{
  height: auto;
}
.nav-logo img{
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header .nav-links{
  display: flex;
  align-items: center;
  gap: 40px;
}
.header .nav-links a{
  color: #F2F2F2;
  transition: .3s;
}
.header .nav-links a:hover{
  color: #EB3A57;
}
.log-items{
  margin-left: 342px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  gap: 32px;
}
.toggle{
  display: none;
}
.log-items span{
  margin-left: 40px;
  cursor: pointer;
}
#signup {
  background-color: #CB2641;
  width: 77px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: #F2F2F2;
}
/* HEADER END */
</style>