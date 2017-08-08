var input = document.querySelector("#text");
var error = document.querySelector("#error"); 
var sub = document.querySelector("#sub");

sub.addEventListener("click", function() {
    if(input.value === "") {
        error.innerHTML="<div class='alert alert-danger' role='alert'>Unesite tekst za pretragu!</div>"; 
    }
    else {
        error.innerHTML = "<div class='alert alert-success' role='alert'>Pronađeno!</div>";
        
        $(document).ready(function() {
             searchHighlight($("#text").val());
        });

    } 
});

function searchHighlight(searchText) {
    if(searchText) {
        var content = $("#quotes").text();
        var searchExp = new RegExp(searchText, "ig");
        var matches = content.match(searchExp);
        if(matches) {
            $("#quotes").html(content.replace(searchExp, function(match) {
                return "<span class='highlight'>" + match + "</span>";
            }));
        }
        else {
            return error.innerHTML="<div class='alert alert-danger' role='alert'>Ne možemo pronaći. Pokušajte ponovo!</div>";
        }
    }
}
