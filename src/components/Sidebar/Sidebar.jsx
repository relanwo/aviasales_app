import { Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import './Sidebar.scss';

import { onCheck, onCheckAll } from '../../store/actions';

const CheckboxGroup = Checkbox.Group;

const defaultValue = 'Все';

function Sidebar() {
  const checkAll = useSelector((state) => state.sidebarReducer.checkAll);
  const checkedList = useSelector((state) => state.sidebarReducer.checkedList);
  const values = useSelector((state) => state.sidebarReducer.values);

  const dispatch = useDispatch();

  const onCheckAllChange = (e) => dispatch(onCheckAll(e.target.checked));
  const onCheckChange = (e) => dispatch(onCheck(e));

  return (
    <aside className="sidebar">
      <p className="sidebar__title">Количество пересадок</p>
      <Checkbox options={defaultValue} checked={checkAll} onChange={onCheckAllChange}>
        {defaultValue}
      </Checkbox>
      <CheckboxGroup options={values} value={checkedList} onChange={onCheckChange} />
    </aside>
  );
}

export default Sidebar;
