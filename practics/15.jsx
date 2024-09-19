import React from 'react';

// 1. Вывести список акций
// 2. Добавить фильтр по отрасли (select)
// 3. Добавить фильтр по диапазону цены (2x input) типа минимальная максимальная цена

const items = [
  { ticker: 'GAZP', label: 'Газпром', industry: 'oil&gas', price: 133.44 },
  { ticker: 'YNDX', label: 'Яндекс', industry: 'IT', price: 3907.44 },
  { ticker: 'SBER', label: 'Сбербанк', industry: 'bank', price: 289.3 },
  { ticker: 'LKOH', label: 'Лукойл', industry: 'oil&gas', price: 6806 },
  { ticker: 'VTBR', label: 'ВТБ', industry: 'bank', price: 97.51 },
  { ticker: 'TCSG', label: 'ТКС холдинг', industry: 'bank', price: 2604.5 },
  { ticker: 'ROSN', label: 'Роснефть', industry: 'oil&gas', price: 511.95 },
];

const industries = ['all', 'oil&gas', 'bank', 'IT'];

export default function App() {
  return <>верстка</>;
}
