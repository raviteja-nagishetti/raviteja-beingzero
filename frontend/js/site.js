$.getJSON('/data', function(d)
{
    //alert(d)
    $("#name").text(d.name)
    $("#college").text(d.college)
    $("#regno").text(d.regno)    
})