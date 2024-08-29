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

    // 長すぎた場合エラー
    if (textWidth > 320) {
        let errorMessage = document.getElementById("error")
        errorMessage.style.display = "block"
    } else {
        let errorMessage = document.getElementById("error")
        errorMessage.style.display = "none"
        document.getElementById('achieve_text').textContent = inputText;
    }
});

document.getElementById('submit').addEventListener('click', function() {
    let inputText = document.getElementById('text_form').value;
    let achieveElement = document.getElementById('achieve_text');
    let tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.whiteSpace = 'nowrap';
    tempSpan.style.font = window.getComputedStyle(achieveElement).font;
    tempSpan.textContent = inputText;
    document.body.appendChild(tempSpan);
    var textWidth = tempSpan.offsetWidth;
    document.body.removeChild(tempSpan);

    // 長すぎた場合エラー
    if (textWidth > 320) {
        let errorMessage = document.getElementById("error")
        errorMessage.style.display = "block"
    } else {
        let errorMessage = document.getElementById("error")
        errorMessage.style.display = "none"
        document.getElementById('achieve_text').textContent = inputText;
    }
});

document.getElementById("save").addEventListener("click", (async () => {
    let result = document.getElementById("result")
    html2canvas(document.querySelector("#target")).then(canvas => {
        result.innerHTML = '';
        result.appendChild(canvas)
    });
  }));