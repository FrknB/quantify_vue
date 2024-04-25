<template>
    <section class="populer-nft">
        <div class="populer-coin-header">
            <h1>Popüler <span class="gradient-text">NFT</span> koleksiyonları</h1>
            <a href="#">Daha fazla NFT koleksiyonu gör ></a>
        </div>
        <div class="nft-table">
            <div class="nfts">
                <h6>Koleksiyonlar</h6>
                <span><span class="nft-sort">1</span> Otherdeed for Otherside</span>
                <span><span class="nft-sort">2</span> Wrapped Cryptopunks</span>
                <span><span class="nft-sort">3</span> Bored Ape Yacht Club</span>
            </div>
            <div class="nfts">
                <h6>24H Hacim</h6>
                <span>3.4K ETH</span>
                <span>2.9K ETH</span>
                <span>2K ETH</span>
            </div>
            <div class="nfts">
                <h6>24H Değişim</h6>
                <span class="coin-down">-16.95%</span>
                <span class="coin-up">+77.02%</span>
                <span class="coin-up">+68.73%</span>
            </div>
            <div class="nfts">
                <h6>Taban Fiyat</h6>
                <span>1.75 ETH</span>
                <span>66.31 ETH</span>
                <span>61.98 ETH</span>
            </div>
            <div class="nfts">
                <h6>24H Değişim</h6>
                <span class="coin-down">-3.80%</span>
                <span class="coin-up">+1.36%</span>
                <span class="coin-up">+2.19%</span>
            </div>
            <div class="nfts">
                <h6>Taban Fiyat</h6>
                <span>11</span>
                <span>--</span>
                <span>118</span>
            </div>
            <div class="nfts">
                <h6>Ürünler</h6>
                <span>99,999</span>
                <span>733</span>
                <span>9,998</span>
            </div>
        </div>
        <div class="get-started">
            <h2>Koleksiyonunuza eşsiz parçalar ekleyin. Kayıt olun ve hemen başlayın !</h2>
            <a href="#" class="started">Başlayın</a>
        </div>
</section>
</template>

<script>
export default {

}
</script>

<style>
/* NFT STATUS START */
.gradient-text {
    font-size: 48px;
    background: -webkit-linear-gradient(#EA97A5,#CB2641);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
.populer-nft{
    background-color: #1A1A1A;
    color: #F2F2F2;
    width: 100%;
    height: 582px;
    padding: 60px 212px;
}
.nft-table{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}
.nfts{
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-size: 16px;
    margin-bottom: 60px;
    text-align: left;
    font-weight: 700;
}
.nft-sort{
    font-size: 20px;
    color: #CB2641;
    margin-right: 18px;
    font-style: italic;
}
.nfts h6{
    color: #808080;
    font-size: 14px;
}
.nft-up{
    color: #008E1F;
}
.nft-down{
    color: #B50000;
}
/* NFT STATUS END */
</style>