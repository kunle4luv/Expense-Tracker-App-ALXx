import React, { useState } from 'react'
import styled from 'styled-components'
import avater from '../../img/avater.png'
import { menuItems } from '../../utils/menuItems'
import { logout } from '../../utils/Icons'

function Navigation({active, setActive}) {
    
  return (
    <NavStyled>
        <div className='User-con'>
            <img src={avater} alt=''/>
            <div>
                <h2>Ayokunle</h2>
                <p>Your Balance</p>
            </div>
        </div>
        <ul className='menu_items'>
            {menuItems.map((item) => {
                return <li 
                    key={item.id} 
                    onClick={() => setActive(item.id)}
                    className={active === item.id? 'active': ''}
                >
                    {item.icon}
                    <span>{item.title}</span>
                </li>
            })}
        </ul>
        <div className='botton-nav'>
            <li>
                {logout} Sign Out
            </li>
        </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    hight: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-raduis: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4rem;
    .User-con{
        height: 100px;
        dislay: flex;
        align-item: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #ffffff;
            padding: 0.2rem;
            box-shadow: 0px 1px 17px rgba (0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, 0.6);
        }
    }
    
    .menu_items{
        flex:  1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: 0.6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, 0.6);
            padding-left: 1rem;
            position: relative;
            i{
                transition: all .4s ease-in-out;
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1);
        i{
            color: rgba(34, 34, 96, 1);
        }
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        } 
    }
`;


export default Navigation