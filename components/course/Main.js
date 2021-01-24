import React from 'react'
import styled from 'styled-components'
import {WiDaySunny} from 'react-icons/wi'
import {color,color2, maxWidth} from '../theme'



function Main() {
    console.log(maxWidth, " my max width");
    return (
        <Components>
            <div className="Header">
                <div className="container">
                      <div className="row">
                            <div className="col-md-2 col-sm-2">
                                <div className="imgPar"> <img src="/eng.png" />  </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="textPAr"> 
                                                                   
                                    <h4 className="title">IELTS 200</h4>
                                    <span className="desc">Get started in Spanish to learn the basics and introduce yourself. You’ll discover how to ask for recommendations about what to see and where to eat the best paella. And how to order it, of course.</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-3">
                                share
                            </div>
                      </div>
                </div>
            </div>
           <div className="container contentPAr">
                <div className="row">
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-2 col-sm-2">
                                <div className="Cards">
                                    <div className="number">1</div>     
                                    <div className="childPAr"><WiDaySunny /><span>Өдөр</span></div>
                                    <div className="textPAr"> 0 - 20</div>  
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-2">
                        AnotherContents
                    </div>
                </div>
           </div>
        </Components>
    )
}

export default Main

const Components = styled.div`
    .contentPAr{
        margin-top:30px;
        max-width:${maxWidth};
        .Cards{
            margin-bottom:15px;
            padding:8px 8px;
            background-color:white;
            border-radius:4px;
            border:1px solid rgba(0,0,0,0.2);
            position:relative;
            cursor:pointer;
            transition:all 0.3s ease;
            &:hover{
                box-shadow:1px 1px 10px -5px;
            }
            .number{
                font-weight:600;
                position:absolute;
                top:0;
                right:0;
                background-color:#f5f5f5;
                height:25px;
                width:25px;
                color:${color};
                display:flex;
                align-items:center;
                justify-content:center;
                border-radius:0px 3px 0px 3px;
                border:2px solid white;
            }
            .childPAr{
                padding:20px 0px;
                background-color: #f5f5f5;
                border-radius:3px;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                color:rgba(0,0,0,0.3);
                svg{
                    // margin-right:8px;
                    font-size:30px;
                }
                span{
                    font-size:13px;
                    font-weight:500;
                }
            }
            .textPAr{
                font-size:14px;
                text-align:center;
                font-weight:500;
                padding:10px;
            }
        }
    }

    .Header{
        padding:20px 0px;
        background-color:${color};
        color:white;
        .container{
            max-width:960px;
            .imgPar{
                img{
                    border-radius:8px;
                    border:1px solid white;
                    width:100%;
                }
            }
            .textPAr{
                .title{
                    font-weight:500;
                    color:white;
                }
                .desc{
                    
                }
            }
        }
       
    }
    
`


