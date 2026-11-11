// Mobile menu
var toggle = document.querySelector('.nav-toggle');
var nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Enquiry form: opens the visitor's email app with the details filled in
var form = document.getElementById('enquiry');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var subject = 'Enquiry: ' + f.requirement.value + ' - ' + f.name.value;
    var body = [
      'Name: ' + f.name.value,
      'Company: ' + f.company.value,
      'Phone: ' + f.phone.value,
      'Requirement: ' + f.requirement.value,
      '',
      f.message.value
    ].join('\n');
    window.location.href = 'mailto:' + form.dataset.email +
      '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
}
