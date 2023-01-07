/* eslint-disable no-unused-vars */
import './filter.scss';

import { Radio } from 'antd';
import { connect } from 'react-redux';
import { toggleFilter } from '../../redux/actions'

function Filter(props) {

  return (<Radio.Group defaultValue={props.filterState} buttonStyle="solid" 
  onChange={props.changeFilterState}
  // onChange={() => dispatch(changeFilterState())}>
  >
    <Radio.Button 
      value="cheap" 
    >Самый дешевый</Radio.Button>
    <Radio.Button 
      value="fast"
    >Самый быстрый</Radio.Button>
  </Radio.Group>)
}

function mapStateToProps(state) {
  // console.log('mapStateToProps >', state)
  const {filterReducer} = state
  return {
    filterState: filterReducer.filterState
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeFilterState: () => {
      // console.log('click')

      // const action = { type: 'TOGGLE_FILTER' }
      return dispatch(toggleFilter())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);