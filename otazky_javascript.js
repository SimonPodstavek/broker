/*
database of answers
poz=positive
neg=negative
How to operate:
How to add another broker
How to add another question
*/
var IB_poz,IB_neg,lynx_poz,lynx_neg,xtb_poz,xtb_neg,fio_poz,fio_neg,revolut_poz,revolut_neg,finax_poz,finax_neg,eic_poz,eic_neg;//making variables

IB_poz = "1C,1D,2D,2E,3D,3E,4A,4B,4C,4D,5B,5C,6A,6B,6C,6D,7B,7C,8B,8C,9A,9B,9C,9D,";
IB_neg="1A,1B,2A,2B,3A,3B,7A,8A,";
lynx_poz="1D,2D,2E,3D,3E,4A,4B,5A,6A,6C,6D,7A,7B,7C,8A,8B,8C,9A,";
lynx_neg="1A,1B,2A,2B,3A,3B,4C,4D,5B,5C,6B,";
xtb_poz="1A,1B,1C,1D,2C,2D,2E,3C,3D,3E,4A,4B,4C,4D,5A,5B,5C,6A,6B,6C,7A,7B,7C,8A,8B,8C,9A,9B,9C,9D,";
xtb_neg="6D,";
fio_poz="1B,1C,1D,2C,2D,2E,3C,3D,3E,4A,4B,5A,6A,6C,6D,7A,7B,7C,8B,8C,9A,";
fio_neg="1A,2A,2B,3A,3B,4C,4D,5B,5C,8A,";
revolut_poz="1A,1B,2A,2B,2C,3A,3B,3C,4A,5A,6A,6C,6D,7B,7C,8A,8B,9A,9B,9C,9D,";
revolut_neg="1D,2D,3D,4B,4C,4D,5B,5C,7A,8C,";
finax_poz="1A,1B,2A,2B,3A,3B,4B,5A,6A,7A,7B,7C,8A,8B,9A,9B,9C,9D,";
finax_neg="4A,4C,4D,5B,5C,6B,6C,6D,8C,";
eic_poz="1A,1B,2A,2B,3A,3B,4B,5A,6A,7A,7B,7C,8A,8B,9A,9B,9C,9D,";
eic_neg="4A,4C,4D,5B,5C,6B,6C,6D,8C,";

//end database of answers

//collecting data from a form

