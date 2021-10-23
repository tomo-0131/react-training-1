import { ColoredMessage } from "./components/ColoredMessage"
import { useState, useEffect } from "react"

export const App = memo(() => {
  const [ num, setNum ] = useState(0);

  const onClickButton =() => {
    setNum( (prev) => prev +1 );
  }

  const onClickReset = () => {
    setNum(0)
  }

  useEffect(() => {
    alert()
  }, [num])

  return (
    <>
      <h1 style={{ color: "red" }}>React講座</h1>

        {/* childrenを設定htmlっぽく書ける */}
        <ColoredMessage color="blue">お元気ですか？</ColoredMessage>

        <ColoredMessage color="pink">元気っす！</ColoredMessage>

        <button onClick= { onClickButton }>クリック</button>
        <p>{ num }</p>

        <Child1 onClickReset={onClickReset} />

    </>
  );
})
