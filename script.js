// トロフィーの色を制御
document.getElementById("select_trophy").addEventListener("change", function(event) {
    const selectedTrophy = document.getElementById("select_trophy").value;
    const trophyURL = `img/${selectedTrophy}.png`;
    let trophy = document.getElementById("trophy");
    trophy.src = trophyURL;
})

// 実績のテキスト制御
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const achieveElement = document.getElementById('achieve_text');

    const inputText = document.getElementById('text_form').value;

    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.whiteSpace = 'nowrap';
    tempSpan.style.font = window.getComputedStyle(achieveElement).font;
    tempSpan.textContent = inputText;
    document.body.appendChild(tempSpan);
    const textWidth = tempSpan.offsetWidth;
    document.body.removeChild(tempSpan);

    // 長すぎた場合エラー、0文字の場合初期値に戻す
    if (textWidth > 320) {
        let errorMessage = document.getElementById("error");
        errorMessage.style.display = "block";
    } else if (textWidth == 0) {
        document.getElementById('achieve_text').textContent = "実績がここに表示されます";
    }else {
        let errorMessage = document.getElementById("error");
        errorMessage.style.display = "none";
        document.getElementById('achieve_text').textContent = inputText;
    }
});

document.getElementById('submit').addEventListener('click', function() {
    const inputText = document.getElementById('text_form').value;
    const achieveElement = document.getElementById('achieve_text');
    let tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.whiteSpace = 'nowrap';
    tempSpan.style.font = window.getComputedStyle(achieveElement).font;
    tempSpan.textContent = inputText;
    document.body.appendChild(tempSpan);
    var textWidth = tempSpan.offsetWidth;
    document.body.removeChild(tempSpan);

    // 長すぎた場合エラー、0文字の場合初期値に戻す
    if (textWidth > 320) {
        let errorMessage = document.getElementById("error")
        errorMessage.style.display = "block"
    } else if (textWidth == 0) {
        document.getElementById('achieve_text').textContent = "実績がここに表示されます";
    }else {
        let errorMessage = document.getElementById("error");
        errorMessage.style.display = "none";
        document.getElementById('achieve_text').textContent = inputText;
    }
});

// 画像を出力
document.getElementById("save").addEventListener("click", (async () => {
    let result = document.getElementById("result")
    domtoimage.toPng(document.querySelector("#target"), {
        width: 400,
        height: 50
      }).then((dataUrl) => {
        let img = new Image();
        img.src = dataUrl;
        result.innerHTML = '';
        result.appendChild(img)
    });
  }));
// document.getElementById("save").addEventListener("click", (async () => {
//     let result = document.getElementById("result")
//     html2canvas(document.querySelector("#target")).then(canvas => {
//         result.innerHTML = '';
//         result.appendChild(canvas)
//     });
//   }));