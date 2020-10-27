let SwiperImg = ['./image/silde_one.jpg','./image/silde_two.jpg','./image/silde_three.jpg','./image/silde_four.jpg','./image/silde_five.jpg','./image/silde_six.jpg']
let WaterFall = [
    {
        img: './image/water_one.jpg',
        title: '西西里鲜茄牛肉意面',
        type: 'Sicilian spaghetti with grond beef',
        link: '1'
    },
    {
        img: './image/water_two.jpg',
        title: '黑椒风味厚切牛柳意面',
        type: 'Stir-fried tenderloin spaghetti with black pepper',
        link: '2'
    },
    {
        img: './image/water_three.jpg',
        title: '和风深海鱿鱼籽意面',
        type: 'Squid roe pasta with seafood and shiitake sauce',
        link: '3'
    },
    {
        img: './image/water_four.jpg',
        title: '泰式冬阴功海鲜意面',
        type: 'Thai tom yum kung pasta with seafood',
        link: '4'
    },
    {
        img: './image/water_five.jpg',
        title: '西西里鲜茄牛肉意面',
        type: 'Sicilian spaghetti with grond beef',
        link: ''
    },
    {
        img: './image/water_six.jpg',
        title: '泰式冬阴功海鲜意面',
        type: 'Stir-fried tenderloin spaghetti with black pepper',
        link: '4'
    },
    {
        img: './image/water_seven.jpg',
        title: '和风深海鱿鱼籽意面',
        type: 'Squid roe pasta with seafood and shiitake sauce',
        link: ''
    },
    {
        img: './image/water_four.jpg',
        title: '泰式冬阴功海鲜意面',
        type: 'Thai tom yum kung pasta with seafood',
        link: ''
    },
]
let imgload = 0

function RenderSwiper(list,randerItem){
    let elementNode = ''
    list.forEach( (item,index) => {
        elementNode += `
            <div class="swiper-slide container_slide"  style="background-image: url('${item}')"></div>
        `
    })
    randerItem.html(elementNode)
}

function RenderWaterfall(list,randerItem){
    let elementNode = ''
    list.forEach( (item,index) => {
        elementNode += `
            <div class="wow fadeInUpBig item" data-wow-duration="2s" data-wow-delay="${index/10}s">`
                if(item.link != ''){
                    elementNode += `<a href="./commodityInfo.html?id=${item.link}">`
                }else{
                    elementNode += `<a href="javascript:;">`
                }
         elementNode += `<div class="pic">
                        <img src="${item.img}" onload="num()"/>
                    </div>
                    <div class="info">
                        <p class="title">${item.title}</p>
                        <p class="subtitle">${item.type}</p>
                    </div>
                </a>
            </div>
        `
    })
    randerItem.append(elementNode)
}

function num(){
    imgload++
    if(imgload == $('.item_content .item').length){
        waterfallFlow($('.item_content'),$('.item_content .item'))
    }
}

topHeader()
RenderSwiper(SwiperImg,$('.container_wrapper'))
RenderWaterfall(WaterFall,$('.item_content'))
bannerSwiper()
waterfallWoW()

