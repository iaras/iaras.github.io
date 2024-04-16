$(document).ready( function () {
  $('#table').DataTable();
  $('#ekimemo').DataTable({
    ajax: {url: "../data/ekimemo.json"},
    columns: [
      {data: 'No.'},
      {data: '名前.'},
      {data: 'タイプ.'},
      {data: '属性'},
    ]
  });
} );