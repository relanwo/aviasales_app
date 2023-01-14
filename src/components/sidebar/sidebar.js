/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import { onCheck, onCheckAll } from '../../redux/actions';
import './sidebar.scss';
import { Checkbox } from 'antd';
import { useState } from 'react';

const CheckboxGroup = Checkbox.Group;

const defaultValue = 'Все';

const Sidebar = (props) => {
	// console.log('sidebar props >', props); //undefined, потому что надо доставать через useSelector

	const checkAll = useSelector((state) => state.sidebarReducer.checkAll);
	const checkedList = useSelector((state) => state.sidebarReducer.checkedList)
  const values = useSelector((state) => state.sidebarReducer.values)

  // const checkAll = useSelector((state) => state.checkAll);
	// const checkedList = useSelector((state) => state.checkedList)
  // const values = useSelector((store) => {
  //   // state.values
  //   console.log('state.values>', store)
  // })

	const dispatch = useDispatch();

	const onCheckAllChange = (e) => dispatch(onCheckAll(e.target.checked));
	const onCheckChange = (e) => dispatch(onCheck(e));

	return (
		<aside className="sidebar">
			<label className="sidebar__title">Количество пересадок</label>
			<Checkbox
				options={defaultValue}
				checked={checkAll}
				onChange={onCheckAllChange}
				// onChange={(e) => dispatch(onCheckAllChange(e))}
			>
				{defaultValue}
			</Checkbox>
			<CheckboxGroup
				options={values}
				value={checkedList}
				onChange={onCheckChange}
				// onChange={(e) => dispatch(onChange(e))}
			/>
		</aside>
	);
};

export default Sidebar;
