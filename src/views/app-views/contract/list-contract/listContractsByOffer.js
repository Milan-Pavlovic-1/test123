import React from 'react'
import ContractList from './Table'

function listContractsByOffer(props) {
  return (
    <div>
        <div>
            <h2>Contracts by Offer</h2>
        </div>
      <div className="py-3">
        <ContractList locationOfView="byOffer" offerId={props.match.params.key} localization={true} />
      </div>
    </div>
  )
}

export default listContractsByOffer