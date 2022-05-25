import React from 'react'

const StockRows = ({ delivery }) => {

    return (
        <div>
            {delivery.productStockLevels.map((level) => {
                return (
                    <>
                        <div className='show-stock'>
                            <p>Lagerplats:{level.locationName}</p>
                            <p>Antal:{level.quantity}</p>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default StockRows