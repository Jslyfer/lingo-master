
var elements = document.getElementsByTagName('*');
var array = [['jialat','(terrible)','Derived&nbsp;from&nbsp;the&nbsp;Hokkien&nbsp;dialect&nbsp;and&nbsp;literally&nbsp;means&nbsp;"to&nbsp;sap&nbsp;a&nbsp;person&nbsp;energy".'],
             ['budget','(save)','save'],
             ['Cold Storage', '(supermart)','A&nbsp;premium&nbsp;supermart&nbsp;chain,&nbsp;equivalent&nbsp;to&nbsp;Whole&nbsp;Foods.'],
             ['NTUC', '(supermart)','Stand&nbsp;for&nbsp;"National&nbsp;Trades&nbsp;Union&nbsp;Congress&nbsp;Co-Operative"&nbsp;It&nbsp;is&nbsp;the&nbsp;largest&nbsp;supermarket&nbsp;chain&nbsp;in&nbsp;Singapore.'],
             ['kopitiam', '(coffee shop)','An&nbsp;aggregate&nbsp;of&nbsp;small&nbsp;stalls&nbsp;or&nbsp;shops&nbsp;selling&nbsp;food&nbsp;and&nbsp;beverages.&nbsp;"Kopi"&nbsp;means&nbsp;"coffee"&nbsp;in&nbsp;Malay&nbsp;language,&nbsp;while&nbsp;"tiam"&nbsp;means&nbsp;"shop"&nbsp;in&nbsp;Hokkien&nbsp;dialect.'],
             ['Kopi-C kosong peng', '(iced latte)','"Kopi&nbsp;C"&nbsp;means&nbsp;"coffee&nbsp;with&nbsp;unsweetened&nbsp;milk".&nbsp;"Kosong"&nbsp;means&nbsp;"without&nbsp;sugar".&nbsp;"Peng"&nbsp;means&nbsp;iced.'],
             ['Sheng Shiong', '(supermart)','A&nbsp;neighbourhood&nbsp;supermart&nbsp;chain.'],
             ['tapao', '(a take away)','This&nbsp;word&nbsp;originates&nbsp;from&nbsp;the&nbsp;Chinese&nbsp;phrase&nbsp;which&nbsp;means&nbsp;"to&nbsp;package".']
             ];

String.prototype.replaceArray = function(array) {
  var replaceString = this;
  var regex; 
  for (var i = 0; i < array.length; i++) {
    regex = new RegExp(array[i][0], "i");
    replaceString = replaceString.replace(regex, array [i][0] + "<a data-toggle=tooltip title= " + array[i][2] + "><u>" + array[i][1] + "</u></a>"
        );
  }
  return replaceString;
};

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replaceArray(array);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
                //element.innerHTML = replacedText;
                element.outerHTML = replacedText;
            }
        }
    }
}

$('[data-toggle="tooltip"]').tooltip();   