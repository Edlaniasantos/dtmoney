import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTrasactionModal';
import { TransactionsProvider } from './hooks/useTransactions';
import { GlobalStyle } from "./styles/global";


Modal.setAppElement('#root');

export function App() {
  
    const [isNewTransactionModalOpen , setIsNewTransactionModalOpen]=useState(false);
    

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }
    function hadleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

  return (
    <TransactionsProvider>
    <Header onOpenNewTrasactionModal={handleOpenNewTransactionModal}/>

    <Dashboard/>

    <NewTransactionModal
    isOpen = {isNewTransactionModalOpen} 
    onRequestClose= { hadleCloseNewTransactionModal }
    />


    <GlobalStyle/>
    </TransactionsProvider>
  );
}


