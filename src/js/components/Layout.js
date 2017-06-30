import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions/DataAction'
import Footer from './Footer'
import Header from './Header'

@connect((store) => {
  return {
    data: store.data.data
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchData())
  }

  render() {
    const { data } = this.props;

    const mappedData = data.map(item => <li key={item.id}>{item.name}</li>)

    return <div>
        <Header />
        <ul>{mappedData}</ul>
        <Footer />
    </div>
  }
}
