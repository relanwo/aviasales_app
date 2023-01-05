/* eslint-disable no-unused-vars */
import { useState } from 'react';

import './sidebar.scss';
// import styles from './sidebar.module.scss';

import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

export default function Sidebar() {
  // // eslint-disable-next-line no-unused-vars
  // const [indeterminate, setIndeterminate] = useState(true);

	const options = [
		'Все',
		'Без пересадок',
		'1 пересадка',
		'2 пересадки',
		'3 пересадки',
	];

  // const elements = options.map((opt) => {
  //   return (
  //     <Checkbox
	// 			// indeterminate={indeterminate}
	// 			// onChange={onCheckAllChange}
	// 			// checked={checkAll}
	// 		>
	// 			{opt}
	// 		</Checkbox>
  //   )
  // })
	return (
		<aside className="sidebar">
      <title className="sidebar__title">Количество пересадок</title>
      {/* {elements} */}
			{/* <Checkbox
				// indeterminate={indeterminate}
				// onChange={onCheckAllChange}
				// checked={checkAll}
			>
				Все
			</Checkbox> */}
			{/* <Checkbox
				options={options}
				// value={checkedList}
				// onChange={onChange}
			/> */}
      <CheckboxGroup
				options={options}
				// value={checkedList}
				// onChange={onChange}
			/>
		</aside>
	);
	// return (
	// 	<aside className='aside'>
	// 		<title className='aside__title'>Количество пересадок</title>
	// 		<div className='aside__wrapper'>
	// 			{/* <input type="checkbox">Все</input>
	// 			<input type="checkbox">Без пересадок</input>
	// 			<input type="checkbox">1 пересадка</input>
	// 			<input type="checkbox">2 пересадки</input>
	// 			<input type="checkbox">3 пересадки</input> */}
	// 		</div>
	// 	</aside>
	// );
}
