
		<!--
			function isNumberKey(evt)
			{
            	   var theEvent = evt || window.event;
				   var key = theEvent.keyCode || theEvent.which;
				   if ((key < 48 || key > 57) && !(key == 8 || key == 9 || key == 13 || key == 37 || key == 39 || key == 46 ) ){ 
				     theEvent.returnValue = false;
				     if (theEvent.preventDefault) theEvent.preventDefault();
  					}
            }

			function formatCurrency(num) {
				num = isNaN(num) || num === '' || num === null ? 0.00 : num;
				return parseFloat(num).toFixed(2);
			}

			function hide() {
				var ele = document.getElementById("result");
				ele.style.display = "none";
			}

			function getXMLHttpRequest() {
				  var xmlHttpReq = false;
				  // to create XMLHttpRequest object in non-Microsoft browsers
				  if (window.XMLHttpRequest) {
				    xmlHttpReq = new XMLHttpRequest();
				  } else if (window.ActiveXObject) {
				    try {
				      // to create XMLHttpRequest object in later versions
				      // of Internet Explorer
				      xmlHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
				    } catch (exp1) {
				      try {
				        // to create XMLHttpRequest object in older versions
				        // of Internet Explorer
				        xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
				      } catch (exp2) {
				        xmlHttpReq = false;
				      }
				    }
				  }
				  return xmlHttpReq;
				}
			
				/*
				 * AJAX call starts with this function
				 */
				 
				function calc() {
					
					var ele = document.getElementById("result");
					ele.style.display = "block";

					var balance = evalValue(document.myForm.balance.value);
					var interest = document.myForm.interest.value;
					var payment = document.myForm.payment.value;
					var payoffMonth = document.myForm.payoffMonth.value;
					
					var obj = "calculate?type=ccpayoff"  +
												"&balance=" + balance + 
												"&interest=" + interest +
												"&payment=" + payment +
												"&payoffMonth=" + payoffMonth;
					//alert(obj);
					
				  	var xmlHttpRequest = getXMLHttpRequest();
				  	xmlHttpRequest.onreadystatechange = getReadyStateHandler(xmlHttpRequest);
				  	xmlHttpRequest.open("POST", obj, true);
				  	xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				  	xmlHttpRequest.send(null);
				}
				 
				/*
				 * Returns a function that waits for the state change in XMLHttpRequest
				 */
				function getReadyStateHandler(xmlHttpRequest) {


				  // an anonymous function returned
				  // it listens to the XMLHttpRequest instance
				  return function() {
				    if (xmlHttpRequest.readyState == 4) {
				      if (xmlHttpRequest.status == 200) {

							//alert (xmlHttpRequest.responseText);
							
							var totalInterest = document.getElementById("totalInterest");
							var totalPayment = document.getElementById("totalPayment");
							var resultStr = document.getElementById("resultStr");
							
							var mValue = xmlHttpRequest.responseText;
							var res = mValue.split(";");

							resultStr.innerHTML = res[0];
							totalInterest.innerHTML = res[1];
							totalPayment.innerHTML = res[2];

				      } else {
				        	
				    	  	alert("HTTP error " + xmlHttpRequest.status + ": " + xmlHttpRequest.statusText);
				      }
				    }
				  };
				}
		//-->
		