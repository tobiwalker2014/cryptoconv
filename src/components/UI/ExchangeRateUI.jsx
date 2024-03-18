import React from "react";
import { Typography, Card } from "antd";

export function ExchangeRateUI(props) {
  const { price, dataObj, currencySymbol } = props;
  const toCurrency = dataObj.toCurrency;
  let value = Number(price);
  let currencyCode = toCurrency;

  let currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  });

  let formattedCurrency = currency.format(value);

  return (
    <div className="exchange-rate-ui">
      <Card extra={currencySymbol} bordered={false} style={{ width: 350, backgroundColor: "#4d4add", color: '#fff' }} size="default">
        <Typography.Paragraph style={{ color: "#fff" }}>{formattedCurrency}</Typography.Paragraph>
      </Card>
    </div>
  );
}