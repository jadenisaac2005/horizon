import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName:'Jaden'}
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
        </header>'
      </div>
    </section>
  )
}

export default Home