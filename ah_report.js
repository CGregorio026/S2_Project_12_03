"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author: Christian Gregorio
    Date:   2.27.18  
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/
// displays the donor table to the id of the div set earlier in the document
document.getElementById("donorTable").innerHTML = donorTable;
// creates a variable list the donation total at 0, but allowing it to change later
var donationTotal = 0
// uses the forEach method for each element in the donors array
donors.forEach(calcSum());

var summaryTable = "<table> <tr><th>Donors</th><td> donors </td></tr> <tr> <th>TotalDonations</th> <td>$total</td> </tr> </table>"





function calcSum(donorAmt) {
      donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
      return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
      return b[9] - a[9];
}

function writeDonorRow(value) {
      donorTable += "<tr>";
      donorTable += "<td>$" + value[9].toLocaleString() + "</td>";
      donorTable += "<td>" + value[0] + "</td>";
      donorTable += "<td>" + value[10] + "</td>";
      donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";
      donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6] + "</td>";
      donorTable += "<td>" + value[7] + "</td>";
      donorTable += "<td>" + value[8] + "</td>";
      donorTable += "</tr>";
}