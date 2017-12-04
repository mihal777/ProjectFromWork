
$("#mybutton").on('click', function () {

    $.ajax({
        url: '/testajax',
        success: function (data) {
            //var str = '';
            console.log('Загружені файли: ' + JSON.stringify(data));
            console.log('Типи даних: ' + typeof data);
            var htmlstr = '<table border="1", id="table">';


            try {

                if (typeof data == 'string') {
                    var data_ = JSON.parse(data);

                    var list = data_[0];
                    var data__ = list["data"];

                    for (var i = 0; i < data__.length; i++) {
                        htmlstr += '<tr>';
                        console.log('i'+i);
                        for (var j = 0; j < data__[i].length; j++) {

                            htmlstr += '<td>' + data__[i][j] + '</td>';
                            console.log('    j ' + j)
                        }
                        htmlstr += '</tr>';
                    }
                    htmlstr += '</table>';

                    $("#mytable").html(htmlstr);
                }
            } catch (e){
                console.error(e);
            }
                console.log(htmlstr);


        }
    });
});
