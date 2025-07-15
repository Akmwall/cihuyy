"""const message = `I don’t even know if you’ll ever read this.\\nBut if you do… I just want you to know, I still think about you sometimes.\\n\\nWe both tried. We both cared. But the universe just never gave us enough space to become “us.”\\n\\nI just wonder… if we had met at a different point in life, would the ending have been different?\\n\\nAnyway, I hope you're doing okay, even though we’re not in each other’s lives anymore.`;

function showLetter() {
  const intro = document.getElementById("introText");
  const button = document.querySelector(".btn");
  const letterBox = document.getElementById("letterBox");
  const typedText = document.getElementById("typedText");
  const music = document.getElementById("bgm");

  music.volume = 0.5;
  music.play();

  intro.style.opacity = 0;
  button.style.opacity = 0;

  setTimeout(() => {
    button.style.display = "none";
    letterBox.style.display = "block";

    let i = 0;
    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }
    typeWriter();
  }, 700);
}
