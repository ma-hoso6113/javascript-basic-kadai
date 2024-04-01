// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');


// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',() =>{
   // textに「ボタンをクリックしました」を追加する
  text.textContent = 'ボタンをクリックしました';
  // クリック後のテキストを出力する
  console.log(text);
   
});