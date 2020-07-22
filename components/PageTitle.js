import React from 'react'
import Head from 'next/head'

const PageTtile = ({ title }) => {
    return(
        <Head>
        <title>{title} - PalpiteBox</title>
        </Head>
    )
}
export default PageTtile