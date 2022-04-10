(() => {
  const btnc = document.querySelectorAll('.btnn'), //buttons
        num = document.querySelector('#info-num'), //numbbers for info
        Info = document.querySelector('#infoss'); //secret infos

  const secinfo = [
    `We don't cap like other beer brands. We genuinely care about you, your health and your happiness.`,

    `Our beer is made from totally organic ingredients. Means...we don't use toxic fertilizers on our sources.`,

    `Our beer bottle is made from premium RECYCLED glass.`,

    `The world on our logo represents the availability of this beer all across the globe.`,

    `Our beer is so cool that instead of ruining your body, it will sanitize it from toxicity.`
  ]


  function getInfo () {
    getInfoNum(this.classList, this.dataset.offset);
  }

  function getInfoNum(number, index) {
    console.log(number[1], index);

    number.textContent = `Info\u00A0 ${number[1]}`;

    //adding Info form an array to div/const
    Info.textContent = secinfo[index];
  }

    //adding event listener when the 'circled button' is clicked
    btnc.forEach(btnc => btnc.addEventListener('click', getInfo));

  })();
