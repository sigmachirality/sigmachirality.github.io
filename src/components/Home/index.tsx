import React, { ReactElement } from 'react'
import s from 'styled-components'

const HomeWrapper = s.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4vw;
    align-items: center;
    position: absolute;
    top: 1vw;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`

const Coral = s.span`
    color: lightcoral;
`

const HomeName = s.h1`
    display: inline-block;
    top: 20vw;
    left: 13vw;
    text-align: right;
    font-weight: 450;
    font-size: 10vw;
    position: fixed;
    animation-name: fadein;
    animation-duration: 2s;
`

const Home = () : ReactElement => (
    <HomeWrapper>
        <div>
        <HomeName><Coral>Daniel</Coral> τao</HomeName>
        </div>
        <div>Wow</div>
    </HomeWrapper>
)

export default Home
