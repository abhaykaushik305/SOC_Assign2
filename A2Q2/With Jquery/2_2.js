$(document).ready(function(){
                    $("#myInput").on("keyup", function() {
                        var value = $(this).val().toLowerCase();
                        
                        $("#Table tr").filter(function() {
                        $(this).toggle(($(this)).text().toLowerCase().indexOf(value) > -1)
                        });
                    });
                    });