
const var1Input = $('.j-var1');
const var2Input = $('.j-var2');
const var3Input = $('.j-var3');
const var4Input = $('.j-var4');
const var5Input = $('.j-var5');
const var6Input = $('.j-var6');
const speachInput = $('.j-speach');
const btnCreate = $('.j-btn1');
const btnReplace = $('.j-btn2');
const textJ = $('.text');
const obj1 = {
  "text":[
    "Жили-были {var1} да {var2}",
    "Была у них {var3}",
    "Снесла {var3} {var4}, не простое - золотое",
    "- {var1} бил, бил - не разбил",
    "- {var2} била, била - не разбила",
    "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
    "{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"
  ]
};
btnCreate.click(function() {
  textJ.html(obj1.text);
});
btnReplace.click(function() {
	const var1 = var1Input.val();
	const var2 = var2Input.val();
	const var3 = var3Input.val();
	const var4 = var4Input.val();
	const var5 = var5Input.val();
	const var6 = var6Input.val();
	const speach = speachInput.val();
	const obj2 = {
    "text":[
      `Жили-были ${var1} да ${var2}`,
      `Была у них ${var3}`,
      `Снесла ${var3} ${var4}, не простое - золотое`,
      `- ${var1} бил, бил - не разбил`,
      `- ${var2} била, била - не разбила`,
      `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
      `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
      `${speach}`,
    ]
  };
  
    
  textJ.html(obj2.text);
});