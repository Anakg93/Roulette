
function calculate(){
    var investment = parseInt(document.getElementById("kasa").value);
    var betIncrement = parseInt(document.getElementById("ulog").value);
    var payOut = parseInt(document.getElementById("dobitak").value);    
    var profit = parseInt(document.getElementById("profit").value);
    var h = 0;
    var minus = 0;
    var resultHtml = ('<table> <tr> <td>' + "hand " + '</td> <td>' + "bet increment" + '</td> <td>' + " you are in minus " + '</td> <td> ' + " pay out " + '</td> <td> ' + " money left " + '</td> </tr>');

    do{        
        if (( (payOut - (betIncrement + minus)) >= profit )){
            betIncrement = betIncrement;
            payOut = payOut;
            investment = investment - betIncrement;
            minus = minus + betIncrement;
            h += 1;
            resultHtml += ("<tr><td>" + h + "</td><td>" + betIncrement + "</td><td>"  + minus + "</td><td>" + payOut + "</td><td>" + investment + "</<td></tr>");
        } else {
            betIncrement = betIncrement * 2 ;
            payOut =  2 * payOut;            
            }
        }
        while(investment >= betIncrement);             
    resultHtml += ('</table>');
    document.getElementById('myTable').innerHTML = resultHtml;
    return;        
}
