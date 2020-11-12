import {useState, useRef, useEffect} from "react";

function useHover() {
  const [hover, setHover] = useState(false);
  const hoverRef = useRef(null);

  useEffect(() => {
    const hoverRefCurr = hoverRef.current

    if (hoverRef && hoverRefCurr) {
      hoverRefCurr.addEventListener('mouseenter', () => {
        setHover(true);
      })
      hoverRefCurr.addEventListener('mouseleave', () => {
        setHover(false)
      })
    }
    return (() => {
      hoverRefCurr.removeEventListener('mouseenter', () => {
        setHover(true);
      })
      hoverRefCurr.removeEventListener('mouseleave', () => {
        setHover(false);
      })
    })
  })

  return [hover, hoverRef]
}

export default useHover;