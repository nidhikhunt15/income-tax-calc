import React, { useState } from 'react'

var converter = require('number-to-words');


const Calculate = () => {

  const newTaxSlab = [
    {
      from: 0,
      to: 300000,
      percentage: 0
    },

    {
      from: 300000,
      to: 600000,
      percentage: 5
    },

    {
      from: 600000,
      to: 900000,
      percentage: 10
    },

    {
      from: 900000,
      to: 1200000,
      percentage: 15
    },

    {
      from: 1200000,
      to: 1500000,
      percentage: 20
    },

    {
      from: 1500000,
      to: 9999999999,
      percentage: 30
    },
  ]


  const oldTaxSlab = [
    {
      from: 0,
      to: 250000,
      percentage: 0
    },

    {
      from: 250000,
      to: 500000,
      percentage: 5
    },

    {
      from: 500000,
      to: 1000000,
      percentage: 20
    },

    {
      from: 1000000,
      to: 99999999999,
      percentage: 30
    },

  ]





  const [newTaxSalarySlab, setNewTaxSalarySlab] = useState([])
  const [income, setIncome] = useState("")
  const [deductions, setDeductions] = useState("")
  const [taxIncome, setTaxIncome] = useState(income)
  const [taxDeductions, setTaxDeductions] = useState(deductions)
  const [check, setCheck] = useState(false)
  const [newCheck, setNewCheck] = useState(false)
  const [oldCheck, SetOldCheck] = useState(false)



  const filtered = newTaxSlab.filter(tax => {
    return tax.to === { income }

  })

  const handleCal = (e) => {
    e.preventDefault();
    setCheck(true);
  }

  const handleChange = (e) => {
    setIncome(e.target.value)
    setCheck(false)
    setNewCheck(false)
    SetOldCheck(false)
  }
  const handleNewChange = (e) => {
    setDeductions(e.target.value)
    setCheck(false)
    setNewCheck(false)
    SetOldCheck(false)
  }

  const handleNewCal = () => {
    setTaxIncome(income);
    // setIncome(converter.toWords(income))
    const newData = newTaxSlab.filter(newTax => { return newTax.from < income })
    newData[newData.length - 1].to = income;
    setNewTaxSalarySlab(newData);
    setNewCheck(true);
    SetOldCheck(false);
    // setIncome("");
    // setDeductions("")
  }

  let taxDedIncome = income - deductions;

  const handleOldCal = () => {
    setTaxIncome(income);
    setTaxDeductions(deductions)
    const oldData = oldTaxSlab.filter(oldTax => { return oldTax.from < taxDedIncome })
    oldData[oldData.length - 1].to = taxDedIncome;
    setNewTaxSalarySlab(oldData);
    SetOldCheck(true);
    setNewCheck(false);
    // setDeductions("");
    // setIncome("")

  }

  const calcPer = () => {
    let total = 0;
    newTaxSalarySlab.map((tax) => {
      total += (((tax.to - tax.from) * tax.percentage) / 100)
    })
    return total;
  }

  return (

    <div className='container  d-flex justify-content-center my-5' >
      <div className="card p-5" style={{ width: "70vh", backgroundColor: "bisque" }}>

        <div className='text-center'>

          <h3>Income Tax Calculator</h3>
          <h5 className='text-muted'>According to latest Budget 2023</h5>
        </div>


        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"><b>Income</b> </label>
            <input type="text" placeholder='eg,700000' className="form-control" value={income} id="income" name='income' aria-describedby="emailHelp" onChange={handleChange} required />
            <div id="emailHelp" className="form-text" onChange={handleChange} >{income === "" ? "" : converter.toWords(income)}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label" ><b>Deductions </b> </label>
            <input type="text" className="form-control" placeholder='eg,150000' value={deductions} id="deductions" name='deductions' onChange={handleNewChange} required />
            <div id="emailHelp" className="form-text" onChange={handleNewChange} >{deductions === "" ? "" : converter.toWords(deductions)}</div>
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Apply standard deduction (only salaried income) </label>
          </div>
          <div className="d-flex justify-content-center my-3">

            <button type="submit" className="btn btn-primary " disabled={income === ""} onClick={handleCal}>Calculate</button> <br /> <br />
          </div>

        </form>


        {check && <div>
          <div className='d-flex justify-content-center'>
            <button type='submit' className='btn btn-outline-danger mx-4' onClick={handleOldCal} >Old Tax</button>
            <button type='submit' className='btn btn-outline-success mx-4' onClick={handleNewCal} >New Tax</button>

          </div>


        </div>
        }
        {newCheck && <div>

          <h5 className='text-center my-3'>Tax breakdown</h5>
          <p className='text-end'><b> Income</b> ₹{taxIncome} </p>
          <p className='text-end'><b>Taxable Income </b> ₹{taxIncome}</p>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Tax Slab</th>
                <th scope="col">Tax Rate</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            {newTaxSalarySlab.map((tax, index) => {
              return <tbody key={index}>
                <tr>
                  <td>₹{tax.from} to ₹{tax.to}</td>
                  <td>{tax.percentage}%</td>
                  <td>₹{(((tax.to - tax.from) * tax.percentage) / 100)}</td>
                </tr>
              </tbody>
            })
            }
          </table>
          {/* {newTaxSalarySlab.map(function (index, tax) {
            return <div>{calcPer(index)}</div>
          })} */}

          <div className='d-flex justify-content-end'> <b> Payable Tax</b>  ₹{calcPer()}</div>


        </div>
        }


        {oldCheck && <div>

          <h5 className='text-center my-3'>Tax breakdown</h5>
          <p className='text-end'><b> Income</b> ₹{taxIncome} </p>
          <p className='text-end'> <b>Other Deductions</b> -₹{taxDeductions} </p>
          <p className='text-end'><b>Taxable Income </b> ₹{(taxIncome - taxDeductions)}</p>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Tax Slab</th>
                <th scope="col">Tax Rate</th>
                <th scope="col">Total</th>

              </tr>
            </thead>
            {newTaxSalarySlab.map((tax, index) => {
              return <tbody key={index}>
                <tr>
                  <td>₹{tax.from} to ₹{tax.to}</td>
                  <td>{tax.percentage}%</td>
                  <td>₹{(((tax.to - tax.from) * tax.percentage) / 100)}</td>
                </tr>
              </tbody>
            })
            }
          </table>
          {/* {newTaxSalarySlab.map(function (index, tax) {
            return <div> Payable Tax ₹{calcPer(index)}</div>
            
          })} */}

          <div className='d-flex justify-content-end'> <b> Payable Tax</b> ₹{calcPer()}</div>

        </div>
        }

      </div>
    </div>
  )
}

export default Calculate
