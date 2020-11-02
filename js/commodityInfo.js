let commodityList = [
    {
        img: ['./image/tomato_one.jpg','./image/tomato_two.jpg','./image/tomato_three.jpg'],
        link: '1',
        title: '西西里鲜茄牛肉意面',
        subtitle: 'Sicilian spaghetti with grond beef',
        money: '22.00',
        id: '20201023',
        specification: '100g',
        brand: '蓝色烟囱'
    },
    {
        img: ['./image/blackpepper_one.jpg','./image/blackpepper_two.jpg','./image/blackpepper_three.jpg','./image/blackpepper_four.jpg'],
        link: '2',
        title: '黑椒风味厚切牛柳意面',
        subtitle: 'Stir-fried tenderloin spaghetti with black pepper',
        money: '22.00',
        id: '20201023',
        specification: '100g',
        brand: '蓝色烟囱'
    },
    {
        img: ['./image/squid_one.jpg','./image/squid_two.jpg','./image/squid_three.jpg'],
        link: '3',
        title: '和风深海鱿鱼籽意面',
        subtitle: 'Squid roe pasta with seafood and shiitake sauce',
        money: '22.00',
        id: '20201023',
        specification: '100g',
        brand: '蓝色烟囱'
    },
    {
        img: ['./image/tomyamgong_one.jpg','./image/tomyamgong_two.jpg','./image/tomyamgong_three.jpg'],
        link: '4',
        title: '泰式冬阴功海鲜意面',
        subtitle: 'Thai tom yum kung pasta with seafood',
        money: '22.00',
        id: '20201023',
        specification: '100g',
        brand: '蓝色烟囱'
    },
    {
        img: ['./image/namyang_one.jpg','./image/namyang_two.jpg','./image/namyang_three.jpg'],
        link: '5',
        title: '南洋风味咖喱鸡肉意面',
        subtitle: 'Tropical coconut curry chicken pasta',
        money: '22.00',
        id: '20201023',
        specification: '100g',
        brand: '蓝色烟囱'
    },
    {
        img: ['./image/bacon_one.jpg','./image/bacon_two.jpg','./image/bacon_three.jpg'],
        link: '6',
        title: '经典白汁培根蘑菇意面',
        subtitle: 'Classical creamy bacon pasta',
        money: '22.00',
        id: '20201023',
        specification: '100g',
        brand: '蓝色烟囱'
    }
]
let link = getQueryVariable('id')

function render(){
    commodityList.forEach( (item,index) => {
        if(item.link == link){
            renderDom(item)
        }
    })
}

function renderDom(e){
    let swiperNode = ``
    if(e.img.length != 0){
        e.img.forEach( (item,index) => {
            swiperNode += `
                <div class="swiper-slide commodity_content_slide">
                    <img src="${item}">
                </div>
            `
        })
        $('.swiper-wrapper').html(swiperNode)
    }else{
        swiperNode += `
        <div class="swiper-slide commodity_content_slide">
            <img src="" alt="暂无图片">
        </div>
        `
        $('.swiper-wrapper').html(swiperNode)
    }
    let elementNode = `
        <p class="title">${e.title}</p>
        <p class="subtitle">${e.subtitle}</p>
        <div class="description">
            <p>编号： ${e.id}</p>
            <p>规格： ${e.specification}</p>
            <p>品牌： ${e.brand}</p>
        </div>
        <button class="btn">购买商品</button>
    `
    $('.info').html(elementNode)
}

render()
commoditySwiper()