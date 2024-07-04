import { close } from '../../../assets/images'

export default function CloseNavbar({handleClose}) {
    return (
        <button onClick={handleClose} className='text-white bg-black p-2 rounded-full' >
            <img src={close}  className='w-7' />
        </button>
    )
}
