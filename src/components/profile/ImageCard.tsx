import Image from 'next/image'
import sojibe from "../../../public/Sojibe.jpg"
import { Button } from '../ui/button'
import { MdOutlineCloudUpload } from "react-icons/md";

const ImageCard = () => {
    return (
        <div className='flex gap-4'>
            <div>
                <Image src={sojibe} width={100} height={100} alt='sojibe' className='rounded-full' />
            </div>
            <div className='flex flex-col justify-around'>
                <h3 className='text-xl font-medium text-gray-700'>Profile Picture</h3>
                <Button className='bg-blue-600'><MdOutlineCloudUpload/> Upload Image</Button>
            </div>
        </div>
    )
}

export default ImageCard