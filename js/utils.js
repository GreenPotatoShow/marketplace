class Item {
  constructor(id, name, price, count = 0) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.count = count;
  }
}

const items = [
    new Item(0, '1', 100),
    new Item(1, '2', 1000),
    new Item(2, '3', 10000),
    new Item(3, '4', 100000),
];

const descriptions = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam illum, soluta cumque mollitia iusto cum odio, cupiditate consequatur ex saepe modi. At animi eum ipsa aspernatur doloribus pariatur odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam illum, soluta cumque mollitia iusto cum odio, cupiditate consequatur ex saepe modi. At animi eum ipsa aspernatur doloribus pariatur odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam illum, soluta cumque mollitia iusto cum odio, cupiditate consequatur ex saepe modi. At animi eum ipsa aspernatur doloribus pariatur odit.',

  'Практический опыт показывает, что рамки и место обучения кадров способствует повышению актуальности новых предложений? Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности позволяет выполнить важнейшие задания по разработке системы масштабного изменения ряда параметров. Задача организации, в особенности же дальнейшее развитие различных форм деятельности создаёт предпосылки качественно новых шагов для экономической целесообразности принимаемых решений. Практический опыт показывает, что консультация с профессионалами из IT обеспечивает актуальность соответствующих условий активизации. Дорогие друзья, социально-экономическое развитие обеспечивает актуальность системы масштабного изменения ряда параметров. Таким образом, постоянный количественный рост и сфера нашей активности обеспечивает актуальность дальнейших направлений развитая системы массового участия? Практический опыт показывает, что повышение уровня гражданского сознания обеспечивает актуальность новых предложений? Таким образом, начало повседневной работы по формированию позиции требует от нас анализа новых предложений! Таким образом, консультация с профессионалами из IT требует от нас анализа экономической целесообразности принимаемых решений. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности играет важную роль в формировании дальнейших направлений развития проекта. С другой стороны дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание экономической целесообразности принимаемых решений! Таким образом, курс на социально-ориентированный национальный проект требует от нас системного анализа системы обучения кадров, соответствующей насущным потребностям. Дорогие друзья, курс на социально-ориентированный национальный...',

  'Однозначно, акционеры крупнейших компаний, инициированные исключительно синтетически, описаны максимально подробно. В своём стремлении повысить качество жизни, они забывают, что реализация намеченных плановых заданий создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса системы обучения кадров, соответствующей насущным потребностям. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: базовый вектор развития способствует повышению качества стандартных подходов. Значимость этих проблем настолько очевидна, что убеждённость некоторых оппонентов прекрасно подходит для реализации экспериментов, поражающих по своей масштабности и грандиозности. Но современная методология разработки прекрасно подходит для реализации переосмысления внешнеэкономических политик.',

  'Ut enim ad minima veniam, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
]

const cartEmpty = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  return (!cart || Array.isArray(cart) && cart.length === 0);
}

const updateCounter = () => {
    const cart = localStorage.getItem('cart');
    const counterEl = document.querySelector('.counter');
    if (!cartEmpty()) {
      const parsedCart = JSON.parse(cart).filter (item => item.count !== 0 );
      localStorage.setItem('cart', JSON.stringify(parsedCart));
      counterEl.innerHTML = parsedCart.length;
      counterEl.style.display = 'block';
    } 
    else {
      counterEl.style.display = 'none';
    }
}
