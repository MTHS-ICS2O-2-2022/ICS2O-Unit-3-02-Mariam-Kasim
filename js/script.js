
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
  const length = parseFloat(document.getElementById("lengthnumber").value)
  const width= parseFloat(document.getElementById("widthnumber").value)
  const height = parseFloat(document.getElementById("heightnumber").value)

  // process
  const volume = length * width * height / 3

  // output
  document.getElementById('volume').innerHTML = 'volume is: ' + volume + ' mm³'
}
