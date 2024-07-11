$(document).ready( function () {
  $('#table').DataTable();
  $('#ekimemo').DataTable({
    "language" : {"url": "https://cdn.datatables.net/plug-ins/2.0.3/i18n/ja.json"},
    ajax: {
      url: "../data/ekimemo.json",
      dataSrc: function (json) {
        for (var i = 0, len = json.data.length; i < len; i++) {
          json.data[i]['名前'] = '<a href="ekimemo/detail.html?id=' + json.data[i]['No'] + '">' + json.data[i]['名前'] + '</a>'
        }
        return json.data;
      }
    },
    columns: [
      {data: 'No'},
      {data: '名前'},
      {data: 'タイプ'},
      {data: '属性'},
    ]
  });
  $('table td:contains("eco")').css('color', 'green');
  $('table td:contains("heat")').css('color', 'red');
  $('table td:contains("cool")').css('color', 'blue');
});