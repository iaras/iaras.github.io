$(document).ready( function () {
  $('#table').DataTable();
  $('#ekimemo').DataTable({
    "language" : {"url": "https://cdn.datatables.net/plug-ins/2.0.3/i18n/ja.json"},
    ajax: {url: "../data/ekimemo.json"},
    columns: [
      {data: 'No.'},
      {data: '名前'},
      {data: 'タイプ'},
      {data: '属性'},
    ]
  });
} );