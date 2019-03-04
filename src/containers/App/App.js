import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLoading } from '../../actions';
import ChatBox from '../ChatBox/ChatBox';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';

export class App extends Component {

  componentDidMount = () => {
    this.props.setLoading(false);
  }

  render() {
    return (
      <div className="App">
        {this.props.isLoading ? (
          <Loader />
        ) : (
            <div className="app-items">
              <Header />
              <ChatBox />
            </div>
          )}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading
})

export const mapDispatchToProps = (dispatch) => ({
  setLoading: (isLoading) => dispatch(setLoading(isLoading))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);