import './Filter.scss';

import { Radio } from 'antd';
import { connect } from 'react-redux';

import { toggleFilter } from '../../store/actions';

function Filter(props) {
  const { filterState, changeFilterState } = props;

  return (
    <Radio.Group defaultValue={filterState} buttonStyle="solid" onChange={changeFilterState}>
      <Radio.Button value="cheap">Самый дешевый</Radio.Button>
      <Radio.Button value="fast">Самый быстрый</Radio.Button>
    </Radio.Group>
  );
}

function mapStateToProps(state) {
  const { filterReducer } = state;
  return {
    filterState: filterReducer.filterState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeFilterState: () => dispatch(toggleFilter()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
