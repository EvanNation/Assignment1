function Judge(p)
{
	if (p>=80) return "   Good Job!";
	if (p>=68) return "   Keep working!";
	return "   You Need to Work Hard!";
}

function Judge_text(x,y)
{
	for (var i=0;i<x.length;i++)
		if (x.charCodeAt(i)<48  ||  x.charCodeAt(i)>57)
			return false;
	for (var i=0;i<y.length;i++)
		if (y.charCodeAt(i)<48  ||  y.charCodeAt(i)>57)
			return false;
	return true;
}


function average()
{
	var total_x=0;
	var total_y=0;
	var total=0;
	for (var i=0;i<4;i++)
	{
		var x=document.getElementsByName("t1")[i].value;							
		var y=document.getElementsByName("t2")[i].value;
		if (!Judge_text(x,y))
		{
			alert("Invalid Number!");
			return;			
		}
		x=Number(x);
		y=Number(y);
		if (y==0) continue;
		total++;
		total_x+=x;
		total_y+=y;

		var s="percentage-a"+(i+1).toString();
		var t=(x/y)*100;
		t=t.toFixed(0);
		t=t.toString()+"%";
		document.getElementById(s).innerHTML=t;
	}
	if (!total) 
	{
		alert("You need to enter more grade!");
		return;
	}

	ans=(total_x/total_y*100).toFixed(1);

	document.getElementById('result').innerHTML=ans.toString()+"/100"+Judge(ans);
}


function mean()
{
	var total_x=0;
	var total_y=0;
	var ans=0;
	var total=0;
	for (var i=0;i<4;i++)
	{	
		var x=document.getElementsByName("t1")[i].value;							
		var y=document.getElementsByName("t2")[i].value;
		if (!Judge_text(x,y))
		{
			alert("Invalid Number!");
			return;			
		}

		x=Number(x);
		y=Number(y);


		if (y==0) continue;
		ans+=x/y;		
		total++;

		var s="percentage-a"+(i+1).toString();
		var t=(x/y)*100;
		t=t.toFixed(0);
		t=t.toString()+"%";
		document.getElementById(s).innerHTML=t;
	}

	if (!total) 
	{
		alert("You need to enter more grade!");
		return;
	}

	ans/=total;
	ans*=100;
	ans=ans.toFixed(1);
	document.getElementById('result').innerHTML=ans.toString()+"/100"+Judge(ans);
}

function reset()
{
	for (var i=0;i<4;i++)
	{
		document.getElementsByName('t1')[i].value="";
		document.getElementsByName('t2')[i].value="";
		var s="percentage-a"+(i+1);
		document.getElementById(s).innerHTML="";
	}
	document.getElementById('result').innerHTML="";
}