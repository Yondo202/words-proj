import React from 'react'
import Link from 'next/link'
import { color, fontFamily,maxWidth} from '../components/theme'
import styled from 'styled-components'
import {CgProfile} from 'react-icons/cg'

 
function Menu() {
    return (
        <MenuComp >
            <div className="container headerPar">
                <Link href="/">
                <div className="logoPar">ODOOshaa.mn</div>
                </Link>
                
                <div className="menuPar">
                    <div className="menus">
                        <Link href="/">
                        <span>Нүүр</span>
                        </Link>
                        
                        <span>Мэдээлэл</span>
                        <Link href="/course">
                            <span>Сургалт</span>
                        </Link>
                       
                    </div>
                    <div className="svgPar">
                     <CgProfile />
                    </div>
                    
                </div>
            </div>
        </MenuComp>
    )
}

export default Menu

const MenuComp = styled.div`
    background-color:${color};
    // background-color:red;
    font-family:${fontFamily};
    .headerPar{
        height:56px;
        max-width: ${maxWidth};
        display:flex;
        align-items:center;
        justify-content:space-between;
        .logoPar{
            cursor:pointer;
            color:#FFC000;
            font-weight:900;
            font-size:24px;
        }
        .menuPar{
            display:flex;
            color:white;
            width:40%;
            font-size:17px;
            aling-items:center;
            justify-content:space-between;
            .menus{
                span{
                    cursor:pointer;
                    font-weight:600;
                    margin-left:15px;
                }
            }

            .svgPar{
                svg{
                    font-size:25px;
                    color:#FFC000;
                }
            }
        }
    }
   
`