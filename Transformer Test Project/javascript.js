var p,v1,v2;
        function upload(){
            document.getElementById("div1").style.width="100%";
            document.getElementById("div1").style.height="500%";
            document.body.style.backgroundColor="white";

           var a1 = document.getElementById("test_no").value; 
           var b1 = document.getElementById("url").value; 
           var c1 = document.getElementById("cus_name").value; 
           var d1 = document.getElementById("address").value; 
           var e1 = document.getElementById("po").value; 
           var f1 = document.getElementById("dd").value; 
           var g1 = document.getElementById("ra").value; 
           var h1 = document.getElementById("ra_v1").value;
           var i1 = document.getElementById("ra_v2").value; 
           var j1 = document.getElementById("ra_c1").value; 
           var k1 = document.getElementById("ra_c2").value; 
           var l1 = document.getElementById("grp").value; 
           var m1 = document.getElementById("tem_rise").value; 
           var n1 = document.getElementById("range").value; 
           var o1 = document.getElementById("tap_c").value; 
           var p1 = document.getElementById("sr_no").value; 
           document.getElementById("a").value= a1;
           document.getElementById("b").value= b1 ;
           document.getElementById("e").value=c1 ;
           document.getElementById("f").value=d1 ;
           document.getElementById("g").value= p1;
           document.getElementById("h").value= g1+" KVA";
           document.getElementById("i").value=h1+" K-VOLTS (HV)"+"        "+i1+" K-VOLTS(LV)" ;
           document.getElementById("j").value=j1+" AMPS. (HV)"+"        "+k1+" AMPS. (LV)" ;
           document.getElementById("k").value="STAR-DELTA / "+l1 ;
           document.getElementById("m2").value ="ONAM";
           document.getElementById("n2").value = m1 +" (For Hv Variation)" ;
           document.getElementById("o2").value = n1 ;
           document.getElementById("p2").value = o1+" CIRCUIT TAP CIRCUIT" ;


        }
        function fun1(){
             p =document.getElementById("ra").value;
             v1 = document.getElementById("ra_v1").value;  //load voltage
             v2 = document.getElementById("ra_v2").value;
             if (v1=="" || v2=="" || p==""){
                alert("ENTER THE VALUE OF VOLTAGE AND RATING-->");
             } 
             
                 //  var i1,i2;
                 var i1= p/(1.73*v1);    //load current
                 var i2= p/(1.73*v2);
                 var i5 = parseFloat(i1).toFixed(4);
                 var i7 = parseFloat(i2).toFixed(2);

                 document.getElementById("ra_c1").value= i5;
                 document.getElementById("ra_c2").value= i7;

                 var c1 = parseFloat(i1/1.73).toFixed(3);  //current
                 var c2 = parseFloat(i2/1.73).toFixed(3);
                 document.getElementById("in6").value= c1;
                 document.getElementById("in7").value= i7;
        }
        function fun2(){
            document.getElementById("ra").value="";
            // document.getElementById("in2").value="";
            // document.getElementById("in3").value="";
            document.getElementById("ra_c1").value="";
            document.getElementById("ra_c2").value="";
            document.getElementById("in6").value="";
            document.getElementById("in7").value="";

        }
        function fun3(){
            document.getElementById("tap_c").value="ON";
        }
        function fun4(){
            document.getElementById("tap_c").value="OFF";
        }
        function opa1(){
            document.getElementById("div1").style.width="30cm";
            document.getElementById("div1").style.height="30cm";
            document.getElementById("div2").style.opacity="0";
            // document.getElementById("div2").style.height="0;
        }
        function erase(){
            document.getElementById("div2").style.opacity="0";
            // document.getElementsByTagName("tr").style.padding=0;
            upload();
        }