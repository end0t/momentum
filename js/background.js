// 이미지 랜덤 링크 가져오기
const bgArray = [
    "1.jpg","2.jpg","3.jpg",
]
// 이미지 랜덤 숫자 정하기
const bgRandom = Math.floor(Math.random() * bgArray.length) + 1;

// 이미지 태그 생성
const bgImg = document.createElement('img');

// 이미지태그 src 수정
bgImg.src = `img/${bgRandom}.jpg`

document.body.appendChild(bgImg);
