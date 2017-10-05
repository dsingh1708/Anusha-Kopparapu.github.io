function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("contacts");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
 function addname(){
    var name = document.getElementById("name").value;
    var node = document.createElement("A");
    node.setAttribute('href','#');
    var link = document.createElement("LI");
    var textnode = document.createTextNode(name);
    node.appendChild(textnode);  
    link.appendChild(node);
    document.getElementById("contacts").appendChild(link);
    $('#add').find('input').val('');
 }
 function myScroll(myMessage) {
     var input, filter, ul, li, a, i;
     ul = document.getElementById("contacts");
     li = ul.getElementsByTagName("li");
     for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            
            if (a.innerHTML.toUpperCase().charAt(0)==myMessage) {
                li[i].style.display = "";
            }
             else if(myMessage=='#')
            {
                
                 li[i].style.display = "";
            }
                
            else {
                li[i].style.display = "none";
            }
        }
}
 var divsions = ["contacts","groups","Div1", "Div2","Div3","Div4","Div5","Div6","Div7","aplhaList"];
    var visibleDiv = null;
    function visibility(divId) {
      if(visibleDiv === divId) {
        visibleDiv = null;
      } else {  
        visibleDiv = divId;
      }
      hideVisibleDivs();
    }
    function hideVisibleDivs() {
      var i, divId, div;
      for(i = 0; i < divsions.length; i++) {
        divId = divsions[i];
        div = document.getElementById(divId);
        if(visibleDiv === divId) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }
    $(document).ready(function() {
    //$('#contacts').hide();
    $('#view').on('click', function() {
            $('#contacts').show();
            $('#aplhaList').show();
    });
    $('#groups').hide();
    $('#Div1').hide();
    $('#Div2').hide();
    $('#Div3').hide();
    $('#Div4').hide();
    $('#Div5').hide();
    $('#Div6').hide();
    $('#Div7').hide();

    $('#view1').on('click', function() {
            $('#groups').show();
            $('#aplhaList').hide();
    });
});
 var divs = ["Div1", "Div2","Div3","Div4","Div5","Div6","Div7"];
    var visibleDivId = null;
    function divVisibility(divId) {
      if(visibleDivId === divId) {
        visibleDivId = null;
      } else {
        visibleDivId = divId;
      }
        // var w = $(window).width();
        // if (w < 768 ) {
        //     //$('#B').prependTo( $('#column2') );
        //     window.open(divId) ;
        // }
      hideNonVisibleDivs();
    }
    function hideNonVisibleDivs() {
      
      var i, divId, div;
      for(i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if(visibleDivId === divId) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      }
    }  
    $(document).ready(function() {
    $('#Div1').hide();
    $('#preview').on('click', function() {
            $('#Div1').show();
    });
    $('#Div2').hide();
    $('#preview1').on('click', function() {
            $('#Div2').show();
    });
    $('#Div3').hide();
    $('#preview2').on('click', function() {
            $('#Div3').show();
    });
     $('#Div4').hide();
    $('#preview3').on('click', function() {
            $('#Div4').show();
    });
    $('#Div5').hide();
    $('#preview4').on('click', function() {
            $('#Div5').show();
    });
    $('#Div6').hide();
    $('#preview5').on('click', function() {
            $('#Div6').show();
    });
    $('#Div7').hide();
    $('#preview6').on('click', function() {
            $('#Div7').show();
    });
});
