import React, { useCallback, useEffect, useRef, useState } from "react";
import "./styles.css";

const Slider = ({
  min = 0,
  max = 10,
  gap = 1,
  onChange,
  renderValue,
  isShowValue,
}: {
  min: number;
  max: number;
  gap: number;
  onChange: (min: number, max: number) => void;
  renderValue?: { minValue: React.ReactNode; maxValue: React.ReactNode };
  isShowValue?: boolean;
}) => {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(0);
  const maxValRef = useRef(max);
  const range = useRef<any>(null);
  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange(minVal, maxVal);
  }, [minVal, maxVal, onChange]);

  return (
    <div className="slider-container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - gap);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 ? "5" : undefined }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + gap);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        {isShowValue ? (
          <>
            <div className="slider__left-value">
              {renderValue ? renderValue.minValue : minVal}
            </div>
            <div className="slider__right-value">
              {renderValue ? renderValue.maxValue : maxVal}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Slider;
