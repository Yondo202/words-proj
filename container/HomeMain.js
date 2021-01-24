import React from 'react'
import styled from 'styled-components'
import {maxWidth} from '../components/theme'
import { Select } from 'antd';
import {MdFormatListNumbered} from 'react-icons/md'
import 'antd/dist/antd.css';

function HomeMain() {

const { Option } = Select;

const  handleChange=(value)=> {
    console.log(`selected ${value}`);
}

    return (
        <HomeComp style={{maxWidth:`960px`}} className="container another">
            <div className="row">
                <div className="col-md-3">
                    <div className="catiforyPar">
                        <span className="title">Сураж байгаа улс...</span>
                        <div className="selectPar">
                            <Select defaultValue="English" style={{ width: `90%` }} onChange={handleChange}>
                                <Option value="English"><img src="/usa.svg" /> English</Option>
                                <Option value="Japan"> Japan</Option>
                                <Option value="Korea"> Korea</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="contrysPar">
                        <div className="title">Categories</div>
                        <div className="itemPar">
                            <div className="items"><img src="/china.svg" />Хятад</div>
                            <div className="items"><img src="/korea.svg" />Coming soon...</div>
                            <div className="items"><img src="/japan.svg" />Coming soon...</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div  className="col-md-4">
                            <div className="CardPar">
                                <div className="imgPar">
                                 <img className='image' src="/eng.png" />
                                 <span className="countryImg">  <img src="/usa.svg" /></span>
                                </div>
                                <div className="title">IELTS words 1</div>
                                <div className="desc">
                                    {/* <MdFormatListNumbered /> */}
                                    <span className="first">Үгийн тоо: </span>
                                    <span className="second">2000</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </HomeComp>
    )
}

export default HomeMain

const HomeComp = styled.div`
    margin-top:30px;
    max-width: ${maxWidth};
    .CardPar{
        margin-bottom:20px;
        border-radius:5px;
        background-color:white;
        padding:10px 10px;
        border:1px solid rgba(0,0,0,0.2);
        .imgPar{
            position: relative;
            img{
                width:100%;
             }
        }
        .countryImg{
            position:absolute;
            bottom:0;
            left:0;
            background-color:white;
            padding:2px 5px;
            border-radius:0px 4px 0px 0px;
            img{
                width:20px;
                height:20px;
            }
        }
      
        .title{
            cursor:pointer;
            margin:10px 0px;
            font-size:18px;
            font-weight:500;
        }
        .desc{
            display:flex;
            align-items:center;
            color:#595959;
            svg{
                font-size:16px;
                margin-right:10px;
            }
            .first{
                font-size:14px;
            }
            .second{
                margin-left:8px;
                font-weight:500;
            }
        }
    }
    .catiforyPar{
        font-weight:500;
        .title{
            font-weight:500;
        }
        .selectPar{
            margin-top:10px;
            .ant-select{
                border-radius:8px;
                .ant-select-selection-item{
                    font-weight:500;
                    img{
                        margin-right:10px;
                        width:15px !important;
                        height:15px !important;
                    }
                }
            }
            
        }
        img{
            margin-right:10px;
            width:20px;
            height:20px;
        }
    }
    .contrysPar{
        width:90%;
        margin-top:20px;
        background-color:white;
        .title{
            margin-bottom:10px;
            font-size:22px;
            color:#666666;
            font-weight:500;
        }
        .itemPar{
            background-color:white;
            border:1px solid rgba(0,0,0,0.2);
            border-radius:7px;
            color:#595959;
            .items{
                font-size:15px;
                font-weight:500;
                padding:10px 0px;
                border-bottom:1px solid rgba(0,0,0,0.1);
                img{
                    width:20px;
                    height:20px;
                    margin-right:10px;
                    margin-left:10px;
                }
            }
        }
    }
   
`
