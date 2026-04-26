import React, { useState, useRef, useEffect } from 'react';
import '../index.css';

const ExpandableText = ({ text, food }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsClamping, setNeedsClamping] = useState(false);
  const textRef = useRef(null);

  // Detect if the text is actually long enough to need a button
  useEffect(() => {
    const element = textRef.current;
    if (element) {
      // scrollHeight > clientHeight indicates the content is truncated
      setNeedsClamping(element.scrollHeight > element.clientHeight);
      console.log(element.scrollHeight)
      console.log(element.clientHeight)
    }
  }, [text]);

  return (
    <div>
        <div
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #ddd",
            }}
          >
            <h3 style={{ fontSize: "0.95rem", marginBottom: 6 }}>What is {food}?</h3>
            {needsClamping && (
        <button onClick={() => setIsExpanded(!isExpanded)} className="warn-notice-fill" style={{ cursor: 'pointer', marginLeft: "auto", backgroundColor: 'transparent' }}>
          {isExpanded ? '▲' : '▼'}
        </button>
      )}
          </div>

      <p 
        ref={textRef} 
        className={isExpanded ? '' : 'line-clamp'}
        style={{ margin: 0, color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.6 }}
      >
        {text}
      </p>
      
      
    </div>
  );
};

export default ExpandableText;