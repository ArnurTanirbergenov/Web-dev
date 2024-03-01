export interface Product {
  id: number;
  image:string;
  name: string;
  price: number;
  description: string;
  rating: number;
  link:string;
}

export const products = [
  {
    id: 1,
    image:"https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=preview-large",
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    price: 629155,
    description: "технология NFC: Да <br> цвет: серый тип экрана: OLED, Super Retina XDR display<br>диагональ: 6 дюйм<br>размер оперативной памяти: 8 ГБ<br>процессор: 6-ядерный Apple A17 Pro<br>объем встроенной памяти: 256.0 ГБ<br>емкость аккумулятора: 4422.0 мАч",
    rating:5,
    link:"https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000"
  },
  {
    id: 2,
    image:"https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=preview-large",
    name: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
    price: 2058,
    description: 'Адаптер питания Apple USB‑C мощностью 20 Вт дает возможность быстро и эффективно заряжать гаджеты. Проверяется на основном сайте через QR на оригинальность. Этот адаптер совместим с любыми устройствами Apple, оснащенными портом USB-C: смартфон, планшет или смарт-часы.',
    rating:4.5,
    link:"https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000"
  },
  {
    id: 3,
    image:"https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large",
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    price: 290220,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.'
    ,rating:5,
    link:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000"
  },
  {
    id: 4,
    image:"https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=preview-large",
    name: 'Смартфон Apple iPhone 15 128Gb черный',
    price: 387710,
    description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.',
    rating: 5,
    link:"https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000"
  },
  {
    id: 5,
    image:"https://resources.cdn-kaspi.kz/img/m/p/hae/h00/83559620739102.jpg?format=preview-large",
    name: 'Смартфон Apple iPhone 15 Pro 256Gb серый',
    price: 579143,
    description: 'Apple iPhone 15 Pro - сверхпрочный смартфон, изготовленный из титана. Устройство работает на мощном процессоре Apple A17 Pro и обладает передовой оптикой профессионального уровня.',
    rating:5,
    link:"https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000"
  },
  {
    id: 6,
    image:"https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=preview-large",
    name: 'Умная колонка Яндекс Станция Лайт фиолетовый',
    price: 27032 ,
    description: 'Яндекс.Станция Лайт — это яркая и компактная умная колонка, которая управляется голосом и сенсорными кнопками. Она здорово украсит интерьер и сможет развлечь ребенка: матовый корпус приятно держать в руках, а расцветка порадует глаз. У Алисы в Станции Лайт свой характер — он зависит от цвета устройства. Чтобы пользоваться Станцией Лайт, нужны подключение к интернету по Wi-Fi и аккаунт на Яндексе.',
    rating:5,
    link:"https://kaspi.kz/shop/p/jandeks-stantsija-lait-fioletovyi-101870266/?c=750000000"
  },
  {
    id: 7,
    image:"https://resources.cdn-kaspi.kz/img/m/p/hbf/h98/63952956522526.jpg?format=preview-large",
    name: 'Наушники Newest M10 черный',
    price: 299,
    description: 'Новый обновленный чип 5.1: стабильное полнофункциональное обновление по сравнению со старой версией Bluetooth 5.0, дальность передачи значительно улучшена, улучшена стабильность сигнала и способность противостоять помехам, а энергопотребление в режиме ожидания снижено.',
    rating:4.5,
    link:"https://kaspi.kz/shop/p/newest-m10-chernyi-102272027/?c=750000000"
  },
  {
    id: 8,
    image:"https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=preview-large",
    name: 'Игровая приставка Sony PlayStation 5 белый',
    price: 247880 ,
    description: 'С Sony PlayStation 5 вы ощутите истинную силу игры Молниеносная скорость загрузки благодаря сверхскоростному накопителю SSD, невероятный эффект погружения благодаря тактильной отдаче, адаптивным спусковым кнопкам и 3D-звуку, а также потрясающие игры нового поколения для PlayStation 5',
    rating:5,
    link:"https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000"
  },
  {
    id: 9,
    image:"https://resources.cdn-kaspi.kz/img/m/p/h06/h36/81188929404958.png?format=preview-large",
    name: ' Портативная колонка BT SPEAKER ZQS-4239 черный',
    price: 299,
    description: '',
    rating:5,
    link:"https://kaspi.kz/shop/p/bt-speaker-zqs-4239-chernyi-110785723/?c=750000000"
  },
  {
    id: 10,
    image:"https://resources.cdn-kaspi.kz/img/m/p/hb7/h5e/64511113199646.jpg?format=preview-large",
    name: 'Наушники Apple AirPods Pro 2nd generation белый',
    price: 107000,
    description: '',
    rating:5,
    link:"https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000"
  },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/