document.getElementById("catSubmit").addEventListener("click", function(event){
    event.preventDefault();
    const value = document.getElementById("cat_code_input").value;
    if(value == ""){
        return;
    }
    console.log(value);
    const url = "https://http.cat/[status_code]"
    fetch(url)
        .then(function(response)){
            return response.json();
        }).then(function(json)){
            let results = "";
            results +=
        }
}