/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './sidebar.scss';
// import styles from './sidebar.module.scss';
// import { onChange, onCheckAllChange } from '.../store/sidebarSlice'
import { Checkbox } from 'antd';
import store from '../../store';
const CheckboxGroup = Checkbox.Group;

const values = [
	// 'Все',
	'Без пересадок',
	'1 пересадка',
	'2 пересадки',
	'3 пересадки',
];
const defaultValue = 'Все';

const Sidebar = () => {
  // const dispatch = useDispatch()
  // const onChange = () => dispatch(onChange())
  // const onCheckAllChange = () => dispatch(onCheckAllChange())
  // const checkedList = useSelector(state => state.sidebar.checkedList)
  // const checkAll = useSelector(state => state.sidebar.checkAll)
	const [checkedList, setCheckedList] = useState(defaultValue); // массив выбранных значений
	const [checkAll, setCheckAll] = useState(true); // true/false если все пункты выбраны то "Все"

	const onChange = (e) => {
    const list = e
    // console.log(list)
		setCheckedList(list);
		setCheckAll(list.length === values.length);
	};

	const onCheckAllChange = (e) => {
    // console.log(e.target)
		setCheckedList(e.target.checked ? values : []);
    // console.log(checkedList)
		setCheckAll(e.target.checked);
    // console.log(checkAll)
	};

	return (
		<aside className="sidebar">
      <title className="sidebar__title">Количество пересадок</title>
			<Checkbox
        options={defaultValue}
				onChange={onCheckAllChange}
				checked={checkAll}
			>
				{defaultValue}
			</Checkbox>
			<CheckboxGroup
				options={values}
				value={checkedList}
				onChange={onChange}
			/>
		</aside>
	);
};

export default Sidebar;
