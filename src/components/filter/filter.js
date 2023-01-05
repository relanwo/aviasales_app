import './filter.scss';
// import './filter.module.scss';

import { Radio } from 'antd';
// import { useDispatch, useSelector } from 'react-redux';


export default function Filter() {
  // const dispatch = useDispatch()
  // const cash = useSelector(state => state.cash)
	// console.log(cash);

  return (<Radio.Group defaultValue="cheap" buttonStyle="solid">
    <Radio.Button value="cheap">Самый дешевый</Radio.Button>
    <Radio.Button value="fast">Самый быстрый</Radio.Button>
  </Radio.Group>)
	// const buttons = [
	// 	{ name: 'cheap', label: 'Самый дешевый' },
	// 	{ name: 'fast', label: 'Самый быстрый' },
	// ];

	// const filterButtons = buttons.map(({ name, label, idx }) => {
	// 	// const isActive = filter === name;
	// 	// const filterClass = isActive ? 'selected' : '';
	// 	return (
	// 		<div
	// 			key={name}
	// 			className="radio-wrapper"
	// 			// onClick={() => onFilterChange(name)}
	// 		>
	// 			<input
	// 				id={idx}
	// 				type="radio"
	// 				// className={filterClass}
	// 			/>
	// 			<label htmlFor={idx}>{label}</label>
	// 		</div>
	// 	);
	// });

	// return <div className="filters">{filterButtons}</div>;
}
