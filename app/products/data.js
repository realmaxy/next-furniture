export const kitchens = [
  {
    name: 'КУХНЯ ПРАГА',
    image: 'kitchen',
    id: 'kitchen',
    additional: ['kitchen1', 'kitchen2', 'kitchen3'],
    description: 'Кухня Прага - поистине жемчужина нашей коллекции. Она сочетает в себе изысканность и благородство линий, присущие классическому стилю. Благодаря модульной системе, Прага адаптируется под размеры любого помещения, она может быть установлена как в скромной квартире, так и в шикарном особняке. Эксклюзивный дизайн, фасады из МДФ с 3 D–фрезеровкой делают мебель легкой и воздушной. Фасады покрыты пленкой ПВХ, которая наносится методом термо-вакуумного прессования на станке Berkle (Германия) и имеет хорошие эксплуатационные свойства: высокую устойчивость к изменению цвета, механическим повреждениям, воздействию влаги и высоких температур. Ручки, шариковые направляющие ящиков, дверные петли от компании Boyard очень практичны и долговечны в использовании, при желании можно дополнить комплектацию доводчиками. Кромка столешницы из искусственного камня и золотая патина придают дополнительную изысканность. Кухня «Прага» красива, изящна, и в то же самое время практична и комфортна - идеальный вариант для современного ритма жизни. Ведь классика в моде всегда. Фасад – МДФ пленка ПВХ 16 ммКорпус – ЛДСП 16 ммФурнитура:- петли дверей без доводчиков BOYARD.- телескопические направляющие ящиков без доводчиков BOYARD.*Карниз просчитывается дополнительно.*Возможно укомплектовать фурнитурой BOYARD с доводчиком или фурнитурой с доводчиком и метабоксами Blum.',
    metatitle: 'Кухня Прага',
    metadescription: 'Изысканная кухонная мебель от наших мастеров – это комфорт и функциональность в каждой детали.'
  },
]

export const bedrooms = [
  {
    name: 'СПАЛЬНЯ МАЙАМИ',
    image: 'bedroom',
    id: 'bedroom',
    additional: ['bedroom1', 'bedroom2', 'bedroom3'],
    description: 'Яркая,современная и функциональная спальня "Майами" станет украшением любого интерьера.Стильное сочетание белого цвета золотого или серебряного декора никого не оставит равнодушным.Модульная система позволяет создать нужный комплект. Фасад – МДФ крашенный 16 ммКорпус – ЛДСП 16 ммФурнитура:• петли дверей с доводчиками BOYARD.• направляющие ящиков скрытого монтажа с доводчиком CUBO.',
    metatitle: 'Спальня Майами',
    metadescription: 'Яркая,современная и функциональная спальня "Майами" станет украшением любого интерьера.'
  }
]

export const hallways = [
  {
    name: 'ПРИХОЖАЯ ДЕМЕТРА',
    image: 'hallway',
    id: 'hallway',
    additional: ['hallway1', 'hallway2'],
    description: 'Прихожая в классическом стиле с фасадами из МДФ с 3D фрезеровкой, производится в двух цветовых решениях: Слоновая Кость и Орех. Для бесплатного создания дизайн-проекта под ваше пространство позвоните нам или оставьте заявку на сайте.',
    metatitle: 'Прихожая Деметра',
    metadescription: 'Прихожая в классическом стиле.'
  }
]

export const offices = [
  {
    name: 'КАБИНЕТ ДЕМЕТРА',
    image: 'office',
    id: 'office',
    additional: ['office1', 'office2', 'office3'],
    description: 'Модульная коллекция мебели Деметра - уникальное предложение. В ней нет вычурности и лишних деталей. Мебель выполнена из МДФ с 3D-фрезеровкой, его отличают высокая прочность и долговечность, экологичность и безопасность. Две вариации шкафов – с глухим и стеклянным фасадом позволят как разместить книги, сувениры, так и скрыть то, что необходимо от посторонних глаз..',
    metatitle: 'Кабинет Деметра',
    metadescription: 'Строгий и изысканный кабинет для работы и отдыха.'
  }
]

export const livingrooms = [
  {
    name: 'ГОСТИНАЯ ДЕМЕТРА',
    image: 'livingroom',
    id: 'livingroom',
    additional: ['livingroom1', 'livingroom2'],
    description: '«Деметра» - классический вариант элегантного исполнения компактной гостиной.Фасады из МДФ с 3 –D фрезеровкой, изготовленные вручную декоративные элементы из пенополиуретана, украшенные золотой патиной, узоры на витражах создают гармоничный образ. Две вариации шкафов – с глухим и стеклянным фасадом позволят как разместить красивую посуду, сувениры, так и скрыть то, что необходимо от посторонних глаз.Гостиная «Деметра» гармонично впишется в интерьер вашего дома.',
    metatitle: 'Гостинная Деметра',
    metadescription: '«Деметра» - классический вариант элегантного исполнения компактной гостиной.'
  }
]

export const categories = [
  {
    name: 'Кухни',
    id: 'kitchens',
    image: 'kitchens',
    items: kitchens,
    metatitle: 'Кухонная мебель',
    metadescription: ''
  },
  {
    name: 'Гостинные',
    id: 'livingrooms',
    image: 'livingrooms',
    items: livingrooms,
    metatitle: 'Модульные гостинные',
    metadescription: ''
  },
  {
    name: 'Спальни',
    id: 'bedrooms',
    image: 'bedrooms',
    items: bedrooms,
    metatitle: 'Спальная мебель',
    metadescription: ''
  },
  {
    name: 'Прихожие',
    id: 'hallways',
    image: 'hallways',
    items: hallways,
    metatitle: 'Модульные прихожие',
    metadescription: ''
  },
  {
    name: 'Кабинеты',
    id: 'offices',
    image: 'offices',
    items: offices,
    metatitle: 'Офисная мебель',
    metadescription: ''
  }
]