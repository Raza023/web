let plr1=true;
let plr2=false;

let glock=false;
let block = false;

let gpath1 = ["g5","g4","g3","g2","g1","r18","r15","r12","r9","r6","r3","r2","r1","r4","r7","r10","r13","r16","b6","b5","b4","b3","b2","b1","b7","b13","b14","b15","b16","b17","b18","y1","y4","y7","y10","y13","y16","y17","y18","y15","y12","y9","y6","y3","g13","g14","g15","g16","g17","g18","g12","g11","g10","g9","g8","g7","arrow-up"];
let gind1=0;
let gpath2 = ["g5","g4","g3","g2","g1","r18","r15","r12","r9","r6","r3","r2","r1","r4","r7","r10","r13","r16","b6","b5","b4","b3","b2","b1","b7","b13","b14","b15","b16","b17","b18","y1","y4","y7","y10","y13","y16","y17","y18","y15","y12","y9","y6","y3","g13","g14","g15","g16","g17","g18","g12","g11","g10","g9","g8","g7","arrow-up"];
let gind2=0;
let gpath3 = ["g5","g4","g3","g2","g1","r18","r15","r12","r9","r6","r3","r2","r1","r4","r7","r10","r13","r16","b6","b5","b4","b3","b2","b1","b7","b13","b14","b15","b16","b17","b18","y1","y4","y7","y10","y13","y16","y17","y18","y15","y12","y9","y6","y3","g13","g14","g15","g16","g17","g18","g12","g11","g10","g9","g8","g7","arrow-right"];
let gind3=0;
let gpath4 = ["g5","g4","g3","g2","g1","r18","r15","r12","r9","r6","r3","r2","r1","r4","r7","r10","r13","r16","b6","b5","b4","b3","b2","b1","b7","b13","b14","b15","b16","b17","b18","y1","y4","y7","y10","y13","y16","y17","y18","y15","y12","y9","y6","y3","g13","g14","g15","g16","g17","g18","g12","g11","g10","g9","g8","g7","arrow-right"];
let gind4=0;

let bpath1 = ["b14","b15","b16","b17","b18","y1","y4","y7","y10","y13","y16","y17","y18","y15","y12","y9","y6","y3","g13","g14","g15","g16","g17","g18","g12","g6","g5","g4","g3","g2","g1","r18","r15","r12","r9","r6","r3","r2","r1","r4","r7","r10","r13","r16","b6","b5","b4","b3","b2","b1","b7","b8","b9","b10","b11","b12","arrow-down"];
let bind1=0;
let bpath2 = ["b14","b15","b16","b17","b18","y1","y4","y7","y10","y13","y16","y17","y18","y15","y12","y9","y6","y3","g13","g14","g15","g16","g17","g18","g12","g6","g5","g4","g3","g2","g1","r18","r15","r12","r9","r6","r3","r2","r1","r4","r7","r10","r13","r16","b6","b5","b4","b3","b2","b1","b7","b8","b9","b10","b11","b12","arrow-down"];
let bind2=0;
let bpath3 = ["b14","b15","b16","b17","b18","y1","y4","y7","y10","y13","y16","y17","y18","y15","y12","y9","y6","y3","g13","g14","g15","g16","g17","g18","g12","g6","g5","g4","g3","g2","g1","r18","r15","r12","r9","r6","r3","r2","r1","r4","r7","r10","r13","r16","b6","b5","b4","b3","b2","b1","b7","b8","b9","b10","b11","b12","arrow-left"];
let bind3=0;
let bpath4 = ["b14","b15","b16","b17","b18","y1","y4","y7","y10","y13","y16","y17","y18","y15","y12","y9","y6","y3","g13","g14","g15","g16","g17","g18","g12","g6","g5","g4","g3","g2","g1","r18","r15","r12","r9","r6","r3","r2","r1","r4","r7","r10","r13","r16","b6","b5","b4","b3","b2","b1","b7","b8","b9","b10","b11","b12","arrow-left"];
let bind4=0;

//gpath1.length = 57 [0-56]
//bpath1.length = 57 [0-56]

let gcounter=4;
let bcounter=4;

let gpf1=true;
let gpf2=true;
let gpf3=true;
let gpf4=true;

let bpf1=true;
let bpf2=true;
let bpf3=true;
let bpf4=true;

let galive1=false;
let galive2=false;
let galive3=false;
let galive4=false;

let gwin1=false;
let gwin2=false;
let gwin3=false;
let gwin4=false; 

let balive1=false;
let balive2=false;
let balive3=false;
let balive4=false;

let bwin1=false;
let bwin2=false;
let bwin3=false;
let bwin4=false;

let gstuck1=true;
let gstuck2=true;
let gstuck3=true;
let gstuck4=true;

let bstuck1=true;
let bstuck2=true;
let bstuck3=true;
let bstuck4=true;

let getval=0;

let person1 = prompt("Please enter the name of player 1", "Player 1");
while(person1 == null || person1 == '')
{
	person1 = prompt("Please enter the name of player 1", "Player 1");
}

let person2 = prompt("Please enter the name of player 2", "Player 2");
while(person2 == null || person2 == '')
{
	person2 = prompt("Please enter the name of player 2", "Player 2");
}

