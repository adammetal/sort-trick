const sortBtn = document.querySelector("#sort-button");
const container = document.querySelector("#container");
let descending = false;

sortBtn.addEventListener('click', () => {
  const rows = Array.from(document.querySelectorAll('.row'));

  rows.sort((a, b) => {
    const aNum = Number(a.dataset.num);
    const bNum = Number(b.dataset.num);
    
    if (descending === true) {
      return bNum - aNum;
    } else {
      return aNum - bNum;
    }
  });

  container.innerHTML = "";

  container.append(...rows);

  descending = !descending;
});
