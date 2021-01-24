import React from 'react'
import styled from 'styled-components'
import {color,color2, maxWidth} from '../theme'

function ExactWords() {
    console.log(words, " word")
    return (
        <ItemComponents>
            <div className="Header">
                <div className="container">
                    <div className="headCont">
                        <div className="imgPar"> <img src="/eng.png" />  </div>
                        <h5 className="title">IELTS 200</h5>
                    </div>
                    <div className="c3"> share </div>
                </div>
            </div>
            <div className="WordsHead">
                <div  className="container">
                    <div className="head">
                        <div className="total">Нийт: 16 (level)</div>
                        <div className="day">DAY<span className="count">1</span></div>
                        <div className="next"></div>
                    </div>

                   
                </div>
            </div>
            <div className="wordsAll container">
                <div className="count">20 үг</div>

                <div className="wordsParr">
                    {words.map((el,i)=>{
                        return(
                            <div key={i} className="wordPArent">
                                <div className="eng">{el.field2}</div>
                                <div className="mn">{el.field3}</div>
                            </div>
                        )
                    })}

                   


                </div>
            </div>
           
        </ItemComponents>
    )
}

export default ExactWords

const ItemComponents = styled.div`
    
    .wordsAll{
        padding-bottom:80px;
        margin-top:10px;
        max-width:700px;
       .count{
           padding:10px 0px;
           font-size:15px;
           color:#5d5d5d;
       }
        .wordsParr{
            border-radius:6px;
            border:1px solid rgba(0,0,0,0.1);
            .wordPArent{
                display:flex;
                padding:10px 10px;
                border-bottom:1px solid rgba(0,0,0,0.1);
                // justify-content:space-between;
                font-size:16px;
                .eng{
                    width:20%;
                    font-weight:500;
                    color:#3E3E3E;
                }
                .mn{
                    margin-left:10px;
                    color:#3E3E3E;
                    width:80%;
                }
            }
        }
       
    }
    .WordsHead{
        padding:6px 0px;
        border-bottom:1px solid rgba(0,0,0,0.2);
        .container{
            max-width:${maxWidth};
            
            .head{
                display:flex;
                justify-content:space-between;
                font-size:15px;
               
                .total{
                    color:#2C3445;
                }
                .day{
                    color:#2C3445;
                    font-weight:500;
                    .count{
                        border-radius:50%;
                        padding:0px 6px;
                        border:1px solid rgba(0,0,0,0.2);
                        margin-left:10px;
                        color:black;
                    }
                }
            }
        }
    }
    .Header{
        padding:15px 0px;
        background-color:${color};
        color:white;
        .container{
            max-width:960px;
            display:flex;
            justify-content:space-between;
            .headCont{
                display:flex;
                align-items:center;
                .imgPar{
                    width:35px;
                    img{
                        border-radius:4px;
                        border:1px solid white;
                        width:100%;
                    }
                }
                .title{
                    margin-left:15px;
                    font-weight:500;
                    color:white;
                }
            }
        }
    }
    
`

const words = [
    {"field1":"3526","field2":"hound","field3":"v. хоргоох"}
    ,
    {"field1":"3527","field2":"prosecute","field3":"v. 1. хөтлөх, явуулах, эрхлэх, авч явуулах, биелүүлэх 2. үргэлжлүүлэх 3. шүүхийн хурлын дагуу мөрдөх 4. яллагчаар үг хэлэх"}
    ,
    {"field1":"3528","field2":"assured","field3":"adj. итгэлтэй, эргэлзээгүй, өөртөө хэт итгэсэн, бардам, сэхүүн, баталгаатай, даатгуулсан, даатгалын компани"}
    ,
    {"field1":"3529","field2":"creation","field3":"n. бий болгох бүтээх, бүтээх, бүтээн байгуулалт, орчлон ертөнц, хэргэм цол олгох, загвар зохиогчийн бүтээл"}
    ,
    {"field1":"3530","field2":"reed","field3":"n. зэгс шагшуурга, зуултуур, зэгс, хулс, том иштэй ургамал, цоор, бишгүүр"}
    ,
    {"field1":"3531","field2":"displace","field3":"v. 1. шилжүүлэх, байрыг нь солих, зөөх, хөдөлгөх, орлох, холих, тараах, хасах, огцруулах 2. шахан гаргах 3. албан тушаалаас буулгах, халах, солих 4. усам сантай байх. ус хадгалах чадвартай байх"}
    ,
    {"field1":"3532","field2":"irrespective","field3":"adj. ямар нэг зүйлд хамаарахгүй, харьцангуй биш"}
    ,
    {"field1":"3533","field2":"wield","field3":"v. эзэмших, эдлэх, ямар нэг зүйлийг ажиллуулж чадах, мэдэх, эзлэх, өөрийн мэдэлд байлгах"}
    ,
    {"field1":"3534","field2":"whirl","field3":"v. эргэлдүүлэх, эргүүлэх, эргэлдэх, авч явах, хар хурдаараа давхих, үймээн сандралд автах, толгой эргэх"}
    ,
    {"field1":"3535","field2":"waist","field3":"n. 1. бэлхүүс 2. цээживч 3. нарийн хэсэг 4. дунд хэсэг"}
]