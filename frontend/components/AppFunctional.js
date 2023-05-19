import React, { useState } from "react";

// önerilen başlangıç stateleri
// const initialMessage = ''
// const initialEmail = ''
// const initialSteps = 0
// const initialIndex = 4

export default function AppFunctional(props) {
  // AŞAĞIDAKİ HELPERLAR SADECE ÖNERİDİR.
  // Bunları silip kendi mantığınızla sıfırdan geliştirebilirsiniz.
  const [initialMessage, setInitialMessage] = useState("");
  const [initialEmail, setInitialEmail] = useState("");
  const [initialSteps, setInitialSteps] = useState(0);
  const [initialIndex, setInitialIndex] = useState(4); //  "B" nin bulunduğu indexi

  function getXY() {
    // Koordinatları izlemek için bir state e sahip olmak gerekli değildir.
    // Bunları hesaplayabilmek için "B" nin hangi indexte olduğunu bilmek yeterlidir. 
  }

  function getXYMesaj() {
    // Kullanıcı için "Koordinatlar (2, 2)" mesajını izlemek için bir state'in olması gerekli değildir.
    // Koordinatları almak için yukarıdaki "getXY" helperını ve ardından "getXYMesaj"ı kullanabilirsiniz.
    // tamamen oluşturulmuş stringi döndürür.
  }

  function reset() {
    // Tüm stateleri başlangıç ​​değerlerine sıfırlamak için bu helperı kullanın.
    setInitialMessage("");
    setInitialIndex(4);
    setInitialSteps(0);
    setInitialEmail("")
  }

  function sonrakiIndex(yon) {
    // Bu helper bir yön ("sol", "yukarı", vb.) alır ve "B" nin bir sonraki indeksinin ne olduğunu hesaplar.
    // Gridin kenarına ulaşıldığında başka gidecek yer olmadığı için,
    // şu anki indeksi değiştirmemeli.
  }

  function ilerle(evt) {
    // Bu event handler, "B" için yeni bir dizin elde etmek üzere yukarıdaki yardımcıyı kullanabilir,
    // ve buna göre state i değiştirir.
  }

  function onChange(evt) {
    // inputun değerini güncellemek için bunu kullanabilirsiniz
    switch (evt.target.id) {
      case "left":
        setInitialMessage("");
        initialIndex % 3 !== 0
          ? (setInitialIndex(initialIndex - 1) ,setInitialSteps(initialSteps+1))
          : setInitialMessage("Sola gidemezsiniz");
        break;
      case "up":
        setInitialMessage("");
        initialIndex > 2
          ? (setInitialIndex(initialIndex - 3) ,setInitialSteps(initialSteps+1))
          : setInitialMessage("Yukarıya gidemezsiniz");
        break;
      case "right":
        setInitialMessage("");
        initialIndex % 3 !== 2
          ? (setInitialIndex(initialIndex + 1) ,setInitialSteps(initialSteps+1))
          : setInitialMessage("Sağa gidemezsiniz");
        break;
      case "down":
        setInitialMessage("");
        initialIndex < 6
          ? (setInitialIndex(initialIndex + 3) ,setInitialSteps(initialSteps+1))
          : setInitialMessage("Aşağıya gidemezsiniz");
        break;
      case "reset":
        reset();
        break;
    }
  }

  function onSubmit(evt) {
    // payloadu POST etmek için bir submit handlera da ihtiyacınız var.
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Koordinatlar ({initialIndex%3 +1}, {Math.floor(initialIndex/3)+1})</h3>
        <h3 id="steps">{initialSteps} kere ilerlediniz</h3>
      </div>
      <div id="grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
          <div
            key={idx}
            className={`square${idx === initialIndex ? " active" : ""}`}
          >
            {idx === initialIndex ? "B" : null}
          </div>
        ))}
      </div>
      <div className="info">
        <h3 id="message">{initialMessage}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={onChange}>
          SOL
        </button>
        <button id="up" onClick={onChange}>
          YUKARI
        </button>
        <button id="right" onClick={onChange}>
          SAĞ
        </button>
        <button id="down" onClick={onChange}>
          AŞAĞI
        </button>
        <button id="reset" onClick={onChange}>
          reset
        </button>
      </div>
      <form>
        <input id="email" type="email" placeholder="email girin"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  );
}
