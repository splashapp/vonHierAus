import { useState } from 'react';

export default function CurrencyConverter({ currencyCode, currencyName, eurExchangeRate }) {
  const [amount, setAmount] = useState(1);

  if (!eurExchangeRate) return null;

  const numericAmount = Number.isFinite(amount) ? amount : 0;
  const converted = numericAmount * eurExchangeRate;

  function handleChange(e) {
    const value = e.target.value;
    setAmount(value === '' ? '' : parseFloat(value));
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
          step="1"
          value={amount}
          onChange={handleChange}
          aria-label="Betrag in Euro"
        />
        <span className="currency-unit">€</span>
        <span className="currency-equals">=</span>
        <span className="currency-result">
          {converted.toLocaleString('de-DE', { maximumFractionDigits: 2 })} {currencyCode}
        </span>
      </div>
    </div>
  );
}
