// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let seikai = 0;
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu=kaisu+1;
  let wa=document.querySelector('span#kaisu');
  wa.textContent=kaisu;

  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  
  // ここから: テキストボックスに指定された数値を yoso に代入する
  let n=document.querySelector('input#kazu');
  n=n.value;
  let yoso=Number(n);
  n.textContent=yoso;
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  let end=document.querySelector('p#result');
  
  if(kaisu>3 || seikai>0){
    end.textContent='答えは'+kotae+'すでにゲームは終わっています';
  }
  else if(yoso === kotae){
    // 　　　　  正解/不正解のときのメッセージを表示する
    end.textContent='正解です.おめでとう!';
    seikai=seikai+1;
  }
  else if(yoso !== kotae){
  if(yoso<kotae){
    end.textContent='まちがい.答えはもっと大きいですよ';
  }
  else{
    end.textContent='まちがい.答えはもっと小さいですよ';
  }
  }
}
  // ここまで: 正解判定する

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let b = document.querySelector('button#calc');
b.addEventListener('click', hantei); 
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
