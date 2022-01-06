// アルバムデータの作成
let list = [
    { src: 'images/ウサギ.jpg', msg: 'ウサギ'},
    { src: 'images/カエル.jpg', msg: 'カエル'},
    { src: 'images/カメ.jpg', msg: 'カメ'},
    { src: 'images/キツネ.jpg', msg: 'キツネ'},
    { src: 'images/キリン.jpg', msg: 'キリン'},
    { src: 'images/ゴリラ.jpg', msg: 'ゴリラ'},
    { src: 'images/シマウマ.jpg', msg: 'シマウマ'},
    { src: 'images/シロクマ.jpg', msg: 'シロクマ'},
    { src: 'images/ゾウ.jpg', msg: 'ゾウ'},
    { src: 'images/ハムスター.jpg', msg: 'ハムスター'},
    { src: 'images/パンダ.jpg', msg: 'パンダ'},
    { src: 'images/フラミンゴ.jpg', msg: 'フラミンゴ'},
    { src: 'images/ヘビ.jpg', msg: 'ヘビ'},
    { src: 'images/ライオン.jpg', msg: 'ライオン'},
    { src: 'images/ワニ.jpg', msg: 'ワニ'}
];

//最初のデータを表示
let mainImage = document.createElement('img');
mainImage.setAttribute('src', list[0].src);
mainImage.setAttribute('alt', list[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#animals .main');
mainFlame.insertBefore(mainImage, null);

//mainImageクリックで回転ストップ＆正解表示
mainImage.addEventListener('click',function(){
  mainImage.style.animation='none';
  mainFlame.insertBefore(mainMsg, null);
});
  
//ギャラリー画像の表示
let galleryFlame = document.querySelector('#animals .gallery');
for (let i = 0; i < list.length; i++) {
  let galleryImage = document.createElement('img');
  galleryImage.setAttribute('src', list[i].src);
  galleryImage.setAttribute('alt', list[i].msg);
  galleryFlame.insertBefore(galleryImage, null);
}

//クリックした画像をメイン＆回転＆正解を非表示
galleryFlame.addEventListener('click', function(event) {
  if (event.target.src) {
    mainImage.src = event.target.src;
    mainMsg.innerText = event.target.alt;
    mainImage.style.animation='r1 0.5s linear infinite';
    mainMsg.remove('p');
  }
});
  