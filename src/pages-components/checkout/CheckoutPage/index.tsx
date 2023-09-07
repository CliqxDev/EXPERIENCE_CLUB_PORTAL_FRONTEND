import { useParams } from 'next/navigation';
import CheckoutIndividual from '../CheckoutIndividual';

const CheckoutPage = () => {
  const { plan }: any = useParams();

  return <>{plan === 'individual' && <CheckoutIndividual />}</>;
};

export default CheckoutPage;
