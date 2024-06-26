import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article, ArticleBlockType, ArticleType } from '@/entity/Article';
import { ArticlesInfiniteList } from './ArticlesInfiniteList';

const article: Article = {
  id: '1',
  title: 'Python news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://th.bing.com/th/id/OIP.FWkfpoMroeM7SW_tSrov6QAAAA?pid=ImgDet&w=241&h=150.625&c=7',
  views: 1022,
  createdAt: '26.02.2022',
  user: {
    id: '1',
    username: 'admin',
  },
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
  ],
};

const meta: Meta<typeof ArticlesInfiniteList> = {
  title: 'pages/ArticlesPage/ArticlesInfiniteList',
  component: ArticlesInfiniteList,
  args: {},
  decorators: [
    StoreDecorator({
      articlesPage: {
        ids: ['1', '2'],
        entities: {
          1: { ...article, id: '1' },
          2: { ...article, id: '2' },
        },
      },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ArticlesInfiniteList>;

export const Primary: Story = {};
