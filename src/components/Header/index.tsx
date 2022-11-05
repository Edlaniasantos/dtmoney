import { useState } from 'react'
import  Modal from 'react-modal';
import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface Headerprops{
    onOpenNewTrasactionModal:() => void;
}
export function Header({ onOpenNewTrasactionModal }:Headerprops){
    return (
    <Container>
        <Content>
    <img src= {logoImg} alt="dt money" />
    <button type="button" onClick={ onOpenNewTrasactionModal }>
        Nova transação
    </button>
    
    </Content>
    </Container>
    )
}