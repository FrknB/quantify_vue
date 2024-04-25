<template>
    <section class="account-area">
        <div class="info">
            <div class="account-area-text">
                <p class="area-1"><span style="color: #CB2641">Quantify</span>’da 100'den fazla kripto parayı satın
                    alın, saklayın ve alım-satım yapın.</p>

                <p class="area-2"><img src="../assets/img/mystery-box.png" width="30px" height="30px">Bitcoin alıp satarken
                    komisyon ödemeyin !</p>
            </div>
            <div class="landing-butons">
                <a href="#" class="btn">E-posta veya telefon ile kayıt ol</a>

                <p class="area-3"><img src="../assets/img/stick.png" alt=""> <span style="color: #808080">veya şununla giriş
                        yapın:</span><img src="../assets/img/stick.png" alt=""></p>

                <a href="#" class="btn google"><img src="../assets/img/google_logo.png" alt=""></a>
            </div>
        </div>
        <div class="landing-image">
            <img src="../assets/img/landing.png" alt="">
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
/* ACCOUNT AREA START */
.account-area{
    width: 100%;
    height: 708px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding: 120px 212px;
    background-image: url("../assets/img/bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.account-area-text{
    display: flex;
    flex-direction: column;
}
.area-1 {
    font-size: 46px;
    font-weight: 700;
}
.area-2 {
    font-size: 24px;
    display: flex;
    margin: 20px 0;
}
.landing-butons{
    display: flex;
    flex-direction: column;
}
.btn {
    width: 495px;
    height: 72px;
    background-color: #CB2641;
    color: #F2F2F2;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    margin: 20px 0;
    font-size: 20px;
}
.google {
    background-color: #808080;
    font-size: 32px;
}
.area-3 {
    display: flex;
    align-items: center;
    gap: 36px;
}
/* ACCOUNT-AREA END */
</style>