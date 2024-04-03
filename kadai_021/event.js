// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというid要素を持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされた2秒後にイベント処理を実行する
  btn.addEventListener('click',()=>{
    setTimeout(()=>{
    text.textContent='ボタンをクリックしました';
    console.log(text);
  },2000);
});