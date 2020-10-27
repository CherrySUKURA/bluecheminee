$('.headers').load('./header.html')
$('.footer').load('./footer.html')

//获取url的参数
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
//瀑布流，并且给外部块一个高度
function waterfallFlow(page,item){
    let pageWidth = page.width()
    let itemWidth = item.outerWidth(true)
    let column = parseInt(pageWidth/itemWidth)
    let heightArr=[]
    $.each(item, (index,value) => {
        let boxHeight = $(value).outerHeight(true);
        if(index < column){
            heightArr[index] = boxHeight
        }else{
            let minBoxHeight = Math.min.apply(null,heightArr);
            let minBoxIndex = $.inArray(minBoxHeight,heightArr)
            $(value).css({
                'position':'absolute',
                'top':minBoxHeight+'px',
                'left':minBoxIndex*itemWidth+'px'
            })
            heightArr[minBoxIndex] += boxHeight
        }
    })
    let maxBoxHeight = Math.max.apply(null,heightArr)
    page.css({
        'height': maxBoxHeight + 'px'
    })
}