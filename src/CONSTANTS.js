import { Community } from 'svgComponents/Community';
import { Competition } from 'svgComponents/Competition';
import { News } from 'svgComponents/News';
import { Documents } from 'svgComponents/Documents';
import HighFive from 'components/ContentForSliderParticipant/HighFive';
import Media from 'components/ContentForSliderParticipant/Media';
import BigHeart from 'components/ContentForSliderParticipant/BigHeart';

import winner from 'images/winner.png';
import winner1 from 'images/winner1.png';
import winner2 from 'images/winner2.png';
import winner3 from 'images/winner3.png';
import winner4 from 'images/winner4.png';
import winner5 from 'images/winner5.png';
import winner6 from 'images/winner6.png';
import winner7 from 'images/winner7.png';
import winner8 from 'images/winner8.png';
// import winner9 from 'images/winner9.png';
// import winner10 from 'images/winner10.png';
// import winner11 from 'images/winner11.png';

import star1 from 'images/star1.png';
import star2 from 'images/star2.png';
import star3 from 'images/star3.png';
import star4 from 'images/star4.png';
import star5 from 'images/star5.png';
import star6 from 'images/star6.png';
import star7 from 'images/star7.png';
import star8 from 'images/star8.png';
import star9 from 'images/star9.png';
import star10 from 'images/star10.png';
import star11 from 'images/star11.png';
import star12 from 'images/star12.png';
import star13 from 'images/star13.png';
import star14 from 'images/star14.png';

import organizer1 from 'images/organizer1.png';
import organizer2 from 'images/organizer2.png';
import organizer3 from 'images/organizer3.png';
import organizer4 from 'images/organizer4.png';
import organizer5 from 'images/organizer5.png';
import organizer6 from 'images/organizer6.png';
import organizer7 from 'images/organizer7.png';
import organizer8 from 'images/organizer8.png';
import organizer9 from 'images/organizer9.png';
import organizer10 from 'images/organizer10.png';
import organizer11 from 'images/organizer11.png';
import organizer12 from 'images/organizer12.png';
import organizer13 from 'images/organizer13.png';
import organizer14 from 'images/organizer14.png';
import organizer15 from 'images/organizer15.png';
import organizer16 from 'images/organizer16.png';
import organizer17 from 'images/organizer17.png';
import organizer18 from 'images/organizer18.svg';
import organizer19 from 'images/organizer19.png';
import organizer20 from 'images/organizer20.png';
import organizer21 from 'images/organizer21.png';
import rso         from 'images/rso.png';
import worldSkills from 'images/worldSkills.png';


import volunteer from 'images/volunteer.png';
import member1 from 'images/member1.png';
import curator from 'images/curator.png';
import highFive from 'images/highFive.png';
import media from 'images/media.png';
import bigHeart from 'images/bigHeart.png';
import blueBackground from 'images/blueBackground.png'
import greenBackground from 'images/greenBackground.png'
import purpleBackground from 'images/purpleBackground.png'

import test_online1 from 'images/test_online1.png';
import test_online1_mob from 'images/test_online1_mob.png';
import test_online2 from 'images/test_online2.png';
import test_online2_mob from 'images/test_online2_mob.png';
import test_online3 from 'images/test_online3.png';
import test_online3_mob from 'images/test_online3_mob.png';

import whyMe from 'images/whyMe.png'
import imbp from 'images/imbp.png'
import planetHome from 'images/planetHome.png'

export const TECH_SUP_PHONE = '8 800 350 63 83';
export const TECH_SUP_EMAIL = 'help@bolshayaperemena.online';

export const TEST_ROLES = [
    {title: 'Ученик', id: 1, type: 1},
    {title: 'Педагог', id: 2, type: 1},
    {title: 'Студент ССУЗа', id: 9, type: 2}
];

export const TEST_POSITIONS = [
    {title: 'Завуч', id: 0},
    {title: 'Директор', id: 1},
    {title: 'Учитель', id: 2}
];

export const GRADES = [5,6,7,8,9,10,11]

