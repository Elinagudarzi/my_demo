import React from 'react'
import ax1 from '../images/ax1.png'
import PhotoshopFrame from '../images/Photoshop-Frame.png'
import ExcelFrame from '../images/Excel-Frame.png';
import teacher from '../images/teacher.png';
import academy from '../images/academy-amaj.png';
import Header from './header';
import './productpage.css';

class ProductPages extends React.Component {
   

    state = {
        products: [ 
            {
                "_id": "1",
                "title": " آموزش اتوکد پیشرفته ",
                "tags" : "محبوب ترین" ,
                "src": [ax1],
                "description": "اتوکد ابزاری برای رسم طرح ها و نقشه های صنعتی،پروژه های مهندسی و ساخت و ساز می باشد که ",
                "discount ": "3.500.000",
                "price": "2.500.000",
                "colors": ["red", "black", "crismon", "teal"],
                "count": 1,
                "off": '25%',
                "rate": 3,
                "category": "اتوکد"
            },
            {
                "_id": "2",
                "title": " آموزش اتوکد پیشرفته ",
                "src": [ExcelFrame],
                "description": "اتوکد ابزاری برای رسم طرح ها و نقشه های صنعتی،پروژه های مهندسی و ساخت و ساز می باشد که ",
                "discount ": "3.500.000",
                "price": "2.500.000",
                "colors": ["red", "black", "crismon", "teal"],
                "count": 1,
                "off": '25%',
                "tags" : "پرفروش ترین" ,
                "rate": 3,
                "category": "اتوکد"
            },
            {
                "_id": "3",
                "title": " آموزش اتوکد پیشرفته ",
                "src": [PhotoshopFrame],
                "description": "اتوکد ابزاری برای رسم طرح ها و نقشه های صنعتی،پروژه های مهندسی و ساخت و ساز می باشد که ",
                "discount ": "3.500.000",
                "tags" : "پرفروش ترین" ,
                "price": "2.500.000",
                "colors": ["red", "black", "crismon", "teal"],
                "count": 1,
                "off": '25%',
                "rate": 3,
                "category": "اتوکد"
            },
            {
                "_id": "4",
                "title": " آموزش اتوکد پیشرفته ",
                "src": [ax1],
                "tags" : "رایگان" ,
                "description": "اتوکد ابزاری برای رسم طرح ها و نقشه های صنعتی،پروژه های مهندسی و ساخت و ساز می باشد که ",
                "discount ": "3.500.000",
                "price": "2.500.000",
                "colors": ["red", "black", "crismon", "teal"],
                "count": 1,
                "off": '25%',
                "rate": 3,
                "category": "اتوکد"
            },
            {
                "_id": "5",
                "title": " آموزش اتوکد پیشرفته ",
                "src": [ExcelFrame],
                "tags" : "پرفروش ترین" ,
                "description": "اتوکد ابزاری برای رسم طرح ها و نقشه های صنعتی،پروژه های مهندسی و ساخت و ساز می باشد که ",
                "discount ": "3.500.000",
                "price": "2.500.000",
                "colors": ["red", "black", "crismon", "teal"],
                "count": 1,
                "off": '25%',
                "rate": 3,
                "category": "اتوکد"
            },
            {
                "_id": "6",
                "title": " آموزش اتوکد پیشرفته ",
                "src": [PhotoshopFrame],
                "tags" : "محبوب ترین " ,
                "description": "اتوکد ابزاری برای رسم طرح ها و نقشه های صنعتی،پروژه های مهندسی و ساخت و ساز می باشد که ",
                "discount ": "3.500.000",
                "price": "2.500.000",
                "colors": ["red", "black", "crismon", "teal"],
                "count": 1,
                "off": '25%',
                "rate": 3,
                "category": "اتوکد"
            },
            {
                "_id": "7",
                "title": " آموزش اتوکد پیشرفته ",
                "src": [ax1],
                "tags" : "رایگان" ,
                "description": "اتوکد ابزاری برای رسم طرح ها و نقشه های صنعتی،پروژه های مهندسی و ساخت و ساز می باشد که ",
                "discount ": "3.500.000",
                "price": "2.500.000",
                "colors": ["red", "black", "crismon", "teal"],
                "count": 1,
                "off": '25%',
                "rate": 3,
                "category": "اتوکد"
            },
            {
                "_id": "8",
                "title": " آموزش اتوکد پیشرفته ",
                "src": [ExcelFrame],
                "tags" : "پرفروش ترین" ,
                "description": "اتوکد ابزاری برای رسم طرح ها و نقشه های صنعتی،پروژه های مهندسی و ساخت و ساز می باشد که ",
                "discount ": "3.500.000",
                "price": "2.500.000",
                "colors": ["red", "black", "crismon", "teal"],
                "count": 1,
                "off": '25%',
                "rate": 3,
                "category": "اتوکد"
            },
            {
                "_id": "9",
                "title": " آموزش اتوکد پیشرفته ",
                "src": [PhotoshopFrame],
                "tags" : "رایگان" ,
                "description": "اتوکد ابزاری برای رسم طرح ها و نقشه های صنعتی،پروژه های مهندسی و ساخت و ساز می باشد که ",
                "discount ": "3.500.000",
                "price": "2.500.000",
                "colors": ["red", "black", "crismon", "teal"],
                "count": 1,
                "off": '25%',
                "rate": 3,
                "category": "اتوکد"
            }
        ],
        index: 0
    };

