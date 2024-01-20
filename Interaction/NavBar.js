$(function () {
  $(document).scroll(function () {
    var $nav = $("nav");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

function downloadPdf(pdfPath, pdfName) {
  var link = document.createElement("a");
  link.href = pdfPath;
  link.download = pdfName;
  link.click();
}