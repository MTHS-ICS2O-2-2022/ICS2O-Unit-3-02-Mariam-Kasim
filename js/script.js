
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mariam Kasim
// Created on: Mar 2023
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the volume of a pyramid
 */
function calculate() {
  // input
  const length = parseFloat(document.getElementById("length-number").value)
  const width= parseFloat(document.getElementById("width-number").value)
  const height = parseFloat(document.getElementById("height-number").value)

  // process
  const volume = length * width * height / 3

  // output
  document.getElementById('volume').innerHTML = 'volume is: ' + volume + ' mm³'
}
