<template>
    <section class="coin-status">
        <div class="coin-info">
            <div class="statu-boxs">
                <p class="value">100+</p>
                <p class="coin-text">Listelenmiş kripto para</p>
            </div>
            <div class="statu-boxs">
                <p class="value">96 milyon</p>
                <p class="">Kayıtlı kullanıcı</p>
            </div>
            <div class="statu-boxs">
                <p class="value">< %0,10</p>
                <p class="coin-text">En düşük komisyon oranları</p>
            </div>
        </div>
        <div class="populer-coins">
            <div class="populer-coin-header">
                <h1>Popüler kripto paralar</h1>
                <a href="#">Daha fazla piyasa gör ></a>
            </div>
            <div class="coin-table">
                <div class="coins">
                    <h6>Ad</h6>
                    <span>BNB</span>
                    <span>Bitcoin</span>
                    <span>Busd</span>
                    <span>Ethereum</span>
                </div>
                <div class="coins">
                    <h6>Sembol</h6>
                    <span>BNB</span>
                    <span>BTC</span>
                    <span>BUSD</span>
                    <span>ETH</span>
                </div>
                <div class="coins">
                    <h6>Fiyat</h6>
                    <span>6.093₺</span>
                    <span>543.097₺</span>
                    <span>19,18₺</span>
                    <span>34.952₺</span>
                </div>
                <div class="coins">
                    <h6>Değişim</h6>
                    <span class="coin-up">0,00%</span>
                    <span class="coin-down">-1,01%</span>
                    <span class="coin-down">-0,04%</span>
                    <span class="coin-up">+1,13%</span>
                </div>
            </div>
        </div>
        <div class="get-started">
            <h2>Al - sat işlemlerine hemen başlayın !</h2>
            <a href="#" class="started">Başlayın</a>
        </div>
</section>
</template>

<script>
export default {

}
</script>

<style>
/* COIN STATUS START */
.coin-status{
    width: 100%;
    height: auto;
    padding: 60px 212px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.coin-info{
    width: 100%;
    margin-bottom: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
}
.statu-boxs{
    height: 120px;
    width: 364px;
    background: #3C3C3C;
    border: 2px solid #CB2641;
    border-radius: 8px;
    padding-left: 20px;
    padding-top: 20px;
    flex-wrap: wrap;
    font-weight: 700;
}
.statu-boxs .value{
    font-size: 40px;
    padding-bottom: 8px;
}
.statu-boxs p .coin-text{
    font-size: 20px;
    font-weight: 400;
}
.populer-coins{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.populer-coin-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    height: 58px;
}
.populer-coin-header h1{
    font-size: 48px;
}
.populer-coin-header a{
    color: #F2F2F2;
}
.populer-coins h1{
    font-size: 48px;
}
.coin-table{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}
.coins{
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-size: 16px;
    margin-bottom: 60px;
    text-align: left;
    font-weight: 700;
}
.coins h6{
    color: #808080;
    font-size: 14px;
}
.coin-up{
    color: #008E1F;
}
.coin-down{
    color: #B50000;
}
.get-started{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.get-started h2{
    font-size: 28px;
    margin-bottom: 20px;
}
.get-started .started{
    background: #CB2641;
    border-radius: 9px;
    color: #F2F2F2;
    width: 158px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.get-started .started a:hover{
    color: #EB3A57;
}
/* COIN STATUS END */
</style>