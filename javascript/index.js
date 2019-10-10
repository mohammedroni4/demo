const getContentUponClick=() => {
    var acc = document.getElementsByClassName("buttonTags");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        var pTags = this.nextElementSibling;
        if (pTags.style.display === "block") {
            pTags.style.display = "none";
        } else {
            pTags.style.display = "block";
        }
      });
    }
}