import { Toaster, ToastBar } from 'react-hot-toast';

import * as S from './styles';

const ToasterComponent = () => (
  <S.ToasterWrapper>
    <Toaster
      position="bottom-center"
      toastOptions={{
        className: '',
        style: {
          width: '100%',
          color: '#1A1A19',
          fontFamily: 'Work Sans',
          fontSize: 16,
          fontStyle: 'normal',
          fontWeight: 400,
          textAlign: 'left'
        }
      }}
    >
      {t => (
        <ToastBar toast={t}>
          {({ message }) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM11.0234 5.71406L7.73281 10.2766C7.68682 10.3408 7.62619 10.3931 7.55595 10.4291C7.48571 10.4652 7.40787 10.4841 7.32891 10.4841C7.24994 10.4841 7.17211 10.4652 7.10186 10.4291C7.03162 10.3931 6.97099 10.3408 6.925 10.2766L4.97656 7.57656C4.91719 7.49375 4.97656 7.37813 5.07812 7.37813H5.81094C5.97031 7.37813 6.12187 7.45469 6.21562 7.58594L7.32812 9.12969L9.78438 5.72344C9.87813 5.59375 10.0281 5.51562 10.1891 5.51562H10.9219C11.0234 5.51562 11.0828 5.63125 11.0234 5.71406Z"
                  fill="#22C55E"
                />
              </svg>

              {message}
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  </S.ToasterWrapper>
);

export default ToasterComponent;
