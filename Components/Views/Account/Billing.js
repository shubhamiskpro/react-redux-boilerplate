import React from 'react'

import env from "./../../Config/Env"
import MainPageLayout from './../Layouts/MainPageLayout'

import AccountNav from './../Includes/AccountNav'
import AccountSideNav from './../Includes/AccountSideNav'

class Billing extends React.Component {
	constructor() {
		super();
	}

    render() {
        return (
            <MainPageLayout> 
            	<main>
                    <div className="inner-contant">
                        <div className="container">
                            <AccountNav active = { "account" } />
                            <div className="accounts-tab-content table-section no-data">
                                <h2>Account</h2>
                                <div className="colmn">
                                    <AccountSideNav active = { "billing"} />
                                    <div className="colmn-form">
                                        <h2>Account Billing Page</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </MainPageLayout>
        )
    }
}

export default Billing