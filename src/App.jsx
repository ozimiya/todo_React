import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faseflag, setFase] = useState(false);

  const countUp = () => {
    setNum(num + 1);
  };
  const switchFase = () => {
    setFase(!faseflag);
  };

  //useEffect 第二引数に「空」の配列をとることで、
  //画面読み込み時の最初の一回だけ実行させることができる。
  //（state変更時のレンダリング時、実行されない）

  //num などステート管理される変数を設定した場合、
  //その変数のステートが変更された時のみ、処理が実行される。
  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      faseflag || setFase(true);
    } else {
      faseflag && setFase(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "#CCC" }}>こんちわわ</h1>
      <p>ぼくはちわわ</p>
      <ColorfulMessage color="red">お元気ですか！！！！</ColorfulMessage>
      <ColorfulMessage color="pink">げんきです</ColorfulMessage>
      <button onClick={countUp}>カウントアップ</button>
      <br />
      <button onClick={switchFase}>fase</button>
      <p>{num}</p>
      {faseflag && "<p>(^ ^)</p>"}
    </>
  );
};

export default App;