document.getElementById("btn").onclick=function()
{
	document.getElementById("btn").style.display = "none";
	let rand = getRndInteger(1, 6);
	document.getElementById("num").innerText=rand;
	
	if(plr1==true)
	{
		document.getElementById("plr").innerHTML = ""+person1+"'s turn:";
		if(document.getElementById("num").innerText == "1")
		{
			gOneToFive();
		}
		else if(document.getElementById("num").innerText == "2")
		{
			gOneToFive();
		}
		else if(document.getElementById("num").innerText == "3")
		{
			gOneToFive();
		}
		else if(document.getElementById("num").innerText == "4")
		{
			gOneToFive();
		}
		else if(document.getElementById("num").innerText == "5")
		{
			gOneToFive();
		}
		else if(document.getElementById("num").innerText == "6")
		{
			glock=false;
			getval = parseInt(document.getElementById("num").innerText);
			if(gcounter <= 4 && gcounter >= 0)
			{
				if(gpf1==true && gwin1==false)
				{
					document.getElementById("gp1").style.borderColor = "black";
					document.getElementById("gp1").style.borderStyle = "double";
					document.getElementById("gp1").style.borderWidth = "3px";
				}
				if(gpf2==true && gwin2==false)
				{
					document.getElementById("gp2").style.borderColor = "black";
					document.getElementById("gp2").style.borderStyle = "double";
					document.getElementById("gp2").style.borderWidth = "3px";
				}
				if(gpf3==true && gwin3==false)
				{
					document.getElementById("gp3").style.borderColor = "black";
					document.getElementById("gp3").style.borderStyle = "double";
					document.getElementById("gp3").style.borderWidth = "3px";
				}
				if(gpf4==true && gwin4==false)
				{
					document.getElementById("gp4").style.borderColor = "black";
					document.getElementById("gp4").style.borderStyle = "double";
					document.getElementById("gp4").style.borderWidth = "3px";
				}
				
				document.getElementById("gp1").onclick=function()
				{
					if(galive1==false)
					{
						let x=document.getElementById("gspace1").innerHTML;
						let y=document.getElementById("gp1").outerHTML;
						
						if(x==y && glock == false && plr1==true)
						{
							gind1=0;
							var fragment = document.createDocumentFragment();
							fragment.appendChild(document.getElementById('gp1'));
							document.getElementById(gpath1[gind1]).appendChild(fragment);
							
							gcounter=gcounter-1;
							glock= true;
							galive1=true;
							gstuck1=false;
							document.getElementById("btn").style.display = "block";
							document.getElementById("gp1").style.borderStyle = "solid";
							document.getElementById("gp1").style.borderWidth = "1px";
							document.getElementById("gp2").style.borderStyle = "solid";
							document.getElementById("gp2").style.borderWidth = "1px";
							document.getElementById("gp3").style.borderStyle = "solid";
							document.getElementById("gp3").style.borderWidth = "1px";
							document.getElementById("gp4").style.borderStyle = "solid";
							document.getElementById("gp4").style.borderWidth = "1px";
						}
					}
					else
					{
						if(gind1<=56 && glock == false && plr1==true)
						{
							gstuck1=false;
							gind1 = gind1 + getval;
							if(gind1==56)
							{
								galive1=false;
								gwin1=true;
								gstuck1=true;
							}
							if(gind1>56)
							{
								gind1 = gind1 - getval;
								if((gcounter<=0)&&(gwin2==true && gwin3==true && gwin4 == true))
								{
									document.getElementById("btn").style.display = "block";
								}
								
								document.getElementById("gp1").style.borderStyle = "solid";
								document.getElementById("gp1").style.borderWidth = "1px";
								gstuck1=true;
								if(gstuck1==true&&gstuck2==true&&gstuck3==true&&gstuck4==true)
								{
									document.getElementById("btn").style.display = "block";
								}
							}
							else
							{
								var fragment = document.createDocumentFragment();
								fragment.appendChild(document.getElementById('gp1'));
								document.getElementById(gpath1[gind1]).appendChild(fragment);
								
								if(document.getElementById(gpath1[gind1]).innerHTML == document.getElementById('bp1').outerHTML + document.getElementById('gp1').outerHTML && gpath1[gind1]!='g5' && gpath1[gind1]!='g16' && gpath1[gind1]!='r4' && gpath1[gind1]!='r9' && gpath1[gind1]!='y10' && gpath1[gind1]!='y15' && gpath1[gind1]!='b3' && gpath1[gind1]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('bp1'));
									document.getElementById('bspace1').appendChild(killFrag);
									bind1=0;
									bcounter=bcounter+1;
									bpf1=true;
									balive1=false;
									bstuck1=true;
								}
								if(document.getElementById(gpath1[gind1]).innerHTML == document.getElementById('bp2').outerHTML + document.getElementById('gp1').outerHTML && gpath1[gind1]!='g5' && gpath1[gind1]!='g16' && gpath1[gind1]!='r4' && gpath1[gind1]!='r9' && gpath1[gind1]!='y10' && gpath1[gind1]!='y15' && gpath1[gind1]!='b3' && gpath1[gind1]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('bp2'));
									document.getElementById('bspace2').appendChild(killFrag);
									bind2=0;
									bcounter=bcounter+1;
									bpf2=true;
									balive2=false;
									bstuck2=true;
								}
								if(document.getElementById(gpath1[gind1]).innerHTML == document.getElementById('bp3').outerHTML + document.getElementById('gp1').outerHTML && gpath1[gind1]!='g5' && gpath1[gind1]!='g16' && gpath1[gind1]!='r4' && gpath1[gind1]!='r9' && gpath1[gind1]!='y10' && gpath1[gind1]!='y15' && gpath1[gind1]!='b3' && gpath1[gind1]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('bp3'));
									document.getElementById('bspace3').appendChild(killFrag);
									bind3=0;
									bcounter=bcounter+1;
									bpf3=true;
									balive3=false;
									bstuck3=true;
								}
								if(document.getElementById(gpath1[gind1]).innerHTML == document.getElementById('bp4').outerHTML + document.getElementById('gp1').outerHTML && gpath1[gind1]!='g5' && gpath1[gind1]!='g16' && gpath1[gind1]!='r4' && gpath1[gind1]!='r9' && gpath1[gind1]!='y10' && gpath1[gind1]!='y15' && gpath1[gind1]!='b3' && gpath1[gind1]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('bp4'));
									document.getElementById('bspace4').appendChild(killFrag);
									bind4=0;
									bcounter=bcounter+1;
									bpf4=true;
									balive4=false;
									bstuck4=true;
								}
								glock=true;
								
								document.getElementById("btn").style.display = "block";
								document.getElementById("gp1").style.borderStyle = "solid";
								document.getElementById("gp1").style.borderWidth = "1px";
								document.getElementById("gp2").style.borderStyle = "solid";
								document.getElementById("gp2").style.borderWidth = "1px";
								document.getElementById("gp3").style.borderStyle = "solid";
								document.getElementById("gp3").style.borderWidth = "1px";
								document.getElementById("gp4").style.borderStyle = "solid";
								document.getElementById("gp4").style.borderWidth = "1px";
							}
						}
					}
				}
				
				document.getElementById("gp2").onclick=function()
				{
					
					if (galive2==false)
					{
						let x=document.getElementById("gspace2").innerHTML;
						let y=document.getElementById("gp2").outerHTML;
						
						if(x==y && glock == false && plr1==true)
						{
							gind2=0;
							var fragment = document.createDocumentFragment();
							fragment.appendChild(document.getElementById('gp2'))
							document.getElementById(gpath2[gind2]).appendChild(fragment);
							
							gcounter=gcounter-1;
							glock=true;
							galive2=true;
							gstuck2=false;
							document.getElementById("btn").style.display = "block";
							document.getElementById("gp1").style.borderStyle = "solid";
							document.getElementById("gp1").style.borderWidth = "1px";
							document.getElementById("gp2").style.borderStyle = "solid";
							document.getElementById("gp2").style.borderWidth = "1px";
							document.getElementById("gp3").style.borderStyle = "solid";
							document.getElementById("gp3").style.borderWidth = "1px";
							document.getElementById("gp4").style.borderStyle = "solid";
							document.getElementById("gp4").style.borderWidth = "1px";
						}
					}
					else
					{
						if(gind2<=56 && glock == false && plr1==true)
						{
							gstuck2=false;
							gind2 = gind2 + getval;
							if(gind2==56)
							{
								galive2=false;
								gwin2=true;
								gstuck2=true;
							}
							if(gind2>56)
							{
								gind2 = gind2 - getval;
								if((gcounter<=0)&&(gwin1==true && gwin3==true && gwin4 == true))
								{
									document.getElementById("btn").style.display = "block";
								}
								document.getElementById("gp2").style.borderStyle = "solid";
								document.getElementById("gp2").style.borderWidth = "1px";
								gstuck2=true;
								if(gstuck1==true&&gstuck2==true&&gstuck3==true&&gstuck4==true)
								{
									document.getElementById("btn").style.display = "block";
								}
							}
							else
							{
								var fragment = document.createDocumentFragment();
								fragment.appendChild(document.getElementById('gp2'));
								document.getElementById(gpath2[gind2]).appendChild(fragment);
								
								if(document.getElementById(gpath2[gind2]).innerHTML == document.getElementById('bp1').outerHTML + document.getElementById('gp2').outerHTML && gpath2[gind2]!='g5' && gpath2[gind2]!='g16' && gpath2[gind2]!='r4' && gpath2[gind2]!='r9' && gpath2[gind2]!='y10' && gpath2[gind2]!='y15' && gpath2[gind2]!='b3' && gpath2[gind2]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('bp1'));
									document.getElementById('bspace1').appendChild(killFrag);
									bind1=0;
									bcounter=bcounter+1;
									bpf1=true;
									balive1=false;
									bstuck1=true;
								}
								if(document.getElementById(gpath2[gind2]).innerHTML == document.getElementById('bp2').outerHTML + document.getElementById('gp2').outerHTML && gpath2[gind2]!='g5' && gpath2[gind2]!='g16' && gpath2[gind2]!='r4' && gpath2[gind2]!='r9' && gpath2[gind2]!='y10' && gpath2[gind2]!='y15' && gpath2[gind2]!='b3' && gpath2[gind2]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('bp2'));
									document.getElementById('bspace2').appendChild(killFrag);
									bind2=0;
									bcounter=bcounter+1;
									bpf2=true;
									balive2=false;
									bstuck2=true;
								}
								if(document.getElementById(gpath2[gind2]).innerHTML == document.getElementById('bp3').outerHTML + document.getElementById('gp2').outerHTML && gpath2[gind2]!='g5' && gpath2[gind2]!='g16' && gpath2[gind2]!='r4' && gpath2[gind2]!='r9' && gpath2[gind2]!='y10' && gpath2[gind2]!='y15' && gpath2[gind2]!='b3' && gpath2[gind2]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('bp3'));
									document.getElementById('bspace3').appendChild(killFrag);
									bind3=0;
									bcounter=bcounter+1;
									bpf3=true;
									balive3=false;
									bstuck3=true;
								}
								if(document.getElementById(gpath2[gind2]).innerHTML == document.getElementById('bp4').outerHTML + document.getElementById('gp2').outerHTML && gpath2[gind2]!='g5' && gpath2[gind2]!='g16' && gpath2[gind2]!='r4' && gpath2[gind2]!='r9' && gpath2[gind2]!='y10' && gpath2[gind2]!='y15' && gpath2[gind2]!='b3' && gpath2[gind2]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('bp4'));
									document.getElementById('bspace4').appendChild(killFrag);
									bind4=0;
									bcounter=bcounter+1;
									bpf4=true;
									balive4=false;
									bstuck4=true;
								}
								glock=true;
								
								document.getElementById("btn").style.display = "block";
								document.getElementById("gp1").style.borderStyle = "solid";
								document.getElementById("gp1").style.borderWidth = "1px";
								document.getElementById("gp2").style.borderStyle = "solid";
								document.getElementById("gp2").style.borderWidth = "1px";
								document.getElementById("gp3").style.borderStyle = "solid";
								document.getElementById("gp3").style.borderWidth = "1px";
								document.getElementById("gp4").style.borderStyle = "solid";
								document.getElementById("gp4").style.borderWidth = "1px";
							}
						}
					}
				}
				
				document.getElementById("gp3").onclick=function()
				{
					
					if (galive3==false)
					{
						let x=document.getElementById("gspace3").innerHTML;
						let y=document.getElementById("gp3").outerHTML;
						
						if(x==y && glock == false && plr1==true)
						{
							gind3=0;
							var fragment = document.createDocumentFragment();
							fragment.appendChild(document.getElementById('gp3'));
							document.getElementById(gpath3[gind3]).appendChild(fragment);
							
							gcounter=gcounter-1;
							glock=true;
							galive3=true;
							gstuck3=false;
							document.getElementById("btn").style.display = "block";
							document.getElementById("gp1").style.borderStyle = "solid";
							document.getElementById("gp1").style.borderWidth = "1px";
							document.getElementById("gp2").style.borderStyle = "solid";
							document.getElementById("gp2").style.borderWidth = "1px";
							document.getElementById("gp3").style.borderStyle = "solid";
							document.getElementById("gp3").style.borderWidth = "1px";
							document.getElementById("gp4").style.borderStyle = "solid";
							document.getElementById("gp4").style.borderWidth = "1px";
						}
					}
					else
					{
						if(gind3<=56 && glock == false && plr1==true)
						{
							gstuck3=false;
							gind3 = gind3 + getval;
							if(gind3==56)
							{
								galive3=false;
								gwin3=true;
								gstuck3=true;
							}
							if(gind3>56)
							{
								gind3 = gind3 - getval;
								if((gcounter<=0)&&(gwin1==true && gwin2==true && gwin4 == true))
								{
									document.getElementById("btn").style.display = "block";
								}
								document.getElementById("gp3").style.borderStyle = "solid";
								document.getElementById("gp3").style.borderWidth = "1px";
								gstuck3=true;
								if(gstuck1==true&&gstuck2==true&&gstuck3==true&&gstuck4==true)
								{
									document.getElementById("btn").style.display = "block";
								}
							}
							else
							{
								var fragment = document.createDocumentFragment();
								fragment.appendChild(document.getElementById('gp3'));
								document.getElementById(gpath3[gind3]).appendChild(fragment);
								
								if(document.getElementById(gpath3[gind3]).innerHTML == document.getElementById('bp1').outerHTML + document.getElementById('gp3').outerHTML && gpath3[gind3]!='g5' && gpath3[gind3]!='g16' && gpath3[gind3]!='r4' && gpath3[gind3]!='r9' && gpath3[gind3]!='y10' && gpath3[gind3]!='y15' && gpath3[gind3]!='b3' && gpath3[gind3]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('bp1'));
									document.getElementById('bspace1').appendChild(killFrag);
									bind1=0;
									bcounter=bcounter+1;
									bpf1=true;
									balive1=false;
									bstuck1=true;
								}
								if(document.getElementById(gpath3[gind3]).innerHTML == document.getElementById('bp2').outerHTML + document.getElementById('gp3').outerHTML && gpath3[gind3]!='g5' && gpath3[gind3]!='g16' && gpath3[gind3]!='r4' && gpath3[gind3]!='r9' && gpath3[gind3]!='y10' && gpath3[gind3]!='y15' && gpath3[gind3]!='b3' && gpath3[gind3]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('bp2'));
									document.getElementById('bspace2').appendChild(killFrag);
									bind2=0;
									bcounter=bcounter+1;
									bpf2=true;
									balive2=false;
									bstuck2=true;
								}
								if(document.getElementById(gpath3[gind3]).innerHTML == document.getElementById('bp3').outerHTML + document.getElementById('gp3').outerHTML && gpath3[gind3]!='g5' && gpath3[gind3]!='g16' && gpath3[gind3]!='r4' && gpath3[gind3]!='r9' && gpath3[gind3]!='y10' && gpath3[gind3]!='y15' && gpath3[gind3]!='b3' && gpath3[gind3]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('bp3'));
									document.getElementById('bspace3').appendChild(killFrag);
									bind3=0;
									bcounter=bcounter+1;
									bpf3=true;
									balive3=false;
									bstuck3=true;
								}
								if(document.getElementById(gpath3[gind3]).innerHTML == document.getElementById('bp4').outerHTML + document.getElementById('gp3').outerHTML && gpath3[gind3]!='g5' && gpath3[gind3]!='g16' && gpath3[gind3]!='r4' && gpath3[gind3]!='r9' && gpath3[gind3]!='y10' && gpath3[gind3]!='y15' && gpath3[gind3]!='b3' && gpath3[gind3]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('bp4'));
									document.getElementById('bspace4').appendChild(killFrag);
									bind4=0;
									bcounter=bcounter+1;
									bpf4=true;
									balive4=false;
									bstuck4=true;
								}
								glock=true;
								
								document.getElementById("btn").style.display = "block";
								document.getElementById("gp1").style.borderStyle = "solid";
								document.getElementById("gp1").style.borderWidth = "1px";
								document.getElementById("gp2").style.borderStyle = "solid";
								document.getElementById("gp2").style.borderWidth = "1px";
								document.getElementById("gp3").style.borderStyle = "solid";
								document.getElementById("gp3").style.borderWidth = "1px";
								document.getElementById("gp4").style.borderStyle = "solid";
								document.getElementById("gp4").style.borderWidth = "1px";
							}
						}
					}
				}
				
				document.getElementById("gp4").onclick=function()
				{
					
					if(galive4==false)
					{
						let x=document.getElementById("gspace4").innerHTML;
						let y=document.getElementById("gp4").outerHTML;
						
						if(x==y && glock == false && plr1==true)
						{
							gind4=0;
							var fragment = document.createDocumentFragment();
							fragment.appendChild(document.getElementById('gp4'));
							document.getElementById(gpath4[gind4]).appendChild(fragment);
							
							gcounter=gcounter-1;
							glock=true;
							galive4=true;
							gstuck4=false;
							document.getElementById("btn").style.display = "block";
							document.getElementById("gp1").style.borderStyle = "solid";
							document.getElementById("gp1").style.borderWidth = "1px";
							document.getElementById("gp2").style.borderStyle = "solid";
							document.getElementById("gp2").style.borderWidth = "1px";
							document.getElementById("gp3").style.borderStyle = "solid";
							document.getElementById("gp3").style.borderWidth = "1px";
							document.getElementById("gp4").style.borderStyle = "solid";
							document.getElementById("gp4").style.borderWidth = "1px";
						}
					}
					else
					{
						
						if(gind4<=56 && glock == false && plr1==true)
						{
							gstuck4=false;
							gind4 = gind4 + getval;
							if(gind4==56)
							{
								galive4=false;
								gwin4=true;
								gstuck4=true;
							}
							if(gind4>56)
							{
								gind4 = gind4 - getval;
								if((gcounter<=0)&&(gwin1==true && gwin2==true && gwin3 == true))
								{
									document.getElementById("btn").style.display = "block";
								}
								document.getElementById("gp4").style.borderStyle = "solid";
								document.getElementById("gp4").style.borderWidth = "1px";
								gstuck4=true;
								if(gstuck1==true&&gstuck2==true&&gstuck3==true&&gstuck4==true)
								{
									document.getElementById("btn").style.display = "block";
								}
							}
							else
							{
								var fragment = document.createDocumentFragment();
								fragment.appendChild(document.getElementById('gp4'));
								document.getElementById(gpath4[gind4]).appendChild(fragment);
								
								if(document.getElementById(gpath4[gind4]).innerHTML == document.getElementById('bp1').outerHTML + document.getElementById('gp4').outerHTML && gpath4[gind4]!='g5' && gpath4[gind4]!='g16' && gpath4[gind4]!='r4' && gpath4[gind4]!='r9' && gpath4[gind4]!='y10' && gpath4[gind4]!='y15' && gpath4[gind4]!='b3' && gpath4[gind4]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('bp1'));
									document.getElementById('bspace1').appendChild(killFrag);
									bind1=0;
									bcounter=bcounter+1;
									bpf1=true;
									balive1=false;
									bstuck1=true;
								}
								if(document.getElementById(gpath4[gind4]).innerHTML == document.getElementById('bp2').outerHTML + document.getElementById('gp4').outerHTML && gpath4[gind4]!='g5' && gpath4[gind4]!='g16' && gpath4[gind4]!='r4' && gpath4[gind4]!='r9' && gpath4[gind4]!='y10' && gpath4[gind4]!='y15' && gpath4[gind4]!='b3' && gpath4[gind4]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('bp2'));
									document.getElementById('bspace2').appendChild(killFrag);
									bind2=0;
									bcounter=bcounter+1;
									bpf2=true;
									balive2=false;
									bstuck2=true;
								}
								if(document.getElementById(gpath4[gind4]).innerHTML == document.getElementById('bp3').outerHTML + document.getElementById('gp4').outerHTML && gpath4[gind4]!='g5' && gpath4[gind4]!='g16' && gpath4[gind4]!='r4' && gpath4[gind4]!='r9' && gpath4[gind4]!='y10' && gpath4[gind4]!='y15' && gpath4[gind4]!='b3' && gpath4[gind4]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('bp3'));
									document.getElementById('bspace3').appendChild(killFrag);
									bind3=0;
									bcounter=bcounter+1;
									bpf3=true;
									balive3=false;
									bstuck3=true;
								}
								if(document.getElementById(gpath4[gind4]).innerHTML == document.getElementById('bp4').outerHTML + document.getElementById('gp4').outerHTML && gpath4[gind4]!='g5' && gpath4[gind4]!='g16' && gpath4[gind4]!='r4' && gpath4[gind4]!='r9' && gpath4[gind4]!='y10' && gpath4[gind4]!='y15' && gpath4[gind4]!='b3' && gpath4[gind4]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('bp4'));
									document.getElementById('bspace4').appendChild(killFrag);
									bind4=0;
									bcounter=bcounter+1;
									bpf4=true;
									balive4=false;
									bstuck4=true;
								}
								glock=true;

								document.getElementById("btn").style.display = "block";
								document.getElementById("gp1").style.borderStyle = "solid";
								document.getElementById("gp1").style.borderWidth = "1px";
								document.getElementById("gp2").style.borderStyle = "solid";
								document.getElementById("gp2").style.borderWidth = "1px";
								document.getElementById("gp3").style.borderStyle = "solid";
								document.getElementById("gp3").style.borderWidth = "1px";
								document.getElementById("gp4").style.borderStyle = "solid";
								document.getElementById("gp4").style.borderWidth = "1px";
							}
						}
					}
				}
			}
			plr2=false;
			plr1=true;
		}
		if(galive1==false && galive2 == false && galive3 == false && galive4 == false && document.getElementById("num").innerText != 6)
		{
			document.getElementById("btn").style.display = "block";
		}
	}
	else if(plr2==true)
	{
		document.getElementById("plr").innerHTML= ""+person2+"'s turn:";
		
		if(document.getElementById("num").innerText == "1")
		{
			bOneToFive();
		}
		else if(document.getElementById("num").innerText == "2")
		{
			bOneToFive();
		}
		else if(document.getElementById("num").innerText == "3")
		{
			bOneToFive();
		}
		else if(document.getElementById("num").innerText == "4")
		{
			bOneToFive();
		}
		else if(document.getElementById("num").innerText == "5")
		{
			bOneToFive();
		}
		else if(document.getElementById("num").innerText == "6")
		{
			block=false;
			getval = parseInt(document.getElementById("num").innerText);
			if(bcounter <= 4 && bcounter >= 0)
			{
				if(bpf1==true && bwin1==false)
				{
					document.getElementById("bp1").style.borderColor = "black";
					document.getElementById("bp1").style.borderStyle = "double";
					document.getElementById("bp1").style.borderWidth = "3px";
				}
				if(bpf2==true && bwin2==false)
				{
					document.getElementById("bp2").style.borderColor = "black";
					document.getElementById("bp2").style.borderStyle = "double";
					document.getElementById("bp2").style.borderWidth = "3px";
				}
				if(bpf3==true && bwin3==false)
				{
					document.getElementById("bp3").style.borderColor = "black";
					document.getElementById("bp3").style.borderStyle = "double";
					document.getElementById("bp3").style.borderWidth = "3px";
				}
				if(bpf4==true && bwin4==false)
				{
					document.getElementById("bp4").style.borderColor = "black";
					document.getElementById("bp4").style.borderStyle = "double";
					document.getElementById("bp4").style.borderWidth = "3px";
				}
				
				document.getElementById("bp1").onclick=function()
				{
					if(balive1==false)
					{
						let x=document.getElementById("bspace1").innerHTML;
						let y=document.getElementById("bp1").outerHTML;
						
						if(x==y && block == false && plr2==true)
						{
							bind1=0;
							var fragment = document.createDocumentFragment();
							fragment.appendChild(document.getElementById('bp1'));
							document.getElementById(bpath1[bind1]).appendChild(fragment);
							bcounter=bcounter-1;
							block=true;
							balive1=true;
							bstuck1=false;
							document.getElementById("btn").style.display = "block";
							document.getElementById("bp1").style.borderStyle = "solid";
							document.getElementById("bp1").style.borderWidth = "1px";
							document.getElementById("bp2").style.borderStyle = "solid";
							document.getElementById("bp2").style.borderWidth = "1px";
							document.getElementById("bp3").style.borderStyle = "solid";
							document.getElementById("bp3").style.borderWidth = "1px";
							document.getElementById("bp4").style.borderStyle = "solid";
							document.getElementById("bp4").style.borderWidth = "1px";
						}
					}
					else
					{
						if(bind1<=56 && block == false && plr2==true)
						{
							bstuck1=false;
							bind1 = bind1 + getval;
							if(bind1==56)
							{
								balive1=false;
								bwin1=true;
								bstuck1=true;
							}
							if(bind1>56)
							{
								bind1 = bind1 - getval;
								if((bcounter<=0)&&(bwin2==true && bwin3==true && bwin4 == true))
								{
									document.getElementById("btn").style.display = "block";
								}
								document.getElementById("bp1").style.borderStyle = "solid";
								document.getElementById("bp1").style.borderWidth = "1px";
								bstuck1=true;
								if(bstuck1==true&&bstuck2==true&&bstuck3==true&&bstuck4==true)
								{
									document.getElementById("btn").style.display = "block";
								}
							}
							else
							{
								var fragment = document.createDocumentFragment();
								fragment.appendChild(document.getElementById('bp1'));
								document.getElementById(bpath1[bind1]).appendChild(fragment);
								
								if(document.getElementById(bpath1[bind1]).innerHTML == document.getElementById('gp1').outerHTML + document.getElementById('bp1').outerHTML && bpath1[bind1]!='g5' && bpath1[bind1]!='g16' && bpath1[bind1]!='r4' && bpath1[bind1]!='r9' && bpath1[bind1]!='y10' && bpath1[bind1]!='y15' && bpath1[bind1]!='b3' && bpath1[bind1]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('gp1'));
									document.getElementById('gspace1').appendChild(killFrag);
									gind1=0;
									gcounter=gcounter+1;
									gpf1=true;
									galive1=false;
									gstuck1=true;
								}
								if(document.getElementById(bpath1[bind1]).innerHTML == document.getElementById('gp2').outerHTML + document.getElementById('bp1').outerHTML && bpath1[bind1]!='g5' && bpath1[bind1]!='g16' && bpath1[bind1]!='r4' && bpath1[bind1]!='r9' && bpath1[bind1]!='y10' && bpath1[bind1]!='y15' && bpath1[bind1]!='b3' && bpath1[bind1]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('gp2'));
									document.getElementById('gspace2').appendChild(killFrag);
									gind2=0;
									gcounter=gcounter+1;
									gpf2=true;
									galive2=false;
									gstuck2=true;
								}
								if(document.getElementById(bpath1[bind1]).innerHTML == document.getElementById('gp3').outerHTML + document.getElementById('bp1').outerHTML && bpath1[bind1]!='g5' && bpath1[bind1]!='g16' && bpath1[bind1]!='r4' && bpath1[bind1]!='r9' && bpath1[bind1]!='y10' && bpath1[bind1]!='y15' && bpath1[bind1]!='b3' && bpath1[bind1]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('gp3'));
									document.getElementById('gspace3').appendChild(killFrag);
									gind3=0;
									gcounter=gcounter+1;
									gpf3=true;
									galive3=false;
									gstuck3=true;
								}
								if(document.getElementById(bpath1[bind1]).innerHTML == document.getElementById('gp4').outerHTML + document.getElementById('bp1').outerHTML && bpath1[bind1]!='g5' && bpath1[bind1]!='g16' && bpath1[bind1]!='r4' && bpath1[bind1]!='r9' && bpath1[bind1]!='y10' && bpath1[bind1]!='y15' && bpath1[bind1]!='b3' && bpath1[bind1]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('gp4'));
									document.getElementById('gspace4').appendChild(killFrag);
									gind4=0;
									gcounter=gcounter+1;
									gpf4=true;
									galive4=false;
									gstuck4=true;
								}
								block=true;
								
								document.getElementById("btn").style.display = "block";
								document.getElementById("bp1").style.borderStyle = "solid";
								document.getElementById("bp1").style.borderWidth = "1px";
								document.getElementById("bp2").style.borderStyle = "solid";
								document.getElementById("bp2").style.borderWidth = "1px";
								document.getElementById("bp3").style.borderStyle = "solid";
								document.getElementById("bp3").style.borderWidth = "1px";
								document.getElementById("bp4").style.borderStyle = "solid";
								document.getElementById("bp4").style.borderWidth = "1px";
							}
						}
					}
				}
				
				document.getElementById("bp2").onclick=function()
				{
					if(balive2==false)
					{
						let x=document.getElementById("bspace2").innerHTML;
						let y=document.getElementById("bp2").outerHTML;
						
						if(x==y && block == false && plr2==true)
						{
							bind2=0;
							var fragment = document.createDocumentFragment();
							fragment.appendChild(document.getElementById('bp2'));
							document.getElementById(bpath2[bind2]).appendChild(fragment);
							bcounter=bcounter-1;
							block = true;
							balive2=true;
							bstuck2=false;
							document.getElementById("btn").style.display = "block";
							document.getElementById("bp1").style.borderStyle = "solid";
							document.getElementById("bp1").style.borderWidth = "1px";
							document.getElementById("bp2").style.borderStyle = "solid";
							document.getElementById("bp2").style.borderWidth = "1px";
							document.getElementById("bp3").style.borderStyle = "solid";
							document.getElementById("bp3").style.borderWidth = "1px";
							document.getElementById("bp4").style.borderStyle = "solid";
							document.getElementById("bp4").style.borderWidth = "1px";
						}
					}
					else
					{
						if(bind2<=56 && block == false && plr2==true)
						{
							bstuck2=false;
							bind2 = bind2 + getval;
							if(bind2==56)
							{
								balive2=false;
								bwin2=true;
								bstuck2=true;
							}
							if(bind2>56)
							{
								bind2 = bind2 - getval;
								if((bcounter<=0)&&(bwin1==true && bwin3==true && bwin4 == true))
								{
									document.getElementById("btn").style.display = "block";
								}
								document.getElementById("bp2").style.borderStyle = "solid";
								document.getElementById("bp2").style.borderWidth = "1px";
								bstuck2=true;
								if(bstuck1==true&&bstuck2==true&&bstuck3==true&&bstuck4==true)
								{
									document.getElementById("btn").style.display = "block";
								}
							}
							else
							{
								var fragment = document.createDocumentFragment();
								fragment.appendChild(document.getElementById('bp2'));
								document.getElementById(bpath2[bind2]).appendChild(fragment);
								
								if(document.getElementById(bpath2[bind2]).innerHTML == document.getElementById('gp1').outerHTML + document.getElementById('bp2').outerHTML && bpath2[bind2]!='g5' && bpath2[bind2]!='g16' && bpath2[bind2]!='r4' && bpath2[bind2]!='r9' && bpath2[bind2]!='y10' && bpath2[bind2]!='y15' && bpath2[bind2]!='b3' && bpath2[bind2]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('gp1'));
									document.getElementById('gspace1').appendChild(killFrag);
									gind1=0;
									gcounter=gcounter+1;
									gpf1=true;
									galive1=false;
									gstuck1=true;
								}
								if(document.getElementById(bpath2[bind2]).innerHTML == document.getElementById('gp2').outerHTML + document.getElementById('bp2').outerHTML && bpath2[bind2]!='g5' && bpath2[bind2]!='g16' && bpath2[bind2]!='r4' && bpath2[bind2]!='r9' && bpath2[bind2]!='y10' && bpath2[bind2]!='y15' && bpath2[bind2]!='b3' && bpath2[bind2]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('gp2'));
									document.getElementById('gspace2').appendChild(killFrag);
									gind2=0;
									gcounter=gcounter+1;
									gpf2=true;
									galive2=false;
									gstuck2=true;
								}
								if(document.getElementById(bpath2[bind2]).innerHTML == document.getElementById('gp3').outerHTML + document.getElementById('bp2').outerHTML && bpath2[bind2]!='g5' && bpath2[bind2]!='g16' && bpath2[bind2]!='r4' && bpath2[bind2]!='r9' && bpath2[bind2]!='y10' && bpath2[bind2]!='y15' && bpath2[bind2]!='b3' && bpath2[bind2]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('gp3'));
									document.getElementById('gspace3').appendChild(killFrag);
									gind3=0;
									gcounter=gcounter+1;
									gpf3=true;
									galive3=false;
									gstuck3=true;
								}
								if(document.getElementById(bpath2[bind2]).innerHTML == document.getElementById('gp4').outerHTML + document.getElementById('bp2').outerHTML && bpath2[bind2]!='g5' && bpath2[bind2]!='g16' && bpath2[bind2]!='r4' && bpath2[bind2]!='r9' && bpath2[bind2]!='y10' && bpath2[bind2]!='y15' && bpath2[bind2]!='b3' && bpath2[bind2]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('gp4'));
									document.getElementById('gspace4').appendChild(killFrag);
									gind4=0;
									gcounter=gcounter+1;
									gpf4=true;
									galive4=false;
									gstuck4=true;
								}
								block=true;
								
								document.getElementById("btn").style.display = "block";
								document.getElementById("bp1").style.borderStyle = "solid";
								document.getElementById("bp1").style.borderWidth = "1px";
								document.getElementById("bp2").style.borderStyle = "solid";
								document.getElementById("bp2").style.borderWidth = "1px";
								document.getElementById("bp3").style.borderStyle = "solid";
								document.getElementById("bp3").style.borderWidth = "1px";
								document.getElementById("bp4").style.borderStyle = "solid";
								document.getElementById("bp4").style.borderWidth = "1px";
							}
						}
					}
				}
				
				document.getElementById("bp3").onclick=function()
				{
					if(balive3==false)
					{
						let x=document.getElementById("bspace3").innerHTML;
						let y=document.getElementById("bp3").outerHTML;
						
						if(x==y && block == false && plr2==true)
						{
							bind3=0;
							var fragment = document.createDocumentFragment();
							fragment.appendChild(document.getElementById('bp3'));
							document.getElementById(bpath3[bind3]).appendChild(fragment);
							
							bcounter=bcounter-1;
							block = true;
							balive3=true;
							bstuck3=false;
							document.getElementById("btn").style.display = "block";
							document.getElementById("bp1").style.borderStyle = "solid";
							document.getElementById("bp1").style.borderWidth = "1px";
							document.getElementById("bp2").style.borderStyle = "solid";
							document.getElementById("bp2").style.borderWidth = "1px";
							document.getElementById("bp3").style.borderStyle = "solid";
							document.getElementById("bp3").style.borderWidth = "1px";
							document.getElementById("bp4").style.borderStyle = "solid";
							document.getElementById("bp4").style.borderWidth = "1px";
						}
					}
					else
					{
						if(bind3<=56 && block == false && plr2==true)
						{
							bstuck3=false;
							bind3 = bind3 + getval;
							if(bind3==56)
							{
								balive3=false;
								bwin3=true;
								bstuck3=true;
							}
							if(bind3>56)
							{
								bind3 = bind3 - getval;
								if((bcounter<=0)&&(bwin1==true && bwin2==true && bwin4 == true))
								{
									document.getElementById("btn").style.display = "block";
								}
								document.getElementById("bp3").style.borderStyle = "solid";
								document.getElementById("bp3").style.borderWidth = "1px";
								bstuck3=true;
								if(bstuck1==true&&bstuck2==true&&bstuck3==true&&bstuck4==true)
								{
									document.getElementById("btn").style.display = "block";
								}
							}
							else
							{
								var fragment = document.createDocumentFragment();
								fragment.appendChild(document.getElementById('bp3'));
								document.getElementById(bpath3[bind3]).appendChild(fragment);
								
								if(document.getElementById(bpath3[bind3]).innerHTML == document.getElementById('gp1').outerHTML + document.getElementById('bp3').outerHTML && bpath3[bind3]!='g5' && bpath3[bind3]!='g16' && bpath3[bind3]!='r4' && bpath3[bind3]!='r9' && bpath3[bind3]!='y10' && bpath3[bind3]!='y15' && bpath3[bind3]!='b3' && bpath3[bind3]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('gp1'));
									document.getElementById('gspace1').appendChild(killFrag);
									gind1=0;
									gcounter=gcounter+1;
									gpf1=true;
									galive1=false;
									gstuck1=true;
								}
								if(document.getElementById(bpath3[bind3]).innerHTML == document.getElementById('gp2').outerHTML + document.getElementById('bp3').outerHTML && bpath3[bind3]!='g5' && bpath3[bind3]!='g16' && bpath3[bind3]!='r4' && bpath3[bind3]!='r9' && bpath3[bind3]!='y10' && bpath3[bind3]!='y15' && bpath3[bind3]!='b3' && bpath3[bind3]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('gp2'));
									document.getElementById('gspace2').appendChild(killFrag);
									gind2=0;
									gcounter=gcounter+1;
									gpf2=true;
									galive2=false;
									gstuck2=true;
								}
								if(document.getElementById(bpath3[bind3]).innerHTML == document.getElementById('gp3').outerHTML + document.getElementById('bp3').outerHTML && bpath3[bind3]!='g5' && bpath3[bind3]!='g16' && bpath3[bind3]!='r4' && bpath3[bind3]!='r9' && bpath3[bind3]!='y10' && bpath3[bind3]!='y15' && bpath3[bind3]!='b3' && bpath3[bind3]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('gp3'));
									document.getElementById('gspace3').appendChild(killFrag);
									gind3=0;
									gcounter=gcounter+1;
									gpf3=true;
									galive3=false;
									gstuck3=true;
								}
								if(document.getElementById(bpath3[bind3]).innerHTML == document.getElementById('gp4').outerHTML + document.getElementById('bp3').outerHTML && bpath3[bind3]!='g5' && bpath3[bind3]!='g16' && bpath3[bind3]!='r4' && bpath3[bind3]!='r9' && bpath3[bind3]!='y10' && bpath3[bind3]!='y15' && bpath3[bind3]!='b3' && bpath3[bind3]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('gp4'));
									document.getElementById('gspace4').appendChild(killFrag);
									gind4=0;
									gcounter=gcounter+1;
									gpf4=true;
									galive4=false;
									gstuck4=true;
								}
								block=true;
								
								document.getElementById("btn").style.display = "block";
								document.getElementById("bp1").style.borderStyle = "solid";
								document.getElementById("bp1").style.borderWidth = "1px";
								document.getElementById("bp2").style.borderStyle = "solid";
								document.getElementById("bp2").style.borderWidth = "1px";
								document.getElementById("bp3").style.borderStyle = "solid";
								document.getElementById("bp3").style.borderWidth = "1px";
								document.getElementById("bp4").style.borderStyle = "solid";
								document.getElementById("bp4").style.borderWidth = "1px";
							}
						}
					}
				}
				
				document.getElementById("bp4").onclick=function()
				{
					if(balive4==false)
					{
						let x=document.getElementById("bspace4").innerHTML;
						let y=document.getElementById("bp4").outerHTML;
						
						if(x==y && block == false && plr2==true)
						{
							bind4=0;
							var fragment = document.createDocumentFragment();
							fragment.appendChild(document.getElementById('bp4'));
							document.getElementById(bpath4[bind4]).appendChild(fragment);
							bcounter=bcounter-1;
							block = true;
							balive4=true;
							bstuck4=false;
							document.getElementById("btn").style.display = "block";
							document.getElementById("bp1").style.borderStyle = "solid";
							document.getElementById("bp1").style.borderWidth = "1px";
							document.getElementById("bp2").style.borderStyle = "solid";
							document.getElementById("bp2").style.borderWidth = "1px";
							document.getElementById("bp3").style.borderStyle = "solid";
							document.getElementById("bp3").style.borderWidth = "1px";
							document.getElementById("bp4").style.borderStyle = "solid";
							document.getElementById("bp4").style.borderWidth = "1px";
						}
					}
					else
					{
						if(bind4<=56 && block == false && plr2==true)
						{
							bstuck4=false;
							bind4 = bind4 + getval;
							if(bind4==56)
							{
								balive4=false;
								bwin4=true;
								bstuck4=true;
							}
							if(bind4>56)
							{
								bind4 = bind4 - getval;
								if((bcounter<=0)&&(bwin1==true && bwin2==true && bwin3 == true))
								{
									document.getElementById("btn").style.display = "block";
								}
								document.getElementById("bp4").style.borderStyle = "solid";
								document.getElementById("bp4").style.borderWidth = "1px";
								bstuck4=true;
								if(bstuck1==true&&bstuck2==true&&bstuck3==true&&bstuck4==true)
								{
									document.getElementById("btn").style.display = "block";
								}
							}
							else
							{
								var fragment = document.createDocumentFragment();
								fragment.appendChild(document.getElementById('bp4'));
								document.getElementById(bpath4[bind4]).appendChild(fragment);
								
								if(document.getElementById(bpath4[bind4]).innerHTML == document.getElementById('gp1').outerHTML + document.getElementById('bp4').outerHTML && bpath4[bind4]!='g5' && bpath4[bind4]!='g16' && bpath4[bind4]!='r4' && bpath4[bind4]!='r9' && bpath4[bind4]!='y10' && bpath4[bind4]!='y15' && bpath4[bind4]!='b3' && bpath4[bind4]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('gp1'));
									document.getElementById('gspace1').appendChild(killFrag);
									gind1=0;
									gcounter=gcounter+1;
									gpf1=true;
									galive1=false;
									gstuck1=true;
								}
								if(document.getElementById(bpath4[bind4]).innerHTML == document.getElementById('gp2').outerHTML + document.getElementById('bp4').outerHTML && bpath4[bind4]!='g5' && bpath4[bind4]!='g16' && bpath4[bind4]!='r4' && bpath4[bind4]!='r9' && bpath4[bind4]!='y10' && bpath4[bind4]!='y15' && bpath4[bind4]!='b3' && bpath4[bind4]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('gp2'));
									document.getElementById('gspace2').appendChild(killFrag);
									gind2=0;
									gcounter=gcounter+1;
									gpf2=true;
									galive2=false;
									gstuck2=true;
								}
								if(document.getElementById(bpath4[bind4]).innerHTML == document.getElementById('gp3').outerHTML + document.getElementById('bp4').outerHTML && bpath4[bind4]!='g5' && bpath4[bind4]!='g16' && bpath4[bind4]!='r4' && bpath4[bind4]!='r9' && bpath4[bind4]!='y10' && bpath4[bind4]!='y15' && bpath4[bind4]!='b3' && bpath4[bind4]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('gp3'));
									document.getElementById('gspace3').appendChild(killFrag);
									gind3=0;
									gcounter=gcounter+1;
									gpf3=true;
									galive3=false;
									gstuck3=true;
								}
								if(document.getElementById(bpath4[bind4]).innerHTML == document.getElementById('gp4').outerHTML + document.getElementById('bp4').outerHTML && bpath4[bind4]!='g5' && bpath4[bind4]!='g16' && bpath4[bind4]!='r4' && bpath4[bind4]!='r9' && bpath4[bind4]!='y10' && bpath4[bind4]!='y15' && bpath4[bind4]!='b3' && bpath4[bind4]!='b14')
								{
									var killFrag = document.createDocumentFragment();
									killFrag.appendChild(document.getElementById('gp4'));
									document.getElementById('gspace4').appendChild(killFrag);
									gind4=0;
									gcounter=gcounter+1;
									gpf4=true;
									galive4=false;
									gstuck4=true;
								}
								block=true;
								
								document.getElementById("btn").style.display = "block";
								document.getElementById("bp1").style.borderStyle = "solid";
								document.getElementById("bp1").style.borderWidth = "1px";
								document.getElementById("bp2").style.borderStyle = "solid";
								document.getElementById("bp2").style.borderWidth = "1px";
								document.getElementById("bp3").style.borderStyle = "solid";
								document.getElementById("bp3").style.borderWidth = "1px";
								document.getElementById("bp4").style.borderStyle = "solid";
								document.getElementById("bp4").style.borderWidth = "1px";
							}
						}
					}
				}
			}
			plr2=true;
			plr1=false;
		}
		if(balive1==false && balive2 == false && balive3 == false && balive4 == false && document.getElementById("num").innerText != 6)
		{
			document.getElementById("btn").style.display = "block";
		}
	}
	if(gwin1==true && gwin2==true && gwin3==true && gwin4==true)
	{
		alert("Congratulation "+person1+"!\nYou the winner!\nWinner winner chicken dinner");
		location.reload();
	}
	if(bwin1==true && bwin2==true && bwin3==true && bwin4==true)
	{
		alert("Congratulation "+person2+"!\nYou the winner!\nWinner winner chicken dinner");
		location.reload();
	}
}