function submit(){//defining answer variables
var data_answer_1 = document.getElementsByName('first_investment');
var data_answer_2 = document.getElementsByName('monthly_contribution');
var data_answer_3 = document.getElementsByName('irregular_contribution');
var data_answer_4 = document.getElementsByName('types_of_actives');
var data_answer_5 = document.getElementsByName('strategy');
var data_answer_6 = document.getElementsByName('dividend');
var data_answer_7 = document.getElementsByName('english_speaking');
var data_answer_8 = document.getElementsByName('education');
var data_answer_9 = document.getElementsByName('currency');
var data_answer_10 = document.getElementsByName('age');

 var error=0;//in case something goes wrong this changes to 1 and program will stop and require sending form once again


var all_answers =[data_answer_1,data_answer_2,data_answer_3,data_answer_4,data_answer_5,data_answer_6,data_answer_7,data_answer_8,data_answer_9,data_answer_10]; //all answers in a variable



var processed_answers=[];//processed answers together in an array ready for use


//add broker here
var IB_answers=['Interactive Brokers'],lynx_answers=['Lynx'],xtb_answers=['XTB'],fio_answers=['Fio'],revolut_answers=['Revolut'],finax_answers=['Finax'],eic_answers=['EIC'];//final variables that are going to be put in the table

 //final variables that are going to be put in the table in an array

for(var n=0; n< 10; n++){//there are 9 questions so n = 9
   for (var i = 0; i < 6; i++) {
   if(all_answers[n][i] !== undefined && all_answers[n][i].checked){
     processed_answers.push(all_answers[n][i].value);

     i=11;//stops second loop
   }else if(all_answers[n][i] == undefined){

   }
 }
}



//add broker here
for(var i =0; i < 9; i++){
  //IB and template for adding another broker
  if(IB_poz.includes(processed_answers[i]) == true){IB_answers.push('<div id="green">&#10004</div>'); }//change IB_answers
  else if(IB_neg.includes(processed_answers[i]) == true){IB_answers.push('<div id="red">&#x2716</div>');}//change  IB_answers
  else if(processed_answers[i]=='N'){IB_answers.push('');}
  else{IB_answers.push('-');}//change IB_answers

  //lynx
    if(lynx_poz.includes(processed_answers[i]) == true){lynx_answers.push('<div id="green">&#10004</div>'); }//change lynx_answers
    else if(lynx_neg.includes(processed_answers[i]) == true){lynx_answers.push('<div id="red">&#x2716</div>');}//change  lynx_answers
  else if(processed_answers[i]=='N'){lynx_answers.push('');}
    else{lynx_answers.push('-');}//change lynx_answers

    //xtb
  if(xtb_poz.includes(processed_answers[i]) == true){xtb_answers.push('<div id="green">&#10004</div>'); }//change xtb_answers
  else if(xtb_neg.includes(processed_answers[i]) == true){xtb_answers.push('<div id="red">&#x2716</div>');}//change  xtb_answers
  else if(processed_answers[i]=='N'){xtb_answers.push('');}
  else{xtb_answers.push('-');}//change xtb_answers

  //fio
  if(fio_poz.includes(processed_answers[i]) == true){fio_answers.push('<div id="green">&#10004</div>'); }//change fio_answers
  else if(fio_neg.includes(processed_answers[i]) == true){fio_answers.push('<div id="red">&#x2716</div>');}//change  fio_answers
  else if(processed_answers[i]=='N'){fio_answers.push('');}
  else{fio_answers.push('-');}//change fio_answers

  //revolut
  if(revolut_poz.includes(processed_answers[i]) == true){revolut_answers.push('<div id="green">&#10004</div>'); }//change revolut_answers
  else if(revolut_neg.includes(processed_answers[i]) == true){revolut_answers.push('<div id="red">&#x2716</div>');}//change  revolut_answers
  else if(processed_answers[i]=='N'){revolut_answers.push('');}
  else{revolut_answers.push('-');}//change revolut_answers

  //finax
  if(finax_poz.includes(processed_answers[i]) == true){finax_answers.push('<div id="green">&#10004</div>'); }//change finax_answers
  else if(finax_neg.includes(processed_answers[i]) == true){finax_answers.push('<div id="red">&#x2716</div>');}//change  finax_answers
  else if(processed_answers[i]=='N'){finax_answers.push('');}
  else{finax_answers.push('-');}//change finax_answers

  //eic
  if(eic_poz.includes(processed_answers[i]) == true){eic_answers.push('<div id="green">&#10004</div>'); }//change eic_answers
  else if(eic_neg.includes(processed_answers[i]) == true){eic_answers.push('<div id="red">&#x2716</div>');}//change  eic_answers
  else if(processed_answers[i]=='N'){eic_answers.push('');}
  else{eic_answers.push('-');}//change eic_answers

}
 var all_processed_answers=[IB_answers,lynx_answers,xtb_answers,fio_answers,revolut_answers,finax_answers,eic_answers];

//bunus pre IB
if(processed_answers[9]== '10A' || processed_answers[9]== '10B'){
  IB_answers.push('BONUS');
  lynx_answers.push('-');
  xtb_answers.push('-');
  fio_answers.push('-');
  revolut_answers.push('-');
  finax_answers.push('-');
  eic_answers.push('-');
}else{
  IB_answers.push('-');
  lynx_answers.push('-');
  xtb_answers.push('-');
  fio_answers.push('-');
  revolut_answers.push('-');
  finax_answers.push('-');
  eic_answers.push('-');

}


  var results='<div class="table-wrapper"><table class="fl-table"><thead><tr><th>Broker</th> <th>Prvotná <br>investícia</th> <th>Mesačný <br> vklad</th><th>Mimoriadny<br> vklad</th><th>Typ<br> nástrojov</th><th>Stratégia</th><th>Dividenda</th><th>Angličtina</th><th>Skúsenosti</th><th>Mena</th><th>Vek</th></tr></thead><tbody>';
  for(var mm=0;mm<7;mm++){
    results+="<tr>";
    for(var bb=0;bb<11;bb++){
      results+="<td>"+all_processed_answers[mm][bb]+"</td>";
    }
    results+="</tr>";




}

var zaujal=`<div class="padding-to-right"><br><h3 id='brokeri'>Ak sa chcete dozvedieť o brokeroch viac<br><br></h3>


 <h4 class="brokeri">Interactive Brokers:</h4>
 <a class="samotne-odkazy" href='https://www.bluenumbers.sk/ako-si-vybrat-etf-brokera-velke-porovnanie-brokerov/#interactivebrokers'>- Interactive Brokers vo veľkom provnaní brokerov</a><br>
<a class="samotne-odkazy" href='https://www.bluenumbers.sk/vybrat-si-xtb-lynx-alebo-interactive-brokers/'>- Vybrať si XTB, Lynx alebo Interactive Brokers</a><br>
<a class="samotne-odkazy" href='https://www.bluenumbers.sk/oplati-sa-kupit-akcie-a-etf-cez-interactive-brokers/'>- Interactive Brokers wiki – kompletný návod v slovenčine</a><br>
<a class="samotne-odkazy" href='http://interactivebrokers.eu/'>- Oficiálny web Interactive Brokers v angličtine</a><br>
<br>

 <h4 class="brokeri">Lynx:</h4>
<a class="samotne-odkazy" href='https://www.bluenumbers.sk/ako-si-vybrat-etf-brokera-velke-porovnanie-brokerov/#lynx'>- Lynx vo veľkom provnaní brokerov</a><br>
<a class="samotne-odkazy" href='https://www.bluenumbers.sk/vybrat-si-xtb-lynx-alebo-interactive-brokers/'>- Vybrať si XTB, Lynx alebo Interactive Brokers</a><br>
<a class="samotne-odkazy" href='https://www.lynxbroker.sk/?utm_medium=refferal&utm_campaign=disruptivne&utm_source=disruptivne'>- Oficiálny web Lynx v slovenčine </a><br>
<br>

 <h4 class="brokeri">XTB:</h4>
<a class="samotne-odkazy" href='https://www.bluenumbers.sk/ako-si-vybrat-etf-brokera-velke-porovnanie-brokerov/#xtb'>- XTB vo veľkom provnaní brokerov</a><br>
<a class="samotne-odkazy" href='https://www.bluenumbers.sk/vybrat-si-xtb-lynx-alebo-interactive-brokers/'>- Vybrať si XTB, Lynx alebo Interactive Brokers</a><br>
<a class="samotne-odkazy" href='https://www.bluenumbers.sk/oplati-sa-kupit-akcie-a-etf-cez-xtb/'>- Oplatí sa kúpiť akcie a ETF cez XTB s návodom</a><br>
<a class="samotne-odkazy" href='https://go.xtbaffiliates.com/visit/?bta=38810&nci=12773/'>- Oficiálny web XTB v slovenčine</a><br>
<br>

 <h4 class="brokeri">Etoro:</h4>
<a class="samotne-odkazy" href='https://www.bluenumbers.sk/ako-si-vybrat-etf-brokera-velke-porovnanie-brokerov/#etoro'>- Etoro vo veľkom provnaní brokerov</a><br>
<a class="samotne-odkazy" href='https://med.etoro.com/B12300_A93726_TClick_Spartneri.aspx'>- Etoro odkaz na otvorenie demo účtu</a><br>
<a class="samotne-odkazy" href='https://www.etoro.com/cs-cz/'>- Oficiálny web Etoro v češtine</a><br>
<br>

 <h4 class="brokeri">Trading 212:<br></h4>
<a class="samotne-odkazy" href='https://www.bluenumbers.sk/ako-si-vybrat-etf-brokera-velke-porovnanie-brokerov/#trading212'>- Trading 212 vo veľkom provnaní brokerov</a><br>
<br>

 <h4 class="brokeri">Fio:<br></h4>
<a class="samotne-odkazy" href='https://www.bluenumbers.sk/ako-si-vybrat-etf-brokera-velke-porovnanie-brokerov/#fio'>- Fio vo veľkom provnaní brokerov</a><br>
<a class="samotne-odkazy" href='https://www.fio.sk/'>- Oficiálny web Fio brokera a Fio banky v slovenčine </a><br>
<br>

 <h4 class="brokeri">Revolut:<br></h4>
<a class="samotne-odkazy" href='https://www.bluenumbers.sk/ako-si-vybrat-etf-brokera-velke-porovnanie-brokerov/#revolut'>- Revolut vo veľkom provnaní brokerov</a><br>
<br>

 <h4 class="brokeri">Finax:<br></h4>
<a class="samotne-odkazy" href='https://www.bluenumbers.sk/ako-si-vybrat-etf-brokera-velke-porovnanie-brokerov/#finax'>- Finax vo veľkom provnaní brokerov</a><br>

<br>

 <h4 class="brokeri">EIC:<br></h4>
<a class="samotne-odkazy" href='https://www.bluenumbers.sk/ako-si-vybrat-etf-brokera-velke-porovnanie-brokerov/#eic'>- EIC vo veľkom provnaní brokerov</a>

</div>
<h3 class="end-text padding-to-right">Ak sa chcete o investovaní dozvediet viac, navštívte portál <a class="samotne-odkazy" href='http://bluenumbers.sk/'>Bluenumbers.sk</a> kde viete nájsť komplatné série o tom ako investovať. </h3>
</div>
<br><br>

`;


results+="<tbody></table></div><h4 id='podnadpis'><br>Prázdne polia reprezentujú nevyplnené otázky.<br>Znak &#10004 reprezentuje pozitívny bod pre brokera.<br>Znak &#x2716 reprezentuje negatívny bod pre brokera.<br>Znak &#11044 reprezentuje neutrálny bod pre brokera.</h4>";
results+=zaujal;

document.getElementById("demo").innerHTML=results;
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
