'use client'
import {Bars} from 'react-loader-spinner';
const Spinner = ({ loading }) => {
  return (
    <div className='flex items-center justify-center w-full left-0 fixed top-0  h-[100vh]'>
        <Bars
            color='hsl(26, 100%, 55%)'
            width= '100'
            height='150'
            loading={loading}
        />
    </div>
  );
};

export default Spinner