export const LITERA = ['А','Б','В', 'Г', 'Д', 'Е','Ё', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П','Р', 'С', 'Т', 'У', 'Ф', 'Ч', 'Ц','Ш','Щ','Э', 'Ю', 'Я'];

export const VKREF = 'https://vk.com/bpcontest'
export const OKREF = 'https://ok.ru/group/56657148969112'
export const INSTREF = 'https://www.instagram.com/peremenacontest';

export const MENU = [
    {id: 1, title: 'Сообщество', path: '/', icon: Community},
    {id: 2, title: 'Конкурс', path: '/', icon: Competition},
    {id: 3, title: 'Новости', path: '/', icon: News},
    {id: 4, title: 'Документы', path: '/', icon: Documents},
];

export const CHALLENGE = [
    {
        id: 1,
        title: 'Почему я?',
        text: <><p>
            А почему ты уверен, что победишь? Можешь доказать? Попробуй! Заодно разомнёшься перед конкурсными заданиями! Участвуй в челлендже «Почему я?» <br/> Запиши видеоролик, в котором расскажи, почему ты выбираешь конкурс<br/>
            «Большая перемена» и почему именно ты достоин победы. Не стесняйся, здесь можно поведать обо всех своих талантах. Выложи ролик в комментарии к этому посту с хэштегами #ПочемуЯ #БольшаяПеремена<br/><br/> Подпишись на нашу группу.
        </p></>,
        imgSrc: whyMe,
        topOffset: '-29px',
        leftOffset: '79px',
        href: 'https://vk.com/wall-193258751_328391',
        endData: '27.03.2021'
    },
    {
        id: 2,
        title: '#ЯБольшаяПеремена',
        text: <><p>
            «Большая перемена» продолжает врываться в весну и жечь-жечь-жечь приближающимся новым сезоном!<br/><br/>
            Ты любишь нашу группу и наш конкурс? Уверены, что да! Тогда давай вместе сделаем так, чтобы о «Большой перемене» узнали абсолютно все!<br/>
            Мы запускаем акцию #ЯБольшаяПеремена. Для участия в ней:<br/>
            - Оформи свою аватарку в нашем фирменном стиле. Для этого помести фото<br/>
            в брендированную рамку (документы прикреплены к этому посту)!<br/>
            - В статусе профиля напиши #ЯБольшаяПеремена<br/>
            - Профит! Собирай лайки от друзей и будь причастен к нашей огромной конкурсной семье!
        </p></>,
        imgSrc: imbp,
        /*icon: pixelBalloon,*/
        topOffset: '-64px',
        leftOffset: '-52px',
        href: 'https://vk.com/wall-193258751_328373',
        endData: '10.04.2021'
    },
    {
        id: 3,
        title: 'Планета - дом каждого из нас',
        text: <><p>
            Авторы работ, которые займут 1, 2 и 3 места, смогут посетить Сайлюгемский заповедник, где примут участие в съемке фильма о снежном барсе, а другие победители поедут в Ростовский заповедник, чтобы познакомиться с уникальной природой степи. Заманчиво? Тогда готовься проявить себя на все 200%!<br/><br/>
            Проанализируй наиболее актуальные проблемы экологии и предложи, как самые простые действия каждого человека могут помочь в их решении. Оформи свои задумки в виде видео или текстовой презентации с фото. Выложи работу в комментарии к этому посту.
        </p></>,
        imgSrc: planetHome,
        /*icon: pixelBobot,*/
        topOffset: '-67px',
        leftOffset: '84px',
        href: 'https://vk.com/wall-193258751_309011',
        endData: '31.03.2021'
    }
];

export const WINNERS = [
    {
        id: 1,
        fio: 'Софья Лобанова',
        region: 'Саратовская область',
        titleShort: 'Победительница вызова «Помни!»',
        titleLong: 'Победительница вызова «Помни!», изучает историю России, а также занимается поиском имён солдат, пропавших без вести во время Великой Отечественной войны.',
        imgSrc: winner1,
        text: 'После победы на «Большой перемене» мне удалось принять участие во Всероссийском патриотическом форуме в Москве, где я рассказала о своём проекте на всю страну. Это событие запомнится мне на всю жизнь!'
    },
    {
        id: 2,
        fio: 'Анна Лаштанкина',
        region: 'Пензенская область',
        titleShort: 'Победительница вызова «Сохраняй природу!»',
        titleLong: 'Победительница вызова «Сохраняй природу!», мечтает стать доктором.',
        imgSrc: winner2,
        text: 'Я состою в школьном эковолонтерском отряде «Росток» и являюсь одним из его лидеров. Я занимаюсь исследовательской и просветительской деятельностью, а также веду исследовательскую работу. Сейчас я развиваю проект «Книга флоры района Гидростроя города Пензы. «Большая перемена» для меня – возможность получить новые знания и умения, познакомиться с интересными людьми, найти единомышленников и вдохновение для новой деятельности».'
    },
    {
        id: 3,
        region: 'Ростовская область',
        fio: 'Максим Мельников',
        titleShort: 'Победитель вызова «Твори!»',
        titleLong: 'Победитель вызова «Твори!», автор литературных произведений.',
        imgSrc: winner3,
        text: 'На «Большой перемене» я победил в конкурсе эссе от писателя-фантаста и автора проекта «ПостЭпидемия» Вадима Панова. Конкурс помог мне не только проявить себя, но и дал возможность поработать с выдающимся автором! Теперь моя работа представлена на сайте «ПостЭпидемия» наравне с работами взрослых и состоявшихся писателей-фантастов.'
    },
    {
        id: 4,
        fio: 'София Шакерова',
        region: 'Московская область',
        titleShort: 'Победительница вызова «Делай добро!»',
        titleLong: 'Победительница вызова «Делай добро!», волонтёр, увлекается космонавтикой.',
        imgSrc: winner,
        text: 'После победы в конкурсе я приняла участие во Всероссийском открытом уроке, где рассказала о своей волонтёрской деятельности. «Большая перемена» открывает новые возможности!'
    },
    {
        id: 5,
        fio: 'Владислав Быков',
        region: 'Саратовская область',
        titleShort: 'Победитель вызова «Расскажи о главном!»',
        titleLong: 'Победитель вызова «Расскажи о главном!», мечтает стать режиссёром.',
        imgSrc: winner4,
        text: '«Большая перемена» дала мне возможность пройти кастинг и стать артистом мюзикла «Большая перемена. Будущее начинается с тебя». Мне удалось поработать с профессионалами своего дела! Я призываю всех школьников принять участие в новом сезоне «Большой перемены»'
    },
    {
        id: 6,
        fio: 'Владислав Рогозин',
        region: 'Воронежская область',
        titleShort: 'Победитель вызова «Создавай будущее!»',
        titleLong: 'Победитель вызова «Создавай будущее!», автор проекта создания биобутанола посредством бактериального сбраживания водорослей.',
        imgSrc: winner5,
        text: 'В рамках суперфинала мне удалось встретится с генеральным директором АНО «Россия – страна возможностей» Алексеем Комиссаровым и провести с ним интервью в прямом эфире.'
    },
    {
        id: 7,
        fio: 'Даниял Шабанов',
        region: 'Республика Дагестан',
        titleShort: 'Победитель вызова «Познавай Россию!»',
        titleLong: 'Победитель вызова «Познавай Россию!», в рамках конкурса разработал туристический маршрут для молодёжи по Дагестану, Алтаю, Крыму, Татарстану и Санкт-Петербургу, мечтает стать хирургом.',
        imgSrc: winner6,
        text: 'На финале конкурса я смог пообщаться с Президентом России Владимиром Путиным, и он даже поздравил меня с днём рождения. Это было одно из самых ярких событий в моей жизни! А после финала исполнилось моё заветное желание – благодаря конкурсу я встретился с известным российским хирургом Леонидом Рошалем, который является для меня примером. «Большая перемена» – это волшебники, которые исполняют мечты юных талантов России.'
    },
    {
        id: 8,
        fio: 'Иван Савинов',
        region: 'Челябинская область',
        titleShort: 'Победитель вызова «Меняй мир вокруг!»',
        titleLong: 'Победитель вызова «Меняй мир вокруг!», мечтает работать на железной дороге.',
        imgSrc: winner7,
        text: 'В день, когда я выступил перед Президентом России, мне поступило приглашение посетить ОАО «РЖД». Это было очень неожиданно. Председатель правления ОАО «РЖД» Олег Белозёров встретился со мной после финала конкурса и вручил сертификат на целевое обучение в любом вузе страны. Я даже не представлял, что «Большая перемена» откроет двери в моё успешное будущее!'
    },
    {
        id:9,
        fio: 'Е. Константинова',
        region: 'Ростовская область',
        titleShort: 'Победительница вызова «Будь здоров!»',
        titleLong: 'Победительница вызова «Будь здоров!», автор проекта по измерению уровня сахара в крови',
        imgSrc: winner8,
        text: 'Я мечтала попасть на стажировку в «Росатом», а после победы в конкурсе госкорпорация «Росатом» предложила мне целевое направление на обучение в высшем учебном заведении. Я не ожидала, что моя мечта окажется так близко.'
    },
];

export const STARS = [
    {
        id:1,
        fio: 'Борис Добродеев',
        imageSrc: star1,
        title: <>Генеральный директор <br/> Mail.ru Group</>
    },
    {
        id:2,
        fio: 'Катя Адушкина',
        imageSrc: star2,
        title: <>Видеоблогер, певица</>,
    },
    {
        id:3,
        fio: 'Владимир Машков',
        imageSrc: star3,
        title: <>Актёр и режиссёр театра и кино, сценарист</>
    },
    {
        id:4,
        fio: 'Екатерина Черкес-Заде',
        imageSrc: star4,
        title: <>Директор университета креативных индустрий Universal University</>
    },
    {
        id: 5,
        fio: 'Сергей Першин',
        imageSrc: star5,
        title: <>Генеральный директор АНО «Центр развития культурных инициатив»</>
    },
    {
        id: 6,
        fio: 'Сергей Кравцов',
        imageSrc: star6,
        title: <>Министр просвещения Российской Федерации</>
    },
    {
        id: 7,
        fio: 'Али Узденов',
        imageSrc: star7,
        title: <>Предприниматель</>
    },
    {
        id: 8,
        fio: 'Владыка Тихон',
        imageSrc: star8,
        title: <>Епископ Русской православной церкви</>
    },
    {
        id: 9,
        fio: 'Дмитрий Шпаро',
        imageSrc: star9,
        title: <>Путешественник, писатель</>
    },
    {
        id: 10,
        fio: 'Дмитрий Крылов',
        imageSrc: star10,
        title: <>Тележурналист, автор и ведущий телепередач «Непутёвые заметки»</>
    },
    {
        id: 11,
        fio: 'Эрнест Мацкявичюс',
        imageSrc: star11,
        title: <>Журналист, телеведущий</>
    },
    {
        id: 12,
        fio: 'Герман Греф',
        imageSrc: star12,
        title: <>Председатель правления «Сбербанка России»</>
    },
    {
        id: 13,
        fio: 'Татьяна Голикова',
        imageSrc: star13,
        title: <>Заместитель Председателя Правительства Российской Федерации</>
    },
    {
        id: 14,
        fio: 'Сергей Кудь-Сверчков',
        imageSrc: star14,
        title: <>Лётчик-космонавт</>
    }
];

export const ORGANIZERS = [
    {id: 1, imgSrc: organizer1},
    {id: 2, imgSrc: organizer2},
    {id: 3, imgSrc: organizer3},
    {id: 4, imgSrc: organizer4},
    {id: 5, imgSrc: organizer5},
    {id: 6, imgSrc: organizer6},
    {id: 21, imgSrc: organizer21},
    {id: 7, imgSrc: organizer7},
    {id: 8, imgSrc: organizer8},
    {id: 9, imgSrc: organizer9, text: 'Министерство просвещения'},
    {id: 10, imgSrc: organizer10, text: 'Министерство образования'},
    {id: 11, imgSrc: organizer11},
    {id: 12, imgSrc: organizer17},
    {id: 13, imgSrc: organizer18},
    {id: 14, imgSrc: organizer12},
    {id: 15, imgSrc: organizer13},
    {id: 16, imgSrc: organizer14},
    {id: 17, imgSrc: organizer15},
    {id: 18, imgSrc: organizer19},
    {id: 19, imgSrc: organizer16},
    {id: 21, imgSrc: rso},
    {id: 22, imgSrc: worldSkills},
    {id: 20, imgSrc: organizer20}
];

export const PARTICIPANT = [
    {
        id: 1,
        short: {
            title: 'Дай Пять!',
            subTitle: 'Волонтеры образования',
            description: '"Дай Пять!" - это проект, направленный на оказание централизованной помощи тем, кто отстаёт от школьной программы. Проект основан на принципе “равный - равному” - школьник (или студент) объясняет школьнику.',
            fio: 'Роман Ковалев',
            position: 'Руководитель',
            additionally: 'Ученик 9 класса',
            imgSrc: volunteer,
            background: blueBackground,
            color: '#2C73BF',
        },
        full: {
            imgSrc: highFive,
            header: 'Дай Пять!',
            mainColor: '#99c4f5',
            lightColor: '#c7e1ff',
            darkColor: '#2c73bf',
            shadowColor: '#B5B5B5',
            link: 'https://dobro.ru/organizations/10001813/info',
            content: HighFive
        }
    },
    {
        id: 2,
        short: {
            title: 'Медиакоманда',
            subTitle: false,
            description: 'Медиакоманда «Большой перемены»  -  сообщество юных журналистов, авторов материалов для СМИ и контента для социальных медиа и видеоплатформы «Большой перемены».',
            fio: 'Ангелина Бондарева',
            position: 'Координатор',
            additionally: false,
            imgSrc: member1,
            background: greenBackground,
            color: '#53C5B3',
        },
        full: {
            imgSrc: media,
            header: 'Медиакоманда',
            mainColor: '#99c4f5',
            lightColor: '#c7e1ff',
            darkColor: '#2c73bf',
            shadowColor: '#B5B5B5',
            link: 'https://t.me/mediaBolshayaPeremena',
            content: Media
        }
    },
    {
        id: 3,
        short: {
            title: 'Добрая cуббота',
            subTitle: false,
            description: 'Еженедельно в рамках Всероссийской акции «Добрая суббота»  школьники будут принимать участие в мероприятиях, акциях, челленджах, которые будут посвящены определенному направлению добровольчества',
            fio: 'Никита Кудинов',
            position: 'Куратор',
            additionally: false,
            imgSrc: curator,
            background: purpleBackground,
            color: '#79539D',
        },
        full: {
            imgSrc: bigHeart,
            header: 'Добрая cуббота',
            mainColor: '#FF7271',
            lightColor: '#ffafbb',
            darkColor: '#ef3f58',
            shadowColor: '#B5B5B5',
            link: 'https://dobro.ru/project/10022186',
            content: BigHeart
        }
    }
];

export const ARRAY_FOR_MAP = {
    "RU-ALT": {
        region: "Алтайский край",
        participants: "19091",
        school: "131",
        winner: "1"
    },
    "RU-AMU": {
        region: "Амурская область",
        participants: "4449",
        school: "91",
        winner: "8"
    },
    "RU-ARK": {
        region: "Архангельская область",
        participants: "3262",
        school: "66",
        winner: "0"
    },
    "RU-AST": {
        region: "Астраханская область",
        participants: "4347",
        school: "73",
        winner: "4"
    },
    "RU-BEL": {
        region: "Белгородская область",
        participants: "13298",
        school: "197",
        winner: "16"
    },
    "RU-BRY": {
        region: "Брянская область",
        participants: "11304",
        school: "78",
        winner: "9"
    },
    "RU-VLA": {
        region: "Владимирская область",
        participants: "6614",
        school: "75",
        winner: "1"
    },
    "RU-VGG": {
        region: "Волгоградская область",
        participants: "18138",
        school: "137",
        winner: "20"
    },
    "RU-VLG": {
        region: "Вологодская область",
        participants: "2902",
        school: "76",
        winner: "5"
    },
    "RU-VOR": {
        region: "Воронежская область",
        participants: "20145",
        school: "179",
        winner: "13"
    },
    "RU-MOW": {
        region: "г. Москва",
        participants: "40297",
        school: "1365",
        winner: "52"
    },
    "RU-SPE": {
        region: "г. Санкт-Петербург",
        participants: "19141",
        school: "322",
        winner: "21"
    },
    "RU-SEV": {
        region: "г. Севастополь",
        participants: "1451",
        school: "37",
        winner: "3"
    },
    "RU-YEV": {
        region: "Еврейская Автономная область",
        participants: "342",
        school: "11",
        winner: "1"
    },
    "RU-ZAB": {
        region: "Забайкальский край",
        participants: "3125",
        school: "59",
        winner: "7"
    },
    "RU-IVA": {
        region: "Ивановская область",
        participants: "1788",
        school: "56",
        winner: "0"
    },
    "RU-IRK": {
        region: "Иркутская область",
        participants: "23171",
        school: "170",
        winner: "9"
    },
    "RU-KB": {
        region: "Кабардино-Балкарская республика",
        participants: "11146",
        school: "163",
        winner: "5"
    },
    "RU-KGD": {
        region: "Калининградская область",
        participants: "6357",
        school: "85",
        winner: "0"
    },
    "RU-KLU": {
        region: "Калужская область",
        participants: "6284",
        school: "105",
        winner: "6"
    },
    "RU-KAM": {
        region: "Камчатский край ",
        participants: "1149",
        school: "27",
        winner: "4"
    },
    "RU-KC": {
        region: "Карачаево-Черкесская Республика ",
        participants: "5245",
        school: "44",
        winner: "1"
    },
    "RU-KEM": {
        region: "Кемеровская область",
        participants: "27185",
        school: "252",
        winner: "4"
    },
    "RU-KIR": {
        region: "Кировская область",
        participants: "2315",
        school: "59",
        winner: "5"
    },
    "RU-KOS": {
        region: "Костромская область",
        participants: "1468",
        school: "29",
        winner: "3"
    },
    "RU-KDA": {
        region: "Краснодарский край",
        participants: "80594",
        school: "409",
        winner: "39"
    },
    "RU-KYA": {
        region: "Красноярский край",
        participants: "12397",
        school: "169",
        winner: "8"
    },
    "RU-KGN": {
        region: "Курганская область",
        participants: "2880",
        school: "55",
        winner: "2"
    },
    "RU-KRS": {
        region: "Курская область",
        participants: "10359",
        school: "83",
        winner: "9"
    },
    "RU-LEN": {
        region: "Ленинградская область",
        participants: "18133",
        school: "394",
        winner: "6"
    },
    "RU-LIP": {
        region: "Липецкая область",
        participants: "10581",
        school: "104",
        winner: "5"
    },
    "RU-MAG": {
        region: "Магаданская область",
        participants: "509",
        school: "9",
        winner: "0"
    },
    "RU-MOS": {
        region: "Московская область",
        participants: "58430",
        school: "816",
        winner: "43"
    },
    "RU-MUR": {
        region: "Мурманская область",
        participants: "2134",
        school: "44",
        winner: "0"
    },
    "RU-NEN": {
        region: "Ненецкий автономный округ",
        participants: "90",
        school: "5",
        winner: "0"
    },
    "RU-NIZ": {
        region: "Нижегородская область",
        participants: "44327",
        school: "371",
        winner: "22"
    },
    "RU-NGR": {
        region: "Новгородская область",
        participants: "1069",
        school: "28",
        winner: "0"
    },
    "RU-NVS": {
        region: "Новосибирская область",
        participants: "11237",
        school: "178",
        winner: "8"
    },
    "RU-OMS": {
        region: "Омская область",
        participants: "14382",
        school: "111",
        winner: "6"
    },
    "RU-ORE": {
        region: "Оренбургская область",
        participants: "7308",
        school: "106",
        winner: "2"
    },
    "RU-ORL": {
        region: "Орловская область",
        participants: "3007",
        school: "59",
        winner: "4"
    },
    "RU-PNZ":{
        region: "Пензенская область",
        participants: "11509",
        school: "156",
        winner: "11"
    },
    "RU-PER": {
        region: "Пермский край ",
        participants: "13570",
        school: "131",
        winner: "0"
    },
    "RU-PRI": {
        region: "Приморский край",
        participants: "8197",
        school: "110",
        winner: "6"
    },
    "RU-PSK": {
        region: "Псковская область",
        participants: "7358",
        school: "83",
        winner: "5"
    },
    "RU-AD": {
        region: "Республика Адыгея",
        participants: "6225",
        school: "38",
        winner: "3"
    },
    "RU-BA": {
        region: "Республика Башкортостан",
        participants: "22163",
        school: "218",
        winner: "13"
    },
    "RU-BU": {
        region: "Республика Бурятия",
        participants: "3648",
        school: "47",
        winner: "4"
    },
    "RU-DA": {
        region: "Республика Дагестан",
        participants: "41305",
        school: "133",
        winner: "4"
    },
    "RU-IN": {
        region: "Республика Ингушетия",
        participants: "2083",
        school: "10",
        winner: "0"
    },
    "RU-KL": {
        region: "Республика Калмыкия",
        participants: "2443",
        school: "38",
        winner: "2"
    },
    "RU-KR": {
        region: "Республика Карелия",
        participants: "1230",
        school: "38",
        winner: "1"
    },
    "RU-KO": {
        region: "Республика Коми",
        participants: "2113",
        school: "57",
        winner: "0"
    },
    "RU-KRY": {
        region: "Республика Крым",
        participants: "20085",
        school: "133",
        winner: "8"
    },
    "RU-ME": {
        region: "Республика Марий Эл",
        participants: "2922",
        school: "41",
        winner: "0"
    },
    "RU-MO": {
        region: "Республика Мордовия",
        participants: "7670",
        school: "86",
        winner: "2"
    },
    "RU-SA": {
        region: "Республика Саха - Якутия",
        participants: "1611",
        school: "25",
        winner: "0"
    },
    "RU-SE": {
        region: "Республика Северная Осетия - Алания",
        participants: "6894",
        school: "45",
        winner: "1"
    },
    "RU-TA": {
        region: "Республика Татарстан",
        participants: "21156",
        school: "180",
        winner: "13"
    },
    "RU-TY": {
        region: "Республика Тыва",
        participants: "1216",
        school: "18",
        winner: "0"
    },
    "RU-KK": {
        region: "Республика Хакасия",
        participants: "1579",
        school: "27",
        winner: "0"
    },
    "RU-AL": {
        region: "Ресублика Алтай",
        participants: "3403",
        school: "38",
        winner: "0"
    },
    "RU-ROS": {
        region: "Ростовская область",
        participants: "39289",
        school: "364",
        winner: "31"
    },
    "RU-RYA": {
        region: "Рязанская область",
        participants: "9259",
        school: "91",
        winner: "5"
    },
    "RU-SAM": {
        region: "Самарская область",
        participants: "24185",
        school: "202",
        winner: "14"
    },
    "RU-SAR": {
        region: "Саратовская область",
        participants: "12828",
        school: "176",
        winner: "8"
    },
    "RU-SAK": {
        region: "Сахалинская область",
        participants: "2850",
        school: "25",
        winner: "2"
    },
    "RU-SVE": {
        region: "Свердловская область ",
        participants: "27252",
        school: "316",
        winner: "32"
    },
    "RU-SMO": {
        region: "Смоленская область",
        participants: "7284",
        school: "74",
        winner: "1"
    },
    "RU-STA": {
        region: "Ставропольский край",
        participants: "27200",
        school: "192",
        winner: "9"
    },
    "RU-TAM": {
        region: "Тамбовская область",
        participants: "11022",
        school: "84",
        winner: "5"
    },
    "RU-TVE": {
        region: "Тверская область",
        participants: "2982",
        school: "58",
        winner: "4"
    },
    "RU-TOM": {
        region: "Томская область",
        participants: "8170",
        school: "103",
        winner: "4"
    },
    "RU-TUL": {
        region: "Тульская область ",
        participants: "5396",
        school: "83",
        winner: "2"
    },
    "RU-TYU": {
        region: "Тюменская область",
        participants: "17520",
        school: "113",
        winner: "5"
    },
    "RU-UD": {
        region: "Удмуртская республика",
        participants: "11468",
        school: "143",
        winner: "4"
    },
    "RU-ULY": {
        region: "Ульяновская область",
        participants: "6788",
        school: "73",
        winner: "4"
    },
    "RU-KHA": {
        region: "Хабаровский край",
        participants: "5599",
        school: "66",
        winner: "4"
    },
    "RU-KHM": {
        region: "Ханты-Мансийский Автономный округ - Югра",
        participants: "24076",
        school: "122",
        winner: "10"
    },
    "RU-CHE": {
        region: "Челябинская область",
        participants: "14567",
        school: "208",
        winner: "14"
    },
    "RU-CE": {
        region: "Чеченская республика",
        participants: "5226",
        school: "14",
        winner: "0"
    },
    "RU-CU": {
        region: "Чувашская республика",
        participants: "3784",
        school: "89",
        winner: "3"
    },
    "RU-CHU": {
        region: "Чукотский автономный округ",
        participants: "121",
        school: "7",
        winner: "0"
    },
    "RU-YAN": {
        region: "Ямало-Ненецкий автономный округ",
        participants: "7491",
        school: "44",
        winner: "10"
    },
    "RU-YAR": {
        region: "Ярославская область",
        participants: "10090",
        school: "105",
        winner: "6"
    }
};

export const TEST_ONLINE = [
    {
        id: 1,
        title: 'Твой код',
        img: test_online1,
        imgMob: test_online1_mob,
        link: '20210203-170332-8692',
        time: '15-20 минут',
        textProfile: 'Изучи особенности своей личности: какие черты преобладают в тебе, что является твоей сильной стороной, а над чем еще нужно поработать.',
        dateStart: '2021-03-26',
        descriptions: <>
            <p>В каждом из 50 вопросов будет предложена некоторая ситуация и варианты поведения в ней.</p>
            <p>Часть из этих ситуаций могут показаться незнакомыми, в таком случае попробуй представить, что произойдет, если ты в неё попадешь.</p>
            <p>Из предложенных вариантов необходимо будет выбрать только один. Время на ответ не ограничено.</p>
            <p>Помни, что здесь нет правильных и неправильных ответов, выбирай то, что наиболее близко тебе в настоящий момент времени.</p>
        </>
    },
    {
        id: 2,
        title: 'Твой вектор',
        img: test_online2,
        imgMob: test_online2_mob,
        link: '20210205-152506-2643',
        time: '10-15 минут',
        textProfile: 'Существуют различные типы мышления. Какой преобладает у тебя? Ты узнаешь это, отвечая на вопросы нашего теста.',
        dateStart: '2021-03-29',
        descriptions: <>
            <p>Здравствуй!</p>
            <p>Приглашаем тебя пройти тест, который оценит особенности твоего мышления, твои профессиональные склонности и предпочтения.</p>
            <p>Всего тебе предстоит ответить на 25 вопросов, в каждом можно выбрать не более 2-х подходящих тебе вариантов ответа.</p>
            <p>Важно: старайся как можно реже выбирать вариант “Ничего из предложенного не подходит”. Даже если описанная ситуация кажется тебе непривычной, все же постарайся найти среди вариантов более близкие тебе, иначе результат теста окажется малоинформативным.</p>
        </>
    },
    {
        id: 3,
        title: 'Твой выбор',
        img: test_online3,
        imgMob: test_online3_mob,
        link: '20210305-140818-8208',
        time: '5-10 минут',
        textProfile: 'Какая сфера жизни является для тебя наиболее интересной, в каком направлении тебе стоит развиваться. Ты можешь узнать это, пройдя тест.',
        dateStart: '2021-04-01',
        descriptions: <>
            <p>Здравствуй!</p>
            <p>Приглашаем тебя подумать над тем, что бы ты хотел(а) увидеть в своей будущей профессии. Ответь всего на 5 вопросов, выбрав в каждом не более 5-6 вариантов ответа.</p>
            <p>Приготовься к работе!</p>
        </>
    }
];