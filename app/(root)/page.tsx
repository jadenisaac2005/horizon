import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title="Welcome,"
          user={ loggedIn?.name || 'Guest'}
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