import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName:'Jaden', lastName:'Isaac', email:'jadenisaac10@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title="Welcome,"
          user={ loggedIn?.firstName || 'Guest'}
          subtext="Acces and manage your account and transactions effeciently."
          />

          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={2596.50}
          />
        </header>
        RECENT TRANSACTIONS 
      </div>
      <RightSidebar
        user = {loggedIn}
        transactions = {[]}
        banks = {[{},{}]}
      />
    </section>
  )
}

export default Home