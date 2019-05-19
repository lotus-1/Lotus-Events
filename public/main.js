// function request(url, cb) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       cb(null, xhr.responseText);
//     } else {
//       cb("error" + xhr.responseType);
//     }
//   };
//   xhr.open("GET", url, true);
//   xhr.send();
// }

document.getElementById('button').addEventListener('onclick', function(e) {
  e.preventDefault();
  fetch('/events')
  .then(function(response) {
    return response.json();
  })
  .then(function(err, data) {
    if (err) {
      console.error(err);
    } else {
      var events = JSON.parse(data);
      var table = document.getElementById("events-table");
      /* create a row in table for each user returned from DB */
      users.forEach(function(user) {
        var row = document.createElement("tr");

        var user = document.createElement("td");
        user.innerHTML = user.name;
        row.appendChild(name);

        var eventName = document.createElement("td");
        eventName.innerHTML = user.event;
        row.appendChild(event);
        table.appendChild(row);

        var eventDate = document.createElement("td");
        eventDate.innerHTML = user.date;
        row.appendChild(date);
        table.appendChild(row);

        var comments = document.createElement("td");
        comments.innerHTML = user.comment;
        row.appendChild(comment);
        table.appendChild(row);
      });
    }
  });
})



//
// function updateDom(err, data) {
//   if (err) {
//     console.error(err);
//   } else {
//     var events = JSON.parse(data);
//     var table = document.getElementById("events-table");
//     /* create a row in table for each user returned from DB */
//     users.forEach(function(user) {
//       var row = document.createElement("tr");
//
//       var user = document.createElement("td");
//       user.innerHTML = user.name;
//       row.appendChild(name);
//
//       var eventName = document.createElement("td");
//       eventName.innerHTML = user.event;
//       row.appendChild(event);
//       table.appendChild(row);
//
//       var eventDate = document.createElement("td");
//       eventDate.innerHTML = user.date;
//       row.appendChild(date);
//       table.appendChild(row);
//
//       var comments = document.createElement("td");
//       comments.innerHTML = user.comment;
//       row.appendChild(comment);
//       table.appendChild(row);
//     });
//   }


// request("/events", updateDom);
