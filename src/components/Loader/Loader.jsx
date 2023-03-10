import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    // <div
    //   style={{
    //     height: 60,
    //     marginTop: 30,
    //     marginBottom: 30,
    //   }}
    // >
    <ColorRing
      visible={true}
      height="60"
      width="60"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        display: 'block',
        margin: '0 auto',
      }}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
    // </div>
  );
};
