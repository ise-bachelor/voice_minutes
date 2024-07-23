import interact from "interactjs";
import { useState, useRef, useEffect } from "react";

const initPosition = {
  width: 100,
  height: 100,
  x: 0,
  y: 0
}

export function useInteractJS(
  position = initPosition
) {

  // 引数で指定したpositionを初期値として、Stateを作る
  const [_position, setPosition] = useState({
    ...initPosition,
    ...position
  })

  const interactRef = useRef(null)
  let { x, y, width, height } = _position

  const enable = () => {
    interact(interactRef.current)
      // ドラッグでコンポーネントを動かすための処理を追加
      .draggable({
        inertia: false
      })
      .on('dragmove', event => {
        x += event.dx
        y += event.dy
        // ドラッグ後の座標をstateに保存する
        setPosition({
          width,
          height,
          x,
          y
        })
      })
  }

  const disable = () => {
    interact(interactRef.current).unset()
  }

  useEffect(() => {
    enable()
    return disable
  }, [])

  return {
    ref: interactRef,
    // 返り値にCSSのスタイルを追加する。このスタイルを動かしたいコンポーネントに適用することで、コンポーネントが実際に動くようになる
    style: {
      transform: `translate3D(${_position.x}px, ${_position.y}px, 0)`,
      position: 'absolute'
    },
  }
}

