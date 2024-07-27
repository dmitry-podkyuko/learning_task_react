import { useEffect, useState } from 'react';

/**
1. Сделать поиск с подсказкой (suggest аля google)
   - API - https://rickandmortyapi.com/api/character
   - Фильтровать можно по query "name"
   - Smith - слово для поиска
   - полученные с сервера подсказки выводите ниже инпута,
     и при клике на подсказку значение должно записываться в инпут
	 - Напишите дебаунс для запросов на сервер
 */

export default function App() {
  return (
    <div className='suggest'>
      <input className='search' type='search' />
    </div>
  );
}
