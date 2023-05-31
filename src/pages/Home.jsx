import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
import ContactUsLink from '../components/Contactus'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title='Fresh' fetchURL={requests.requestUpcoming} />
        <Row rowID='2' title='Hot' fetchURL={requests.requestPopular} />
        <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowID='4' title='Editors` choice' fetchURL={requests.requestTopRated} />
        <ContactUsLink />
    </>
  )
}

export default Home