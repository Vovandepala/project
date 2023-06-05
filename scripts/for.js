// Циклы for & while

const TYPE = {
      CR: 'critical',
      NE: 'not_exactly',
      ST: 'standart'
};

const news = [
      {
            title: 'Я сегодня поел',
            data: 'Сегодня',
            price: 1001,
            subtitle: 'Курица',
            content: 'Сегодня был весёлый день...',
            images: ['wefwe', 'sdfrfwesdf', '2234234'],
            links: ['https//sdfg', 'https//f2434d'],
            partners: [{
                  title: 'Мы за всё хорошее, ',
                  site: 'https//bbdfg',
                  keywords: ['Мы хорошие','Мы красивые']
            }, {
                  title: 'Мы за всё хорошее 2, ',
                  site: 'https//bbdfg2',
                  keywords: ['Мы хорошие 2','Мы красивые 2']
            }],
      },
      
            {
                  title: 'Я сегодня поел 3',
                  data: 'Сегодня 3',
                  price: 2002,
                  subtitle: 'Курица 3',
                  content: 'Сегодня был весёлый день 3...',
                  images: ['wefwe3', 'sdfrfwesdf3', '22342343'],
                  links: ['https//sdfg3', 'https//f2434d3'],
                  partners: [{
                        title: 'Мы за всё хорошее, ',
                        site: 'https//bbdfg',
                        keywords: ['Мы хорошие','Мы красивые']
                  }, {
                        title: 'Мы за всё хорошее 3, ',
                        site: 'https//bbdfg3',
                        keywords: ['Мы хорошие 3','Мы красивые 3']
                  }],
            },
];

if (news.length === 0) {
      console.log('Новостей нет')
}
else {
      const firstNews = news[0];
      const secondNews = news[1];

      if ()

}

console.log(news[0].title)
console.log(news[1].title)