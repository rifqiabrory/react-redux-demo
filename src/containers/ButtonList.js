import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pressButton, pressEqual, pressReset } from '../actions/index';
import Button from '../components/Button';
class ButtonList extends Component {
  render () {
    return (
      <div className='row'>
        <div className='col-sm-9'>
          <div className='row mb-2'>
            <div className='col-sm-4'>
              <Button styles="btn-block btn-lg btn-default" title="7"
              onPress={()=>{this.props.pressButton(7)}}/>
            </div>
            <div className='col-sm-4'>
              <Button styles="btn-block btn-lg btn-default" title="8"
              onPress={()=>{this.props.pressButton(8)}}/>
            </div>
            <div className='col-sm-4'>
              <Button styles="btn-block btn-lg btn-default" title="9"
              onPress={()=>{this.props.pressButton(9)}}/>
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-sm-4'>
              <Button styles="btn-block btn-lg btn-default" title="4"
              onPress={()=>{this.props.pressButton(4)}}/>
            </div>
            <div className='col-sm-4'>
             <Button styles="btn-block btn-lg btn-default" title="5"
              onPress={()=>{this.props.pressButton(5)}}/>
            </div>
            <div className='col-sm-4'>
             <Button styles="btn-block btn-lg btn-default" title="6"
              onPress={()=>{this.props.pressButton(6)}}/>
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-sm-4'>
             <Button styles="btn-block btn-lg btn-default" title="1"
              onPress={()=>{this.props.pressButton(1)}}/>
            </div>
            <div className='col-sm-4'>
              <Button styles="btn-block btn-lg btn-default" title="2"
              onPress={()=>{this.props.pressButton(2)}}/>
            </div>
            <div className='col-sm-4'>
              <Button styles="btn-block btn-lg btn-default" title="3"
              onPress={()=>{this.props.pressButton(3)}}/>
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-sm-4'>
              <Button styles="btn-block btn-lg btn-default" title="."
              onPress={()=>{this.props.pressButton(".")}}/>
            </div>
            <div className='col-sm-4'>
              <Button styles="btn-block btn-lg btn-default" title="0"
              onPress={()=>{this.props.pressButton(0)}}/>
            </div>
            <div className='col-sm-4'>
              <Button styles="btn-block btn-lg btn-default" title="C"
              onPress={()=>{this.props.pressReset()}}/>
            </div>
          </div>
        </div>
        <div className='col-sm-3'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <Button styles="btn-block btn-lg btn-primary" title="+"
              onPress={()=>{this.props.pressButton('+')}}/>
            </div>
            <div className='col-sm-6'>
            <Button styles="btn-block btn-lg btn-primary" title="-"
              onPress={()=>{this.props.pressButton('-')}}/>
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-sm-6'>
            <Button styles="btn-block btn-lg btn-primary" title="*"
              onPress={()=>{this.props.pressButton('*')}}/>
            </div>
            <div className='col-sm-6'>
            <Button styles="btn-block btn-lg btn-primary" title="/"
              onPress={()=>{this.props.pressButton('/')}}/>
            </div>
          </div>
          <Button styles="btn-block btn-lg btn-primary" title="="
              onPress={()=>{this.props.pressEqual()}}/>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ pressButton, pressEqual, pressReset }, dispatch);
}

export default connect(null, mapDispatchToProps)(ButtonList);