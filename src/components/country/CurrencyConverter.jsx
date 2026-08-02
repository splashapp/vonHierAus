import { useState } from 'react';

function roundTo(num, decimals) {
  const factor = 10 ** decimals;
  return Math.round(num * factor) / factor;
}

export default function CurrencyConverter({ currencyCode, currencyName, eurExchangeRate }) {
  const [eurValue, setEurValue] = useState('1');
  const [localValue, setLocalValue] = useState(() =>
    eurExchangeRate ? String(roundTo(1 * eurExchangeRate, 2)) : '',
  );

  if (!eurExchangeRate) return null;

  function handleEurChange(e) {
    const value = e.target.value;
    setEurValue(value);
    const num = parseFloat(value);
    setLocalValue(Number.isFinite(num) ? String(roundTo(num * eurExchangeRate, 2)) : '');
  }

  function handleLocalChange(e) {
    const value = e.target.value;
    setLocalValue(value);
    const num = parseFloat(value);
    setEurValue(Number.isFinite(num) ? String(roundTo(num / eurExchangeRate, 2)) : '');
  }

  return (
    <div className="fact-tile fact-tile-currency">
      <div className="fact-tile-label">Währungsrechner</div>
      {currencyName && <div className="fact-tile-note">{currencyName}</div>}
      <div className="currency-row">
        <input
          className="currency-input"
          type="number"
          min="0"
          step="any"
          value={eurValue}
          onChange={handleEurChange}
          aria-label="Betrag in Euro"
        />
        <span className="currency-unit">€</span>
        <span className="currency-equals">=</span>
        <input
          className="currency-input currency-input--local"
          type="number"
          min="0"
          step="any"
          value={localValue}
          onChange={handleLocalChange}
          aria-label={`Betrag in ${currencyCode}`}
        />
        <span className="currency-unit">{currencyCode}</span>
      </div>
    </div>
  );
}
