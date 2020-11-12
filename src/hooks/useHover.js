import React, {useState, useRef, useEffect} from "react";

function useHover() {
  const [hover, setHover] = useState(false);
  const hoverRef = useRef(null);

  useEffect(() => {
    if (hoverRef && hoverRef.current) {
      hoverRef.current.addEventListener('mouseover', () => {
        setHover(true);
      })
      hoverRef.current.addEventListener('mouseout', () => {
        setHover(false)
      })
    }
    return (() => {
      hoverRef.current.removeEventListener('mouseover', () => {
        setHover(true);
      })
      hoverRef.current.removeEventListener('mouseout', () => {
        setHover(false);
      })
    })
  })

  return [hover, hoverRef]
}

export default useHover;