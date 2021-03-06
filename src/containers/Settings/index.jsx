/**
 * Copyright(c) xiaowei.hsueh@gmail.com.
 *
 * Authors: Richard Hsueh <xiaowei.hsueh@gmail.com> (https://www.gistop.com/)
 * @Date   : 2018-7-14 15:43:46
 */

import React from 'react'
import { connect } from 'dva'

import SettingsView from '../../components/SettingsView'
const mapStateToProps = state => {
  return {
    searchResult: state.wechat.searchResult
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Component extends React.Component {
  render() {
    return <SettingsView {...this.props} />
  }
}
