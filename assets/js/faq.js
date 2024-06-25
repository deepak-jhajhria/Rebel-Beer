function openNav() {
    document.getElementById("navbar").classList.toggle("left-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross");
}

function toggleAccordion(element) {
  const content = element.nextElementSibling;
  const plusIcon = element.querySelector('.plus-icon');
  const minusIcon = element.querySelector('.minus-icon');

  document.querySelectorAll('.accordion-content').forEach((item) => {
    if (item !== content) {
      item.style.maxHeight = null;
      item.previousElementSibling.querySelector('.plus-icon').classList.remove('hidden');
      item.previousElementSibling.querySelector('.minus-icon').classList.add('hidden');
      item.parentElement.classList.remove('active-border');
    }
  });

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    element.parentElement.classList.remove('active-border');
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    element.parentElement.classList.add('active-border');
  }

  plusIcon.classList.toggle('hidden');
  minusIcon.classList.toggle('hidden');
}

document.getElementById("show").addEventListener("click", function() {
  show.classList.toggle("w-screen");
});