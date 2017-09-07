//pad is supposed to make the output look pretty

function pad(number, length) {
				var str = '' + number;
				while (str.length < length) {
					str = '0' + str;
				}
				return str;
			}



			//this outputs the current date and time to the html document in the format YYYY-MM-DD HH:MM
			var now = new Date()
			document.write( now.getFullYear() + "-" + pad((now.getMonth() +1),2) + "-" + pad(now.getDate(),2) + " " + pad(now.getHours(),2) + ":" + pad(now.getMinutes(),2) );
			
