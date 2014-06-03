function loginbut()
{
	
	alert('123');
var form = $("#HLogin");
var u = $("#Lusername", form).val();

var p = $("#Lpassword", form).val();
	
if(u != '' && p!= '') 
{

//window.open('index_scan.html');
              
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open('index_scan.html', '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=1366,height=768');");

}

	
	}
	
