Em.Handlebars.helper('time', function(data) {
  var t = new Date(data);
  if (isNaN(t.getTime())) return data;
  return t.format("HH:MM");
});

Em.Handlebars.helper('fullDate', function(data) {
  var t = new Date(data);
  if (isNaN(t.getTime())) return data;
  return t.format("HH:MM:ss, dddd, d mmmm, yyyy");
});
