// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return {
            //「現在の数」表示用データ，「計算用の数」取得用データを準備する（2行）
            num:0,count:1
        };
    },
    methods: {
        /* ボタン押下時に動作するメソッドを準備する（たす、ひく、かける、わる、リセット）
           現在の数に応じて表示する画像を変更するメソッドを準備する */
        tasu() {
                this.num += this.count;
        },
        hiku() {
            this.num -= this.count;
        },
        kake() {
            this.num *= this.count;
        },
        waru() {
            this.num /= this.count;
        },
        reset() {
            this.num = 0;
            this.count =0;
        },
        imageChange() {
            //HTMLからimage_areaの情報を取得する
            var mydiv = document.getElementById("image_area");
            console.log(mydiv.innerHTML);
            //現在の数が0の場合「hime1.jfif」をimage_areaに表示する（<img src="./img/hime1.jfif" width="300">）
            if(num == 0){
                <img src="./img/hime1.jfif" width="300"></img>;
            //現在の数が3の倍数かつ5の倍数の場合「hime3.png」をimage_areaに表示する（<img src="./img/hime3.png" width="300">）
            }else if(num / 3 == 0 && num / 5 ==0){
                <img src="./img/hime3.png" width="300"></img>
            //現在の数が3の倍数または5の倍数の場合「hime2.jfif」をimage_areaに表示する（<img src="./img/hime2.jfif" width="300">）
            }else if(num / 3 == 0 || num / 5 == 0){
                <img src="./img/hime2.jfif" width="300"></img>
            //上記以外の場合「hime1.jfif」をimage_areaに表示する（<img src="./img/hime1.jfif" width="300">）
            }else{
                <img src="./img/hime1.jfif" width="300"></img>
            }
        }
    }
});
