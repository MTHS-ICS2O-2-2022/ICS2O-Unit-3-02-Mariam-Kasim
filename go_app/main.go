// Created by: Mariam Kasim
// Created on: April 2023
//
// This program finds the volume of a pyramid

package main

import "fmt"

func main() (
	// This function finds the volume of a pyramid
	var lenght float64
	var width float64
	var height float64


	// input
	fmt.Println("This program finds the volume of a pyramid.")
	fmt.Println()
	fmt.Print("Enter the length(mm): ")
	fmt.Scanln(&length)
	fmt.Print("Enter the width (mm): ")
	fmt.Scanln(&width)
	fmt.Print("Enter the height (mm): ")
	fmt.Scanln(&height)

	// process
	volume = (length * width * height) / 3

	// output
	fmt.Println()
	fmt.Println "The volume is: "volume,"mm³"."
	fmt.Println "\nDone." '
	) 
