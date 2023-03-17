$(".button").click(function () {
  $.get("https://randomfox.ca/floof/", function (data) {
    console.log(data);
    $(".image").attr("src", data.image);
  });
});