function gOneToFive()
{
	getval = parseInt(document.getElementById("num").innerText);
	glock=false;
	if(galive1==true)
	{
		gstuck1=false;
		document.getElementById("gp1").style.borderColor = "black";
		document.getElementById("gp1").style.borderStyle = "double";
		document.getElementById("gp1").style.borderWidth = "3px";
		
		document.getElementById("gp1").onclick=function()
		{
			if(gind1<=56 && glock == false)
			{
				gind1 = gind1+getval;
				if(gind1==56)
				{
					galive1=false;
					gwin1=true;
					gstuck1=true;
				}
				if(gind1>56)
				{
					gind1 = gind1 - getval;
					if((galive2==false && galive3==false && galive4 == false) || (gwin2==true && gwin3==true && gwin4 == true))
					{
						document.getElementById("btn").style.display = "block";
					}
					document.getElementById("gp1").style.borderStyle = "solid";
					document.getElementById("gp1").style.borderWidth = "1px";
					gstuck1=true;
					if(gstuck1==true&&gstuck2==true&&gstuck3==true&&gstuck4==true)
					{
						document.getElementById("btn").style.display = "block";
					}
				}
				else
				{
					if(document.getElementById("gspace1").innerHTML!=document.getElementById('gp1').outerHTML)
					{
						var fragment = document.createDocumentFragment();
						fragment.appendChild(document.getElementById('gp1'));
						document.getElementById(gpath1[gind1]).appendChild(fragment);
						
						if(document.getElementById(gpath1[gind1]).innerHTML == document.getElementById('bp1').outerHTML + document.getElementById('gp1').outerHTML && gpath1[gind1]!='g5' && gpath1[gind1]!='g16' && gpath1[gind1]!='r4' && gpath1[gind1]!='r9' && gpath1[gind1]!='y10' && gpath1[gind1]!='y15' && gpath1[gind1]!='b3' && gpath1[gind1]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('bp1'));
							document.getElementById('bspace1').appendChild(killFrag);
							bind1=0;
							bcounter=bcounter+1;
							bpf1=true;
							balive1=false;
							bstuck1=true;
						}
						if(document.getElementById(gpath1[gind1]).innerHTML == document.getElementById('bp2').outerHTML + document.getElementById('gp1').outerHTML && gpath1[gind1]!='g5' && gpath1[gind1]!='g16' && gpath1[gind1]!='r4' && gpath1[gind1]!='r9' && gpath1[gind1]!='y10' && gpath1[gind1]!='y15' && gpath1[gind1]!='b3' && gpath1[gind1]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('bp2'));
							document.getElementById('bspace2').appendChild(killFrag);
							bind2=0;
							bcounter=bcounter+1;
							bpf2=true;
							balive2=false;
							bstuck2=true;
						}
						if(document.getElementById(gpath1[gind1]).innerHTML == document.getElementById('bp3').outerHTML + document.getElementById('gp1').outerHTML && gpath1[gind1]!='g5' && gpath1[gind1]!='g16' && gpath1[gind1]!='r4' && gpath1[gind1]!='r9' && gpath1[gind1]!='y10' && gpath1[gind1]!='y15' && gpath1[gind1]!='b3' && gpath1[gind1]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('bp3'));
							document.getElementById('bspace3').appendChild(killFrag);
							bind3=0;
							bcounter=bcounter+1;
							bpf3=true;
							balive3=false;
							bstuck3=true;
						}
						if(document.getElementById(gpath1[gind1]).innerHTML == document.getElementById('bp4').outerHTML + document.getElementById('gp1').outerHTML && gpath1[gind1]!='g5' && gpath1[gind1]!='g16' && gpath1[gind1]!='r4' && gpath1[gind1]!='r9' && gpath1[gind1]!='y10' && gpath1[gind1]!='y15' && gpath1[gind1]!='b3' && gpath1[gind1]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('bp4'));
							document.getElementById('bspace4').appendChild(killFrag);
							bind4=0;
							bcounter=bcounter+1;
							bpf4=true;
							balive4=false;
							bstuck4=true;
						}
						glock=true;
						
						document.getElementById("btn").style.display = "block";
						document.getElementById("gp1").style.borderStyle = "solid";
						document.getElementById("gp1").style.borderWidth = "1px";
						document.getElementById("gp2").style.borderStyle = "solid";
						document.getElementById("gp2").style.borderWidth = "1px";
						document.getElementById("gp3").style.borderStyle = "solid";
						document.getElementById("gp3").style.borderWidth = "1px";
						document.getElementById("gp4").style.borderStyle = "solid";
						document.getElementById("gp4").style.borderWidth = "1px";
					}
				}
			}
		}
	}
	if(galive2==true)
	{
		gstuck2=false;
		document.getElementById("gp2").style.borderColor = "black";
		document.getElementById("gp2").style.borderStyle = "double";
		document.getElementById("gp2").style.borderWidth = "3px";
		
		document.getElementById("gp2").onclick=function()
		{
			if(gind2<=56 && glock == false)
			{
				gind2=gind2 + getval;
				if(gind2==56)
				{
					galive2=false;
					gwin2=true;
					gstuck2=true;
				}
				if(gind2>56)
				{
					
					gind2=gind2 - getval;
					if((galive1==false && galive3==false && galive4 == false) || (gwin1==true && gwin3==true && gwin4 == true))
					{
						document.getElementById("btn").style.display = "block";
					}
					document.getElementById("gp2").style.borderStyle = "solid";
					document.getElementById("gp2").style.borderWidth = "1px";
					gstuck2=true;
					if(gstuck1==true&&gstuck2==true&&gstuck3==true&&gstuck4==true)
					{
						document.getElementById("btn").style.display = "block";
					}
				}
				else
				{
					if(document.getElementById("gspace2").innerHTML!=document.getElementById('gp2').outerHTML)
					{
						var fragment = document.createDocumentFragment();
						fragment.appendChild(document.getElementById('gp2'));
						document.getElementById(gpath2[gind2]).appendChild(fragment);
						
						if(document.getElementById(gpath2[gind2]).innerHTML == document.getElementById('bp1').outerHTML + document.getElementById('gp2').outerHTML && gpath2[gind2]!='g5' && gpath2[gind2]!='g16' && gpath2[gind2]!='r4' && gpath2[gind2]!='r9' && gpath2[gind2]!='y10' && gpath2[gind2]!='y15' && gpath2[gind2]!='b3' && gpath2[gind2]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('bp1'));
							document.getElementById('bspace1').appendChild(killFrag);
							bind1=0;
							bcounter=bcounter+1;
							bpf1=true;
							balive1=false;
							bstuck1=true;
						}
						if(document.getElementById(gpath2[gind2]).innerHTML == document.getElementById('bp2').outerHTML + document.getElementById('gp2').outerHTML && gpath2[gind2]!='g5' && gpath2[gind2]!='g16' && gpath2[gind2]!='r4' && gpath2[gind2]!='r9' && gpath2[gind2]!='y10' && gpath2[gind2]!='y15' && gpath2[gind2]!='b3' && gpath2[gind2]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('bp2'));
							document.getElementById('bspace2').appendChild(killFrag);
							bind2=0;
							bcounter=bcounter+1;
							bpf2=true;
							balive2=false;
							bstuck2=true;
						}
						if(document.getElementById(gpath2[gind2]).innerHTML == document.getElementById('bp3').outerHTML + document.getElementById('gp2').outerHTML && gpath2[gind2]!='g5' && gpath2[gind2]!='g16' && gpath2[gind2]!='r4' && gpath2[gind2]!='r9' && gpath2[gind2]!='y10' && gpath2[gind2]!='y15' && gpath2[gind2]!='b3' && gpath2[gind2]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('bp3'));
							document.getElementById('bspace3').appendChild(killFrag);
							bind3=0;
							bcounter=bcounter+1;
							bpf3=true;
							balive3=false;
							bstuck3=true;
						}
						if(document.getElementById(gpath2[gind2]).innerHTML == document.getElementById('bp4').outerHTML + document.getElementById('gp2').outerHTML && gpath2[gind2]!='g5' && gpath2[gind2]!='g16' && gpath2[gind2]!='r4' && gpath2[gind2]!='r9' && gpath2[gind2]!='y10' && gpath2[gind2]!='y15' && gpath2[gind2]!='b3' && gpath2[gind2]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('bp4'));
							document.getElementById('bspace4').appendChild(killFrag);
							bind4=0;
							bcounter=bcounter+1;
							bpf4=true;
							balive4=false;
							bstuck4=true;
						}
						
						glock=true;

						document.getElementById("btn").style.display = "block";
						document.getElementById("gp1").style.borderStyle = "solid";
						document.getElementById("gp1").style.borderWidth = "1px";
						document.getElementById("gp2").style.borderStyle = "solid";
						document.getElementById("gp2").style.borderWidth = "1px";
						document.getElementById("gp3").style.borderStyle = "solid";
						document.getElementById("gp3").style.borderWidth = "1px";
						document.getElementById("gp4").style.borderStyle = "solid";
						document.getElementById("gp4").style.borderWidth = "1px";
					}
				}
			}
		}
	}
	if(galive3==true)
	{
		gstuck3=false;
		document.getElementById("gp3").style.borderColor = "black";
		document.getElementById("gp3").style.borderStyle = "double";
		document.getElementById("gp3").style.borderWidth = "3px";
		
		document.getElementById("gp3").onclick=function()
		{
			if(gind3<=56 && glock == false)
			{
				gind3=gind3+getval;
				if(gind3==56)
				{
					galive3=false;
					gwin3=true;
					gstuck3=true;
				}
				if(gind3>56)
				{
					gind3=gind3-getval;
					if((galive1==false && galive2==false && galive4 == false) || (gwin1==true && gwin2==true && gwin4 == true))
					{
						document.getElementById("btn").style.display = "block";
					}
					document.getElementById("gp3").style.borderStyle = "solid";
					document.getElementById("gp3").style.borderWidth = "1px";
					gstuck3=true;
					if(gstuck1==true&&gstuck2==true&&gstuck3==true&&gstuck4==true)
					{
						document.getElementById("btn").style.display = "block";
					}
				}
				else
				{
					if(document.getElementById("gspace3").innerHTML!=document.getElementById('gp3').outerHTML)
					{
						var fragment = document.createDocumentFragment();
						fragment.appendChild(document.getElementById('gp3'));
						document.getElementById(gpath3[gind3]).appendChild(fragment);
						
						if(document.getElementById(gpath3[gind3]).innerHTML == document.getElementById('bp1').outerHTML + document.getElementById('gp3').outerHTML && gpath3[gind3]!='g5' && gpath3[gind3]!='g16' && gpath3[gind3]!='r4' && gpath3[gind3]!='r9' && gpath3[gind3]!='y10' && gpath3[gind3]!='y15' && gpath3[gind3]!='b3' && gpath3[gind3]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('bp1'));
							document.getElementById('bspace1').appendChild(killFrag);
							bind1=0;
							bcounter=bcounter+1;
							bpf1=true;
							balive1=false;
							bstuck1=true;
						}
						if(document.getElementById(gpath3[gind3]).innerHTML == document.getElementById('bp2').outerHTML + document.getElementById('gp3').outerHTML && gpath3[gind3]!='g5' && gpath3[gind3]!='g16' && gpath3[gind3]!='r4' && gpath3[gind3]!='r9' && gpath3[gind3]!='y10' && gpath3[gind3]!='y15' && gpath3[gind3]!='b3' && gpath3[gind3]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('bp2'));
							document.getElementById('bspace2').appendChild(killFrag);
							bind2=0;
							bcounter=bcounter+1;
							bpf2=true;
							balive2=false;
							bstuck2=true;
						}
						if(document.getElementById(gpath3[gind3]).innerHTML == document.getElementById('bp3').outerHTML + document.getElementById('gp3').outerHTML && gpath3[gind3]!='g5' && gpath3[gind3]!='g16' && gpath3[gind3]!='r4' && gpath3[gind3]!='r9' && gpath3[gind3]!='y10' && gpath3[gind3]!='y15' && gpath3[gind3]!='b3' && gpath3[gind3]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('bp3'));
							document.getElementById('bspace3').appendChild(killFrag);
							bind3=0;
							bcounter=bcounter+1;
							bpf3=true;
							balive3=false;
							bstuck3=true;
						}
						if(document.getElementById(gpath3[gind3]).innerHTML == document.getElementById('bp4').outerHTML + document.getElementById('gp3').outerHTML && gpath3[gind3]!='g5' && gpath3[gind3]!='g16' && gpath3[gind3]!='r4' && gpath3[gind3]!='r9' && gpath3[gind3]!='y10' && gpath3[gind3]!='y15' && gpath3[gind3]!='b3' && gpath3[gind3]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('bp4'));
							document.getElementById('bspace4').appendChild(killFrag);
							bind4=0;
							bcounter=bcounter+1;
							bpf4=true;
							balive4=false;
							bstuck4=true;
						}
						
						glock=true;
						
						document.getElementById("btn").style.display = "block";
						document.getElementById("gp1").style.borderStyle = "solid";
						document.getElementById("gp1").style.borderWidth = "1px";
						document.getElementById("gp2").style.borderStyle = "solid";
						document.getElementById("gp2").style.borderWidth = "1px";
						document.getElementById("gp3").style.borderStyle = "solid";
						document.getElementById("gp3").style.borderWidth = "1px";
						document.getElementById("gp4").style.borderStyle = "solid";
						document.getElementById("gp4").style.borderWidth = "1px";
					}
				}
			}
		}
	}
	if(galive4==true)
	{
		gstuck4=false;
		document.getElementById("gp4").style.borderColor = "black";
		document.getElementById("gp4").style.borderStyle = "double";
		document.getElementById("gp4").style.borderWidth = "3px";
		
		document.getElementById("gp4").onclick=function()
		{
			if(gind4<=56 && glock == false)
			{
				gind4 = gind4 + getval;
				if(gind4==56)
				{
					galive4=false;
					gwin4=true;
					gstuck4=true;
				}
				if(gind4>56)
				{
					gind4 = gind4 - getval;
					if((galive1==false && galive2==false && galive3 == false) || (gwin1==true && gwin2==true && gwin3 == true))
					{
						document.getElementById("btn").style.display = "block";
					}
					document.getElementById("gp4").style.borderStyle = "solid";
					document.getElementById("gp4").style.borderWidth = "1px";
					gstuck4=true;
					if(gstuck1==true&&gstuck2==true&&gstuck3==true&&gstuck4==true)
					{
						document.getElementById("btn").style.display = "block";
					}
				}
				else
				{
					if(document.getElementById("gspace4").innerHTML!=document.getElementById('gp4').outerHTML)
					{
						var fragment = document.createDocumentFragment();
						fragment.appendChild(document.getElementById('gp4'));
						document.getElementById(gpath4[gind4]).appendChild(fragment);
						
						if(document.getElementById(gpath4[gind4]).innerHTML == document.getElementById('bp1').outerHTML + document.getElementById('gp4').outerHTML && gpath4[gind4]!='g5' && gpath4[gind4]!='g16' && gpath4[gind4]!='r4' && gpath4[gind4]!='r9' && gpath4[gind4]!='y10' && gpath4[gind4]!='y15' && gpath4[gind4]!='b3' && gpath4[gind4]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('bp1'));
							document.getElementById('bspace1').appendChild(killFrag);
							bind1=0;
							bcounter=bcounter+1;
							bpf1=true;
							balive1=false;
							bstuck1=true;
						}
						if(document.getElementById(gpath4[gind4]).innerHTML == document.getElementById('bp2').outerHTML + document.getElementById('gp4').outerHTML && gpath4[gind4]!='g5' && gpath4[gind4]!='g16' && gpath4[gind4]!='r4' && gpath4[gind4]!='r9' && gpath4[gind4]!='y10' && gpath4[gind4]!='y15' && gpath4[gind4]!='b3' && gpath4[gind4]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('bp2'));
							document.getElementById('bspace2').appendChild(killFrag);
							bind2=0;
							bcounter=bcounter+1;
							bpf2=true;
							balive2=false;
							bstuck2=true;
						}
						if(document.getElementById(gpath4[gind4]).innerHTML == document.getElementById('bp3').outerHTML + document.getElementById('gp4').outerHTML && gpath4[gind4]!='g5' && gpath4[gind4]!='g16' && gpath4[gind4]!='r4' && gpath4[gind4]!='r9' && gpath4[gind4]!='y10' && gpath4[gind4]!='y15' && gpath4[gind4]!='b3' && gpath4[gind4]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('bp3'));
							document.getElementById('bspace3').appendChild(killFrag);
							bind3=0;
							bcounter=bcounter+1;
							bpf3=true;
							balive3=false;
							bstuck3=true;
						}
						if(document.getElementById(gpath4[gind4]).innerHTML == document.getElementById('bp4').outerHTML + document.getElementById('gp4').outerHTML && gpath4[gind4]!='g5' && gpath4[gind4]!='g16' && gpath4[gind4]!='r4' && gpath4[gind4]!='r9' && gpath4[gind4]!='y10' && gpath4[gind4]!='y15' && gpath4[gind4]!='b3' && gpath4[gind4]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('bp4'));
							document.getElementById('bspace4').appendChild(killFrag);
							bind4=0;
							bcounter=bcounter+1;
							bpf4=true;
							balive4=false;
							bstuck4=true;
						}
						
						glock=true;
						
						document.getElementById("btn").style.display = "block";
						document.getElementById("gp1").style.borderStyle = "solid";
						document.getElementById("gp1").style.borderWidth = "1px";
						document.getElementById("gp2").style.borderStyle = "solid";
						document.getElementById("gp2").style.borderWidth = "1px";
						document.getElementById("gp3").style.borderStyle = "solid";
						document.getElementById("gp3").style.borderWidth = "1px";
						document.getElementById("gp4").style.borderStyle = "solid";
						document.getElementById("gp4").style.borderWidth = "1px";
					}
				}
			}
		}
	}
	plr1=false;
	plr2=true;
}

