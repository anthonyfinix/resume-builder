import { useLayoutEffect, useRef, useState } from 'react';
import Modern from '../templates/Modern'

const Content = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useLayoutEffect(()=>{
    const handleResize = ()=>{
      if(!containerRef.current) return;
      const { offsetWidth, offsetHeight } = containerRef.current;
      setScale(Math.min((offsetWidth - 60) / 794, ( offsetHeight - 90) / 1123));
    }
    const observer = new ResizeObserver(handleResize)
    if(containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect();
  }, [])
  return <div className="content" ref={containerRef}>
    <div style={{ transform: `scale(${scale})` }}>
        <Modern />
    </div>
  </div>;
};
export default Content;
