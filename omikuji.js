// use strictで厳密なエラーチェック
'use strict'

{
    // 定数の定義
    const btn = document.getElementById('btn');

    // 大吉〜凶までの定義
    // const i = 5;

    // 処理内容（アロー関数使用）
    btn.addEventListener('click', () => {

        // Math.randomを使って確率の操作
        const n = Math.random();

        if(n < 0.1) {
            btn.textContent = '大吉'; // 10%
        } else if(n < 0.5) {
            btn.textContent = '中吉'; // 40%
        } else if(n < 0.8) {
            btn.textContent = '小吉'; // 30%
        } else if(n < 0.95) {
            btn.textContent = '末吉'; // 15%
        } else {
            btn.textContent = '凶'; // 5%
        }

        // 配列に入れてコードをスッキリさせる
        // const results = ['大吉', '中吉', '小吉', '末吉', '凶'];
        // 0〜n-1までのランダムな数値を生成
        // （配列名.lengthとすることで、配列の数が増えても自動で数を計算してくれる）
        // const n = Math.floor(Math.random() * results.length);

        // 配列の中の[n]番目を表示
        // btn.textContent = results[n];

        // ボタンをクリックしたらテキスト内容を変更
        // btn.textContent = result;
        // switch (result) {
        //     case 0:
        //     btn.textContent = '大吉';
        //     break;
        //     case 1:
        //     btn.textContent = '中吉';
        //     break;
        //     case 2:
        //     btn.textContent = '小吉';
        //     break;
        //     case 3:
        //     btn.textContent = '末吉';
        //     break;
        //     case 4:
        //     btn.textContent = '凶';
        //     break;
        // }
    });

    btn.addEventListener('mousedown', () => {
        // マウスダウン時にpressed classを追加
        btn.classList.add('pressed');
    });

    btn.addEventListener('mouseup', () => {
        // マウスアップ時にpressed classを外す
        btn.classList.remove('pressed');
    });
}