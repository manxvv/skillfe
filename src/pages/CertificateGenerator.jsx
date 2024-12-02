import { useReducer, useState } from 'react'
import styles from '../assets/styles/certificateGenerator.module.scss'
import ModalCert from '../components/ModalCert'
import Certificate from '../view/Certificate'
import Button from '../components/Button'
const initialState = {
  name: '',
  charityOrg: '',
  amount: '',
  dateOfConductStart: '',
  dateOfConductEnd: '',
  signature: '',
  signatureDetails: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TEXT_CHANGE':
      return { ...state, [action.field]: action.payload }

    default:
      break
  }
}

const CertificateGenerator = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [formState, dispatch] = useReducer(reducer, initialState)

  const handleSubmitForm = e => {
    e.preventDefault()
    const { name, charityOrg, amount, dateOfConductStart, dateOfConductEnd, signature, signatureDetails } = formState

    if (name && charityOrg && dateOfConductStart && amount && signature && signatureDetails) {
      console.log(`Hello Amar: `, formState)

      setIsOpenModal(true)
    } else {
      alert('Please fill all details')
    }
  }

  const handleTextChange = e => {
    dispatch({ type: 'TEXT_CHANGE', field: e.target.name, payload: e.target.value })
  }

  return (
    <div className='font-poppins'>
      <div className={`dark:text-white text-black ${styles.wrapper}`}>
        <div className={styles.container}>
          <h1 className="text-secLine text-center font-semibold text-3xl">Generate Certificate</h1>
          <form onSubmit={handleSubmitForm}>
            <div className={`flex ${styles.inputGroup}`}>
              <label className='py-1' htmlFor='user-name'>Investor Name</label>
              <input className='dark:text-black text-sm rounded-md font-poppins outline-none shadow-lg focus:shadow-sm border-b-2 foucus:border-none focus:shadow-secLine sm:w-[40vw] py-1' type='text' name='name' value={formState.name} onChange={handleTextChange} id='user-name' />
            </div>

            <div className={styles.inputGroup}>
              <label className='py-1' htmlFor='charityOrg'>Charitable Organization Name</label>
              <input className='dark:text-black text-sm rounded-md font-poppins outline-none shadow-lg focus:shadow-sm border-b-2 foucus:border-none focus:shadow-secLine sm:w-[40vw] py-1' type='text' name='charityOrg' value={formState.charityOrg} onChange={handleTextChange} id='charityOrg' />
            </div>

            <div className={styles.inputGroup}>
              <label className='py-1' htmlFor='amount'>Donation Amount</label>
              <input className='dark:text-black text-sm rounded-md font-poppins outline-none shadow-lg focus:shadow-sm border-b-2 foucus:border-none focus:shadow-secLine sm:w-[40vw] py-1' type='text' name='amount' value={formState.amount} onChange={handleTextChange} id='amount' />
            </div>

            <div className={styles.inputGroup}>
              <label className='py-1' htmlFor='dateOfConductStart'>Date of Issue</label>
              <input className='dark:text-black text-sm rounded-md font-poppins outline-none shadow-lg focus:shadow-sm border-b-2 foucus:border-none focus:shadow-secLine sm:w-[40vw] py-1'
                type='date'
                value={formState.dateOfConductStart}
                onChange={handleTextChange}
                name='dateOfConductStart'
                id='dateOfConductStart'
              />
            </div>

            {/* <div className={styles.inputGroup}>
              <label className='py-1' htmlFor='dateOfConductEnd'>Date of Conduct - End</label>
              <input
                type='date'
                value={formState.dateOfConductEnd}
                onChange={handleTextChange}
                name='dateOfConductEnd'
                id='dateOfConductEnd'
              />
            </div> */}

            <div className={styles.inputGroup}>
              <label className='py-1' htmlFor='signature'>Signature</label>
              <input className='dark:text-white text-sm rounded-md font-poppins outline-none shadow-lg focus:shadow-sm border-b-2 foucus:border-none focus:shadow-secLine sm:w-[40vw] py-1'
                type='file'
                name='signature'
                id='signature'
                onChange={e => {
                  const selected = e.target.files[0]

                  const objectUrl = URL.createObjectURL(selected)

                  dispatch({ type: 'TEXT_CHANGE', field: e.target.name, payload: { ...selected, preview: objectUrl } })
                }}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className='py-1' htmlFor='signatureDetails'>Signature Details</label>
              <input className='dark:text-black text-sm rounded-md font-poppins outline-none shadow-lg focus:shadow-sm border-b-2 foucus:border-none focus:shadow-secLine sm:w-[40vw] py-1'
                type='text'
                name='signatureDetails'
                value={formState.signatureDetails}
                onChange={handleTextChange}
                id='signatureDetails'
              />
            </div>

            <Button name={"Generate Certificate"} className={styles.certBtn} type='submit'></Button>
          </form>
        </div>
      </div>
      <ModalCert isOpen={isOpenModal} handleClose={() => setIsOpenModal(false)}>
        <Certificate {...formState} />
      </ModalCert>
    </div>
  )
}

export default CertificateGenerator