    myRef = React.createRef();

    handleTab = index => {
        this.setState({ index: index })
        const images = this.myRef.current.children;
        for (let i = 0; i < images.length; i++) {
            images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    }



    render() {
        const { products, index } = this.state;
        const { comment } = this.state;
        const { setComment } = this.setState;
        
        const onChangeHandler = (e) => {
            setComment(e.target.value);
        };

        return (
            <>
            <Header/>
            <hr style={{marginTop:'50px'}}/>
             <div className='productDetails'>
                
                
                {
                    products.map(item => (
                        
                        
                            <div className="details" key={item._id}>
                                <div className="big-image">
                                   <img src={item.src[index]} alt="" />
                                </div>
                            <div className="box"  style={{textAlign:'right'}}>
                                <div className="row" >
                                    <div className='"tags"'>
                                        <li style={{textAlign:"left",fontSize:"medium", fontWeight: "bold"}}>{item.tags}</li>
                                    </div>
                                    
                                    <h2 >{item.title}</h2>
                                   
                                </div>
                                <div className="desc"  style={{textAlign:'right'}}>
                                    <a href='/description'>{item.description}</a>
                                </div>
                                <br/>
                                <div className='label' style={{textAlign:'right'}}>
                                    <a href='/teacher' >
                                        <img src={[teacher]} alt='teacher' /> آقای نصیری 
                                    </a>
                                       <h1 style={{letterSpacing:'3px'}}></h1>
                                    <a href='/academy'>
                                        <img src={[academy]} alt='academy' /> آکادمی آماج
                                    </a>
                                </div>
                                <hr/>
                                <p>{item.content}</p>
                                <div>
                                <span style={{ color: "black" , textAlign:'left'}}>{item.price} ریال
                                 <p className='discount'> {item['discount ']} ریال</p>
                                </span>
                                <button className='cart' ><a href='/cart'>مشاهده دوره </a></button>
                                </div> 
                            </div>

                        </div>
                        
                      
                    ))
                }
                
                
            </div>
            
            <hr/>
            <div >
            <div >{comment}</div>
            <h3 style={{ marginTop:"50px", marginLeft:'470px',width:'40%'}}>نظرات کاربران</h3>
            <textarea
                style={{  marginTop:"10px",height: "200px", width: "1100px", borderRadius: "7px"}}
                value={comment}
                onChange={onChangeHandler} />
            <br/>
            <button className='button' style={{ backgroundColor:"#999", borderRadius: "5px", border: "5px", marginTop: "10px" , marginBottom:'150px'}}><a href='/comment'>ارسال نظرات</a></button>
            </div>
       </> );
    }
}

export default ProductPages;