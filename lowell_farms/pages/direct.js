/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { getPageApi, getPageByType } from '../api';
import Router from 'next/router';
import DirectPage from '../components/Direct';

export default class Direct extends Component {

  render() {


    return (
      <DirectPage />
    );
  }
}