function bOneToFive()
{
	getval = parseInt(document.getElementById("num").innerText);
	block=false;
	if(balive1==true)
	{
		bstuck1=false;
		document.getElementById("bp1").style.borderColor = "black";
		document.getElementById("bp1").style.borderStyle = "double";
		document.getElementById("bp1").style.borderWidth = "3px";
		
		document.getElementById("bp1").onclick=function()
		{
			if(bind1<=56 && block == false)
			{
				bind1 = bind1+getval;
				if(bind1==56)
				{
					balive1=false;
					bwin1=true;
					bstuck1=true;
				}
				if(bind1>56)
				{
					bind1 = bind1-getval;
					if((balive2==false && balive3==false && balive4 == false) || (bwin2==true && bwin3==true && bwin4 == true))
					{
						document.getElementById("btn").style.display = "block";
					}
					
					document.getElementById("bp1").style.borderStyle = "solid";
					document.getElementById("bp1").style.borderWidth = "1px";
					bstuck1=true;
					if(bstuck1==true&&bstuck2==true&&bstuck3==true&&bstuck4==true)
					{
						document.getElementById("btn").style.display = "block";
					}
				}
				else
				{
					if(document.getElementById("bspace1").innerHTML!=document.getElementById('bp1').outerHTML)
					{
						var fragment = document.createDocumentFragment();
						fragment.appendChild(document.getElementById('bp1'));
						document.getElementById(bpath1[bind1]).appendChild(fragment);
						
						if(document.getElementById(bpath1[bind1]).innerHTML == document.getElementById('gp1').outerHTML + document.getElementById('bp1').outerHTML && bpath1[bind1]!='g5' && bpath1[bind1]!='g16' && bpath1[bind1]!='r4' && bpath1[bind1]!='r9' && bpath1[bind1]!='y10' && bpath1[bind1]!='y15' && bpath1[bind1]!='b3' && bpath1[bind1]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('gp1'));
							document.getElementById('gspace1').appendChild(killFrag);
							gind1=0;
							gcounter=gcounter+1;
							gpf1=true;
							galive1=false;
							gstuck1=true;
						}
						if(document.getElementById(bpath1[bind1]).innerHTML == document.getElementById('gp2').outerHTML + document.getElementById('bp1').outerHTML && bpath1[bind1]!='g5' && bpath1[bind1]!='g16' && bpath1[bind1]!='r4' && bpath1[bind1]!='r9' && bpath1[bind1]!='y10' && bpath1[bind1]!='y15' && bpath1[bind1]!='b3' && bpath1[bind1]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('gp2'));
							document.getElementById('gspace2').appendChild(killFrag);
							gind2=0;
							gcounter=gcounter+1;
							gpf2=true;
							galive2=false;
							gstuck2=true;
						}
						if(document.getElementById(bpath1[bind1]).innerHTML == document.getElementById('gp3').outerHTML + document.getElementById('bp1').outerHTML && bpath1[bind1]!='g5' && bpath1[bind1]!='g16' && bpath1[bind1]!='r4' && bpath1[bind1]!='r9' && bpath1[bind1]!='y10' && bpath1[bind1]!='y15' && bpath1[bind1]!='b3' && bpath1[bind1]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('gp3'));
							document.getElementById('gspace3').appendChild(killFrag);
							gind3=0;
							gcounter=gcounter+1;
							gpf3=true;
							galive3=false;
							gstuck3=true;
						}
						if(document.getElementById(bpath1[bind1]).innerHTML == document.getElementById('gp4').outerHTML + document.getElementById('bp1').outerHTML && bpath1[bind1]!='g5' && bpath1[bind1]!='g16' && bpath1[bind1]!='r4' && bpath1[bind1]!='r9' && bpath1[bind1]!='y10' && bpath1[bind1]!='y15' && bpath1[bind1]!='b3' && bpath1[bind1]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('gp4'));
							document.getElementById('gspace4').appendChild(killFrag);
							gind4=0;
							gcounter=gcounter+1;
							gpf4=true;
							galive4=false;
							gstuck4=true;
						}
						block=true;

						document.getElementById("btn").style.display = "block";
						document.getElementById("bp1").style.borderStyle = "solid";
						document.getElementById("bp1").style.borderWidth = "1px";
						document.getElementById("bp2").style.borderStyle = "solid";
						document.getElementById("bp2").style.borderWidth = "1px";
						document.getElementById("bp3").style.borderStyle = "solid";
						document.getElementById("bp3").style.borderWidth = "1px";
						document.getElementById("bp4").style.borderStyle = "solid";
						document.getElementById("bp4").style.borderWidth = "1px";
					}
				}
			}
		}
	}
	if(balive2==true)
	{
		bstuck2=false;
		document.getElementById("bp2").style.borderColor = "black";
		document.getElementById("bp2").style.borderStyle = "double";
		document.getElementById("bp2").style.borderWidth = "3px";
		
		document.getElementById("bp2").onclick=function()
		{
			if(bind2<=56 && block == false)
			{
				bind2 = bind2 + getval;
				if(bind2==56)
				{
					balive2=false;
					bwin2=true;
					bstuck2=true;
				}
				if(bind2>56)
				{
					bind2 = bind2 - getval;
					if((balive1==false && balive3==false && balive4 == false) || (bwin1==true && bwin3==true && bwin4 == true))
					{
						document.getElementById("btn").style.display = "block";
					}
					document.getElementById("bp2").style.borderStyle = "solid";
					document.getElementById("bp2").style.borderWidth = "1px";
					bstuck2=true;
					if(bstuck1==true&&bstuck2==true&&bstuck3==true&&bstuck4==true)
					{
						document.getElementById("btn").style.display = "block";
					}
				}
				else
				{
					if(document.getElementById("bspace2").innerHTML!=document.getElementById('bp2').outerHTML)
					{
						var fragment = document.createDocumentFragment();
						fragment.appendChild(document.getElementById('bp2'));
						document.getElementById(bpath2[bind2]).appendChild(fragment);
						
						if(document.getElementById(bpath2[bind2]).innerHTML == document.getElementById('gp1').outerHTML + document.getElementById('bp2').outerHTML && bpath2[bind2]!='g5' && bpath2[bind2]!='g16' && bpath2[bind2]!='r4' && bpath2[bind2]!='r9' && bpath2[bind2]!='y10' && bpath2[bind2]!='y15' && bpath2[bind2]!='b3' && bpath2[bind2]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('gp1'));
							document.getElementById('gspace1').appendChild(killFrag);
							gind1=0;
							gcounter=gcounter+1;
							gpf1=true;
							galive1=false;
							gstuck1=true;
						}
						if(document.getElementById(bpath2[bind2]).innerHTML == document.getElementById('gp2').outerHTML + document.getElementById('bp2').outerHTML && bpath2[bind2]!='g5' && bpath2[bind2]!='g16' && bpath2[bind2]!='r4' && bpath2[bind2]!='r9' && bpath2[bind2]!='y10' && bpath2[bind2]!='y15' && bpath2[bind2]!='b3' && bpath2[bind2]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('gp2'));
							document.getElementById('gspace2').appendChild(killFrag);
							gind2=0;
							gcounter=gcounter+1;
							gpf2=true;
							galive2=false;
							gstuck2=true;
						}
						if(document.getElementById(bpath2[bind2]).innerHTML == document.getElementById('gp3').outerHTML + document.getElementById('bp2').outerHTML && bpath2[bind2]!='g5' && bpath2[bind2]!='g16' && bpath2[bind2]!='r4' && bpath2[bind2]!='r9' && bpath2[bind2]!='y10' && bpath2[bind2]!='y15' && bpath2[bind2]!='b3' && bpath2[bind2]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('gp3'));
							document.getElementById('gspace3').appendChild(killFrag);
							gind3=0;
							gcounter=gcounter+1;
							gpf3=true;
							galive3=false;
							gstuck3=true;
						}
						if(document.getElementById(bpath2[bind2]).innerHTML == document.getElementById('gp4').outerHTML + document.getElementById('bp2').outerHTML && bpath2[bind2]!='g5' && bpath2[bind2]!='g16' && bpath2[bind2]!='r4' && bpath2[bind2]!='r9' && bpath2[bind2]!='y10' && bpath2[bind2]!='y15' && bpath2[bind2]!='b3' && bpath2[bind2]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('gp4'));
							document.getElementById('gspace4').appendChild(killFrag);
							gind4=0;
							gcounter=gcounter+1;
							gpf4=true;
							galive4=false;
							gstuck4=true;
						}
						block=true;

						document.getElementById("btn").style.display = "block";
						document.getElementById("bp1").style.borderStyle = "solid";
						document.getElementById("bp1").style.borderWidth = "1px";
						document.getElementById("bp2").style.borderStyle = "solid";
						document.getElementById("bp2").style.borderWidth = "1px";
						document.getElementById("bp3").style.borderStyle = "solid";
						document.getElementById("bp3").style.borderWidth = "1px";
						document.getElementById("bp4").style.borderStyle = "solid";
						document.getElementById("bp4").style.borderWidth = "1px";
					}
				}
			}
		}
	}
	if(balive3==true)
	{
		bstuck3=false;
		document.getElementById("bp3").style.borderColor = "black";
		document.getElementById("bp3").style.borderStyle = "double";
		document.getElementById("bp3").style.borderWidth = "3px";
		
		document.getElementById("bp3").onclick=function()
		{
			if(bind3<=56 && block == false)
			{
				bind3=bind3+getval;
				if(bind3==56)
				{
					balive3=false;
					bwin3=true;
					bstuck3=true;
				}
				if(bind3>56)
				{
					bind3 = bind3-getval;
					if((balive1==false && balive2==false && balive4 == false) || (bwin1==true && bwin2==true && bwin4 == true))
					{
						document.getElementById("btn").style.display = "block";
					}
					document.getElementById("bp3").style.borderStyle = "solid";
					document.getElementById("bp3").style.borderWidth = "1px";
					bstuck3=true;
					if(bstuck1==true&&bstuck2==true&&bstuck3==true&&bstuck4==true)
					{
						document.getElementById("btn").style.display = "block";
					}
				}
				else
				{
					if(document.getElementById("bspace3").innerHTML!=document.getElementById('bp3').outerHTML)
					{
						var fragment = document.createDocumentFragment();
						fragment.appendChild(document.getElementById('bp3'));
						document.getElementById(bpath3[bind3]).appendChild(fragment);
						
						if(document.getElementById(bpath3[bind3]).innerHTML == document.getElementById('gp1').outerHTML + document.getElementById('bp3').outerHTML && bpath3[bind3]!='g5' && bpath3[bind3]!='g16' && bpath3[bind3]!='r4' && bpath3[bind3]!='r9' && bpath3[bind3]!='y10' && bpath3[bind3]!='y15' && bpath3[bind3]!='b3' && bpath3[bind3]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('gp1'));
							document.getElementById('gspace1').appendChild(killFrag);
							gind1=0;
							gcounter=gcounter+1;
							gpf1=true;
							galive1=false;
							gstuck1=true;
						}
						if(document.getElementById(bpath3[bind3]).innerHTML == document.getElementById('gp2').outerHTML + document.getElementById('bp3').outerHTML && bpath3[bind3]!='g5' && bpath3[bind3]!='g16' && bpath3[bind3]!='r4' && bpath3[bind3]!='r9' && bpath3[bind3]!='y10' && bpath3[bind3]!='y15' && bpath3[bind3]!='b3' && bpath3[bind3]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('gp2'));
							document.getElementById('gspace2').appendChild(killFrag);
							gind2=0;
							gcounter=gcounter+1;
							gpf2=true;
							galive2=false;
							gstuck2=true;
						}
						if(document.getElementById(bpath3[bind3]).innerHTML == document.getElementById('gp3').outerHTML + document.getElementById('bp3').outerHTML && bpath3[bind3]!='g5' && bpath3[bind3]!='g16' && bpath3[bind3]!='r4' && bpath3[bind3]!='r9' && bpath3[bind3]!='y10' && bpath3[bind3]!='y15' && bpath3[bind3]!='b3' && bpath3[bind3]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('gp3'));
							document.getElementById('gspace3').appendChild(killFrag);
							gind3=0;
							gcounter=gcounter+1;
							gpf3=true;
							galive3=false;
							gstuck3=true;
						}
						if(document.getElementById(bpath3[bind3]).innerHTML == document.getElementById('gp4').outerHTML + document.getElementById('bp3').outerHTML && bpath3[bind3]!='g5' && bpath3[bind3]!='g16' && bpath3[bind3]!='r4' && bpath3[bind3]!='r9' && bpath3[bind3]!='y10' && bpath3[bind3]!='y15' && bpath3[bind3]!='b3' && bpath3[bind3]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('gp4'));
							document.getElementById('gspace4').appendChild(killFrag);
							gind4=0;
							gcounter=gcounter+1;
							gpf4=true;
							galive4=false;
							gstuck4=true;
						}
						block=true;

						document.getElementById("btn").style.display = "block";
						document.getElementById("bp1").style.borderStyle = "solid";
						document.getElementById("bp1").style.borderWidth = "1px";
						document.getElementById("bp2").style.borderStyle = "solid";
						document.getElementById("bp2").style.borderWidth = "1px";
						document.getElementById("bp3").style.borderStyle = "solid";
						document.getElementById("bp3").style.borderWidth = "1px";
						document.getElementById("bp4").style.borderStyle = "solid";
						document.getElementById("bp4").style.borderWidth = "1px";
					}
				}
			}
		}
	}
	if(balive4==true)
	{
		bstuck4=false;
		document.getElementById("bp4").style.borderColor = "black";
		document.getElementById("bp4").style.borderStyle = "double";
		document.getElementById("bp4").style.borderWidth = "3px";
		
		document.getElementById("bp4").onclick=function()
		{
			if(bind4<=56 && block == false)
			{
				bind4 = bind4 + getval;
				if(bind4==56)
				{
					balive4=false;
					bwin4=true;
					bstuck4=true;
				}
				if(bind4>56)
				{
					bind4 = bind4 - getval;
					if((balive1==false && balive2==false && balive3 == false) || (bwin1==true && bwin2==true && bwin3 == true))
					{
						document.getElementById("btn").style.display = "block";
					}
					document.getElementById("bp4").style.borderStyle = "solid";
					document.getElementById("bp4").style.borderWidth = "1px";
					bstuck4=true;
					if(bstuck1==true && bstuck2==true && bstuck3==true && bstuck4==true)
					{
						document.getElementById("btn").style.display = "block";
					}
				}
				else
				{
					if(document.getElementById("bspace4").innerHTML!=document.getElementById('bp4').outerHTML)
					{
						var fragment = document.createDocumentFragment();
						fragment.appendChild(document.getElementById('bp4'));
						document.getElementById(bpath4[bind4]).appendChild(fragment);
						
						if(document.getElementById(bpath4[bind4]).innerHTML == document.getElementById('gp1').outerHTML + document.getElementById('bp4').outerHTML && bpath4[bind4]!='g5' && bpath4[bind4]!='g16' && bpath4[bind4]!='r4' && bpath4[bind4]!='r9' && bpath4[bind4]!='y10' && bpath4[bind4]!='y15' && bpath4[bind4]!='b3' && bpath4[bind4]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('gp1'));
							document.getElementById('gspace1').appendChild(killFrag);
							gind1=0;
							gcounter=gcounter+1;
							gpf1=true;
							galive1=false;
							gstuck1=true;
						}
						if(document.getElementById(bpath4[bind4]).innerHTML == document.getElementById('gp2').outerHTML + document.getElementById('bp4').outerHTML && bpath4[bind4]!='g5' && bpath4[bind4]!='g16' && bpath4[bind4]!='r4' && bpath4[bind4]!='r9' && bpath4[bind4]!='y10' && bpath4[bind4]!='y15' && bpath4[bind4]!='b3' && bpath4[bind4]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('gp2'));
							document.getElementById('gspace2').appendChild(killFrag);
							gind2=0;
							gcounter=gcounter+1;
							gpf2=true;
							galive2=false;
							gstuck2=true;
						}
						if(document.getElementById(bpath4[bind4]).innerHTML == document.getElementById('gp3').outerHTML + document.getElementById('bp4').outerHTML && bpath4[bind4]!='g5' && bpath4[bind4]!='g16' && bpath4[bind4]!='r4' && bpath4[bind4]!='r9' && bpath4[bind4]!='y10' && bpath4[bind4]!='y15' && bpath4[bind4]!='b3' && bpath4[bind4]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('gp3'));
							document.getElementById('gspace3').appendChild(killFrag);
							gind3=0;
							gcounter=gcounter+1;
							gpf3=true;
							galive3=false;
							gstuck3=true;
						}
						if(document.getElementById(bpath4[bind4]).innerHTML == document.getElementById('gp4').outerHTML + document.getElementById('bp4').outerHTML && bpath4[bind4]!='g5' && bpath4[bind4]!='g16' && bpath4[bind4]!='r4' && bpath4[bind4]!='r9' && bpath4[bind4]!='y10' && bpath4[bind4]!='y15' && bpath4[bind4]!='b3' && bpath4[bind4]!='b14')
						{
							var killFrag = document.createDocumentFragment();
							killFrag.appendChild(document.getElementById('gp4'));
							document.getElementById('gspace4').appendChild(killFrag);
							gind4=0;
							gcounter=gcounter+1;
							gpf4=true;
							galive4=false;
							gstuck4=true;
						}
						block=true;
						
						document.getElementById("btn").style.display = "block";
						document.getElementById("bp1").style.borderStyle = "solid";
						document.getElementById("bp1").style.borderWidth = "1px";
						document.getElementById("bp2").style.borderStyle = "solid";
						document.getElementById("bp2").style.borderWidth = "1px";
						document.getElementById("bp3").style.borderStyle = "solid";
						document.getElementById("bp3").style.borderWidth = "1px";
						document.getElementById("bp4").style.borderStyle = "solid";
						document.getElementById("bp4").style.borderWidth = "1px";
					}
				}
			}
		}
	}
	plr2=false;
	plr1=true;
}


function getRndInteger(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}