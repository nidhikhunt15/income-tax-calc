import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


const Questions = () => {
    return (
        <div className='container' style={{width:"74vh"}}>
            <div>
                <h3 className='text-center my-5'>Frequently asked questions</h3>
            </div>

            <Accordion >
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                        How to calculate income tax?
                    </Accordion.Header>
                    <Accordion.Body>
                        To calculate income tax, enter your in-hand income in the "Income" field, and enter deductions in "Deductions" field. Then, press the "Calculate" button to view the amount of tax owed under both tax regimes. Choose the option with the lower tax amount. For a detailed breakdown of the calculation, click on the "Show Breakdown" button.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Accordion >
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>
                        How to calculate income tax manually on salary with example?
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>The first 3 lakhs are tax-free.</li>
                            <li>The next 3 lakhs (6 - 3 = 3 lakhs), are taxed at 5%, resulting in a tax of 15,000 (3 lakhs x 5%).</li>
                            <li>The next 3 lakhs (9 - 6 = 3 lakhs) are taxed at 10%, which results in a tax of 30,000 (3 lakhs x 10%). </li>
                            <li>Lastly, the last 1 lakh (10 - 9 = 1 lakh) is taxed at 15%, which results in a tax of 15,000 (1 lakh x 15%).
                                In total, the tax amount is 60,000 (15,000 + 30,000 + 15,000).</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Accordion >
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>
                        What are the tax slabs in new tax regime?
                    </Accordion.Header>
                    <Accordion.Body>
                        The new tax regime had the following tax slabs:
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Tax Slab</th>
                                    <th scope="col">Tax Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0 to 3 lakh</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>3 to 6 lakh</td>
                                    <td>5%</td>
                                </tr>
                                <tr>
                                    <td >6 to 9 lakh</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td >9 to 12 lakh</td>
                                    <td>15%</td>
                                </tr>
                                <tr>
                                    <td >12 to 15 lakh</td>
                                    <td>20%</td>
                                </tr>
                                <tr>
                                    <td >above 15 lakh</td>
                                    <td>30%</td>
                                </tr>
                            </tbody>
                        </table>
                        Under the new tax regime, a tax rebate of up to 7 lakh is available. This means that if the taxable income is 7 lakh the payable tax would be zero.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion >
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>
                        What are the tax slabs in old tax regime?
                    </Accordion.Header>

                    <Accordion.Body>
                        The old tax regime had the following tax slabs:


                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Tax Slab</th>
                                    <th scope="col">Tax Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0 to 2.5 lakh</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>2.5 to 5 lakh</td>
                                    <td>5%</td>
                                </tr>
                                <tr>
                                    <td >5 to 10 lakh</td>
                                    <td>20%</td>
                                </tr>
                                <tr>
                                    <td >Above 10 lakh</td>
                                    <td>30%</td>
                                </tr>
                            </tbody>
                        </table>
                        Under the old tax regime, a tax rebate of up to 5 lakh is available. This means that if the taxable income is 5 lakh the payable tax would be zero.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Accordion >
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>

                        What is the difference between old and new tax regime?
                    </Accordion.Header>
                    <Accordion.Body>

                        The two regimes have different tax slabs, which are presented below: <br />
                        Old tax regime:

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Tax Slab</th>
                                    <th scope="col">Tax Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0 to 2.5 lakh</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>2.5 to 5 lakh</td>
                                    <td>5%</td>
                                </tr>
                                <tr>
                                    <td >5 to 10 lakh</td>
                                    <td>20%</td>
                                </tr>
                                <tr>
                                    <td >Above 10 lakh</td>
                                    <td>30%</td>
                                </tr>
                            </tbody>
                        </table>
                        New tax regime:
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Tax Slab</th>
                                    <th scope="col">Tax Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0 to 2.5 lakh</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>2.5 to 5 lakh</td>
                                    <td>5%</td>
                                </tr>
                                <tr>
                                    <td >5 to 10 lakh</td>
                                    <td>20%</td>
                                </tr>
                                <tr>
                                    <td >Above 10 lakh</td>
                                    <td>30%</td>
                                </tr>
                            </tbody>
                        </table>
                        Additionally, the old regime offered a tax rebate of up to 5 lakhs while the new regime offers a tax rebate of up to 7 lakhs. Standard deduction of 50,000 is available with no income requirement in both regimes.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion >
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>
                        Is 80C deduction available in new tax regime?
                    </Accordion.Header>
                    <Accordion.Body>
                        No, Under the new tax regime, the 1.5 lakh tax exemption under section 80C of the Income Tax Act of India is not valid. This exemption is only offered in the old tax regime.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Accordion >
                <Accordion.Item eventKey='5'>
                    <Accordion.Header>
                        Which deductions are allowed in new tax regime?
                    </Accordion.Header>
                    <Accordion.Body>
                        In the new tax regime, only standard deduction of Rs. 50,000 is applicable for salaried individuals. No other deductions such are offered under the new regime. For non-salaried income, such as business income or rental income, there are no deductions offered under the new tax regime. It is advisable to consult a Chartered Accountant for more personalized tax planning and calculation.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion >
                <Accordion.Item eventKey='6'>
                    <Accordion.Header>
                        Is 80C limit increased in new bugget annoucement?
                    </Accordion.Header>
                    <Accordion.Body>
                        No, the 1.5 lakh limit exemption under 80C of Income Tax act has not been increased in the 2023 budget announcement.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion >
                <Accordion.Item eventKey='7'>
                    <Accordion.Header>

                        Is standard deduction available in new tax regime?
                    </Accordion.Header>
                    <Accordion.Body>
                        Yes, standard deduction is available in the new tax regime without any income requirement.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion >
                <Accordion.Item eventKey='8'>
                    <Accordion.Header>
                        Which tax regime is beneficial for me?
                    </Accordion.Header>
                    <Accordion.Body>
                        Input income in "Income" field and deductions in "Deductions" field. Press "Calculate" button. If "Old tax regime" appears green, the old regime is more beneficial. If "New tax regime" appears green, the new regime is more favorable. It's recommended to consult a CA before filing your income tax return.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion >
                <Accordion.Item eventKey='9'>
                    <Accordion.Header>
                        Which tax regime is beneficial for higher salary?
                    </Accordion.Header>
                    <Accordion.Body>
                        Income exceeding 15.5 lakhs generally favors the new tax regime. If income is below 15.5 lakhs, benefits depend on deductions. The higher the deductions, the more likely the old regime is favorable. Use the calculator before making a decision. It's recommended to consult a CA before filing your income tax return.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Accordion >
                <Accordion.Item eventKey='10'>
                    <Accordion.Header>
                        What deductions are available in old tax regime?
                    </Accordion.Header>
                    <Accordion.Body>
                        The following are the popular deductions among the tax payers:
                        <ul>
                            <li>Section 80C: eligible for tax benefits by investing in life insurance, ELSS funds, PPF, etc.</li>
                            <li>Section 80D: eligible for tax benefits by investing in National Pension Scheme (NPS).</li>
                            <li>Section 80CCD: eligible for tax benefits by having medical insurance for you or your family.</li>
                            <li>Section 80EEA: eligible for tax benefits for interest paid on a home loan.</li>
                        </ul>
                        For more information, you can visit the official income tax website at <a href="https://www.incometax.gov.in/iec/foportal/help/individual/return-applicable-1" target={'_blank'} rel="noreferrer">here</a>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


        </div>
    )
}

export default Questions
