$(document).ready(function() {
    $("#searchbox").keyup(function() {
      showdata();
    });
    
});

var data1 = [];

    $(function(){
        console.log("getJSON data");
        $.getJSON('books.json',function(data){
            console.log('success');
           // console.log(data);
            $.each(data.editions,function(i, emp){
                console.log(emp.title);
                data1.push(emp);
            });
        }).error(function(){
            console.log('error');
        });
    });

function showdata() {
  //  console.log("Showdata");
  var dataForTemplate = {
    list: data1
  };

  // filtteröinti
  var mustContain = $("#searchbox").val().toUpperCase();
 // console.log(mustContain);
  dataForTemplate.list = $.grep(dataForTemplate.list, function(book, index) {
    return book.title.toUpperCase().indexOf(mustContain) != -1;
  });
  // console.log(dataForTemplate.list);

  // renderöidään tulokset mustachen avulla
  var html = Mustache.render($("#searchresulttemplate").html(), dataForTemplate);
  // näytetään tulokset
  $("#resultview").html(html);
}