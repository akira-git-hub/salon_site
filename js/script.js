$(function(){
  $(document).on('click', '#offcanvasNavbar .nav-link, #offcanvasNavbar .dropdown-item', function(){
    var el = document.getElementById('offcanvasNavbar');
    if (!el) return;

    var oc = bootstrap.Offcanvas.getInstance(el) || new bootstrap.Offcanvas(el);
    oc.hide();
  });
});
