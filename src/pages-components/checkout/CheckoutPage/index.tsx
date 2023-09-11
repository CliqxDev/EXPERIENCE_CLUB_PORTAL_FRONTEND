import { useParams } from 'next/navigation';
import CheckoutIndividual from '../CheckoutIndividual';
import CheckoutCorp from '../CheckoutCorp';

const CheckoutPage = () => {
  const { plan }: any = useParams();

  return (
    <>
      {(plan === '1' || plan === '2') && <CheckoutIndividual />}
      {(plan === '3' || plan === '4') && <CheckoutCorp />}
    </>
  );
};

export default CheckoutPage;
