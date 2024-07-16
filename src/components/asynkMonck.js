const products = [
{
id :"1" ,
name: "samsung s23 ultra",
price: "1.965.0",
category: "celular",
img: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrFGwp3aJVm9S4v27.t9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2Q1NzE2ZTUwYzY0YjU3NDI4ODE2NTUwYWM0ZThjOWRiBGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsamsung%2Bs23%2Bultra%26fr%3Dmcafee_e-26860_3PC-ls%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D1&w=1080&h=1080&imgurl=media.pakprice.pk%2F288%2FotRdSrGmyr0jk9jpGFsDSevTiJBtoaK81UGAljcV.jpeg&rurl=https%3A%2F%2Fwww.pakprice.pk%2Fmobile%2Fsamsung-galaxy-s23-ultra&size=455.5KB&p=samsung+s23+ultra&oid=d5716e50c64b57428816550ac4e8c9db&fr2=piv-web&fr=mcafee_e-26860_3PC-ls&tt=Samsung+Galaxy+S23+Ultra+Price+in+Pakistan+-+July+2024&b=0&ni=21&no=1&ts=&tab=organic&sigr=jvCHFCSy5Gnw&sigb=MZbIvwdaKVO8&sigi=47eF9VjuAUtd&sigt=Hlj9eRtx6GBU&.crumb=BV1f2A8ls2y&fr=mcafee_e-26860_3PC-ls&fr2=piv-web",
stock:"30",
decription: ""
},
{
    id :"2" ,
    name: "Ipad pro",
    price: "2.148.0",
    category: "tablet",
    img: "https://tse3.mm.bing.net/th?id=OIP.KwwOFORQ7GHBHw8l5gF_iQAAAA&pid=Api&P=0&h=180",
    stock:"10",
    decription: ""
},
{
    id :"3" ,
    name: "un43t5300agczb smart tv pantalla 43",
    price: "600.000",
    category: "tv",
    img: "https://tse3.mm.bing.net/th?id=OIP.9AtltnXlfT-cGRTrKC8ZhAHaEj&pid=Api&P=0&w=300&h=300",
    stock:"15",
    decription: ""
},
{
    id :"4" ,
    name: "iphone 14 pro max",
    price: "2.038.00",
    category: "celular",
    img: "https://tse3.mm.bing.net/th?id=OIP.KyrBu1s2mkrqDl3Bdo8QtAHaHa&pid=Api&P=0&h=180",
    stock:"20",
    decription: ""
}
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2500)
    })
}