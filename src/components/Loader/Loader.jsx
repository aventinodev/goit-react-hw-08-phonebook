import ClipLoader from 'react-spinners/ClipLoader';

export const Loader = ({ size = 40, color = '#0984b9' }) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
    >
      <ClipLoader
        display="block"
        margin="0 auto"
        color={color}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
